package types

type Handler interface {
	Sync() error
}
