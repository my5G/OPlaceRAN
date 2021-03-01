import pandas as pd 
import matplotlib as mlp 
import matplotlib.pyplot as plt
import os
import numpy as np

os.chdir('performance-analysis/graphics/nodes_resources/')

dataframe_CPU = pd.read_csv('Node_CPU.csv',  delimiter=';', header=0)
dataframe_MEM = pd.read_csv('Node_MEM.csv',  delimiter=';', header=0)
#print(dataframe_CPU)

x = np.arange(len(dataframe_CPU['Node Number']))
width = 0.35  # the width of the bars
fig, ax = plt.subplots()
rects1 = ax.bar(x - width/2, dataframe_CPU['Media'], width, color='b', label='CPU %')
rects2 = ax.bar(x + width/2, dataframe_MEM['Media'], width, color='r',label='Memoria %')
#ax.set_ylabel("% Consumida")
ax.set_xlabel("Descrição dos Nós")
ax.set_xticks(x)
ax.set_xticklabels(dataframe_CPU['Node Number'], rotation= 60, horizontalalignment= 'right')
ax.legend()

#def autolabel(rects):
#    """Attach a text label above each bar in *rects*, displaying its height."""
#    for rect in rects:
#        height = rect.get_height()
#        ax.annotate('{}'.format(f'{height:.0f}'),
#                    xy=(rect.get_x() + rect.get_width() / 2, height),
#                    xytext=(0, 3),  # 3 points vertical offset
#                    textcoords="offset points",
#                    ha='center', va='bottom')
#autolabel(rects1)
#autolabel(rects2)

#Plot Max
plt.hlines(max((dataframe_CPU['Media']).to_list()), xmin=0, xmax=25, linestyles='dashed', colors='b',label='Max CPU')
plt.text(0, max((dataframe_CPU['Media']).to_list()), 'Max CPU', ha ='left', va ='top') 
plt.hlines(max((dataframe_MEM['Media']).to_list()), xmin=0, xmax=25, linestyles='dashed', colors='r',label='Max Memory')
plt.text(0, max((dataframe_MEM['Media']).to_list()), 'Max MEM', ha ='left', va ='top') 

fig.tight_layout()
plt.title("Consumo de Recursos por Nó do Cluster Kubernetes")
plt.tight_layout()
plt.savefig('out/Nodes_Resources.png')
plt.show()
plt.clf()
