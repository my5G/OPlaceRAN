import pandas as pd 
import matplotlib as mlp 
import matplotlib.pyplot as plt
import os
import numpy as np


os.chdir('performance-analysis/graphics/')

dataframe_CPU = pd.read_csv('Node_CPU.csv',  delimiter=';', header=0)
dataframe_MEM = pd.read_csv('Node_MEM.csv',  delimiter=';', header=0)
print(dataframe_CPU)


x = np.arange(len(dataframe_CPU['Node Number']))
width = 0.35  # the width of the bars
fig, ax = plt.subplots()
rects1 = ax.bar(x - width/2, dataframe_CPU['Media'], width, label='CPU %')
rects2 = ax.bar(x + width/2, dataframe_MEM['Media'], width, label='Memoria %')
ax.set_ylabel("% Consumida")
ax.set_xlabel("Descrição dos Nós")
ax.set_xticks(x)
ax.set_xticklabels(dataframe_CPU['Node Number'], rotation= 60, horizontalalignment= 'right')
ax.legend()

def autolabel(rects):
    """Attach a text label above each bar in *rects*, displaying its height."""
    for rect in rects:
        height = rect.get_height()
        ax.annotate('{}'.format(f'{height:.0f}'),
                    xy=(rect.get_x() + rect.get_width() / 2, height),
                    xytext=(0, 3),  # 3 points vertical offset
                    textcoords="offset points",
                    ha='center', va='bottom')

autolabel(rects1)
autolabel(rects2)
fig.tight_layout()
plt.title("Consumo de Recursos por Nó do Cluster Kubernetes")
plt.tight_layout()
plt.savefig('out/Nodes_Resources.png')
plt.show()
plt.clf()
