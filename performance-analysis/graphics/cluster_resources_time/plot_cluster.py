import pandas as pd 
import matplotlib as mlp 
import matplotlib.pyplot as plt
import os
import numpy as np
os.chdir('performance-analysis/graphics/cluster_resources_time/')
dataframe = pd.read_csv('Cluster_Resources.csv',  delimiter=';', header=0)
plt.plot(dataframe['Time'],dataframe['Media_CPU'], label='% Media CPU',color='b')
plt.plot(dataframe['Time'],dataframe['Media_MEM'], label='% Media MEM',color='r')
plt.legend()
plt.xlabel("Tempo")
plt.ylabel("% Consumode Recursos")
plt.title("Consumo de Recursos Médio por Nó K8S em função do Tempo")
plt.savefig('out/Cluster_Resources.png')
plt.show()
