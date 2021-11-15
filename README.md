<img width="20%" src="https://github.com/my5G/my5G-RANTester/blob/master/docs/media/img/my5g-logo.png" alt="my5g-core"/>

# OPlaceRAN

![GitHub](https://img.shields.io/github/license/my5G/my5G-RANTester?color=blue)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/my5G/OPlaceRAN) 
![GitHub last commit](https://img.shields.io/github/last-commit/my5G/OPlaceRAN)
![GitHub contributors](https://img.shields.io/github/contributors/my5G/OPlaceRAN)

## Description
Based on the diversity presented in the literature and industry open-source projects, this work proposes the Orchestrator Placement RAN (OPlaceRAN), a vNG-RAN deployment orchestrator framed within the NFV reference architecture aligned to the O-RAN SMO framework. OPlaceRAN supports the agnostic placement of radio functions, focusing on the problem of vNG-RAN planning. Moreover, OPlaceRAN is designed following the functional NFVO sub-blocks, considering the RO control named RANPlacer, a complementary optimization module named RANOptimizer, the NSO control called RANDeployer, and, finally, a data repository referred to as RANCatalogs. RANPlacer handles the whole orchestration process, including external processing input from the Network Operator (quantity of radio units), crosshaul topology capacity, NFVI resources, and the alternative placement solutions stored in the RANCatalogs. RANOptimizer works with both exact and heuristics agnostic placement solutions, aware of the functional split requirements. In this case, the agnostic solution is a strategy of vNG-RAN placement applied on the OPlaceRAN developed independently of the orchestrator. RANDeployer applies the virtualized radio functions addressed by the placement approaches according to the RANPlacer inputs and the RAN CNFs also stored in the RANCatalogs. All the configuration, initialization, and validation processes of the virtualized radio functions are performed and activated by the RANDeployer.

If you have questions or comments, please email us: my5G team.

It is a pleasure to share our knowledge, and you are free to use it! Please, cite our work as we can continue contributing. Thank you!

```
@article{Morais2021,
    archivePrefix = {arXiv},
    arxivId = {2111.05475},
    author = {Morais, Fernando Zanferrari and Bruno, Gustavo Zanatta and Renner, Julio and Almeida, Gabriel and Contreras, Luis M. and Righi, Rodrigo da Rosa and Cardoso, Kleber Vieira and Both, Cristiano Bonato},
    eprint = {2111.05475},
    pages = {1--12},
    title = {{OPlaceRAN -- a Placement Orchestrator for Virtualized Next-Generation of Radio Access Network}},
    url = {http://arxiv.org/abs/2111.05475},
    volume = {XX},
    year = {2021}
}

````

## Documentation
https://github.com/my5G/OPlaceRAN/wiki/

## Contributing
https://github.com/my5G/template/blob/main/CONTRIBUTING.md

## License
https://github.com/my5G/OPlaceRAN/blob/master/LICENSE.txt

