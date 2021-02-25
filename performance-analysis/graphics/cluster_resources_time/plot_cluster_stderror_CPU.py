import pandas as pd 
import matplotlib.pyplot as plt
import os

os.chdir('performance-analysis/graphics/cluster_resources_time/')
dataframe = pd.read_csv('Cluster_Resources_Media.csv',  delimiter=';', header=0, index_col=0)
print(dataframe)
ax = plt.gca()


#Print Lines
dataframe.plot(kind='line', y='CPU Média',color='darkblue', ax=ax)
dataframe.plot(kind='line', y='CPU Desvio Sup',color='darkblue', linestyle='dotted', alpha=0.5,label='Desvio Padrão CPU', ax=ax)
dataframe.plot(kind='line', y='CPU Desvio Inf',color='darkblue', linestyle='dotted', alpha=0.5, label='_nolegend_', ax=ax)


#Print Vertical Lines
ax.yaxis.grid(color='gray', linestyle='--', linewidth=0.5)
ax.set_xlabel("Tempo (s)")
plt.vlines(120, ymin=0, ymax=max(dataframe['CPU Desvio Sup'].to_list()), linestyles='dashed',label='Início Alocação', colors='darkblue', alpha=0.5)
plt.vlines(480, ymin=0, ymax=max(dataframe['CPU Desvio Sup'].to_list()), linestyles='dashed',label='Fim Alocação', colors='darkred', alpha=0.5)
plt.legend()


#Print Labels
plt.xlabel("Tempo (s)", fontsize=20)
plt.ylabel("Consumode Recursos (%)",fontsize=20)
#plt.title("Consumo de Recursos Médio por Nó K8S em função do Tempo")
plt.savefig('out/Cluster_Resources_StdError_CPUv1.pdf')

plt.show()
