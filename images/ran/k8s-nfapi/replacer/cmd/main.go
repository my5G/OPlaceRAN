package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"text/template"

	"github.com/sirupsen/logrus"

	"gopkg.in/yaml.v2"
)

const (
	templatePath     = "/config/template/template.conf"
	configValuesPath = "/config/values/values.yaml"
	resultFilePath   = "/config/config.conf"

	splitPieceEnvVar = "SplitPiece"
)

type values struct {
	LocalAddress string `yaml:"localaddress,omitempty"`
	SouthAddress string `yaml:"southaddress,omitempty"`
	NorthAddress string `yaml:"northaddress,omitempty"`
	UPFAddress   string `yaml:"upfaddress,omitempty"`
}

func main() {
	logrus.Info("Starting replacer")
	v := &values{}
	splitPiece := os.Getenv(splitPieceEnvVar)
	switch splitPiece {
	case "cu":
		getCUContent(v)
	case "du":
		getDUContent(v)
	case "ru":
		getRUContent(v)
	default:
		logrus.Fatalf("Split '%s' is not valid", splitPiece)
	}

	logrus.Infof("split piece is '%s'", splitPiece)

	if err := replacer(v); err != nil {
		logrus.Fatalf("error replacing values: %s", err)
	}

	logrus.Info("Replacer finished!")
}

func getCUContent(cu *values) {
	for cu.LocalAddress == "" || cu.UPFAddress == "" || cu.SouthAddress == "" {
		if err := loadFile(cu); err != nil {
			logrus.Fatalf("error loading file for CU split: %s", err)
		}
	}
}

func getDUContent(du *values) {
	for du.LocalAddress == "" || du.NorthAddress == "" || du.SouthAddress == "" {
		if err := loadFile(du); err != nil {
			logrus.Fatalf("error loading file for DU split: %s", err)
		}
	}
}

func getRUContent(ru *values) {
	for ru.LocalAddress == "" || ru.NorthAddress == "" {
		if err := loadFile(ru); err != nil {
			logrus.Fatalf("error loading file for RU split: %s", err)
		}
	}
}

func loadFile(v *values) error {
	yamlFile, err := ioutil.ReadFile(configValuesPath)
	if err != nil {
		return fmt.Errorf("error reading file %s: %w", configValuesPath, err)
	}

	err = yaml.Unmarshal(yamlFile, v)
	if err != nil {
		return fmt.Errorf("error unmarshaling file %s: %w", configValuesPath, err)
	}

	return nil
}

func replacer(v *values) error {
	// TODO: Use gardener struct instead of template file
	tmpl, err := template.ParseFiles(templatePath)
	if err != nil {
		return fmt.Errorf("error parsing template file: %w", err)
	}

	outputFile, err := os.Create(resultFilePath)
	if err != nil {
		return fmt.Errorf("error opening shoot file: %w", err)
	}

	defer outputFile.Close()

	err = tmpl.Execute(outputFile, v)
	if err != nil {
		return fmt.Errorf("error replacing shoot template files: %w", err)
	}

	return nil
}
