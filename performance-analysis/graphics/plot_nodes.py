import pandas as pd 
import matplotlib as mlp 
import matplotlib.pyplot as plt
import os

os.chdir('performance-analysis/graphics/')

dataframe_CPU = pd.read_csv('Node_CPU.csv',  delimiter=';', header=0)
dataframe_MEM = pd.read_csv('Node_MEM.csv',  delimiter=';', header=0)
print(dataframe_CPU)

fig, ax = plt.subplots()
ax.bar (dataframe_CPU['Node Number'], dataframe_CPU['Media'])
ax.set_xticklabels(dataframe_CPU['Node Number'], rotation= 60, horizontalalignment= 'right')
ax.set_title("Consumo de Recursos por Nó do Cluster Kuberneter")
ax.set_ylabel("% Consumida")
ax.set_xlabel("Descrição dos Nós")
plt.savefig('out/Nodes_Resources.png')
#plt.show()
