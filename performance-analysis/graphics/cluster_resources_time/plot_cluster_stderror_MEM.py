import pandas as pd 
import matplotlib.pyplot as plt
import os

os.chdir('performance-analysis/graphics/cluster_resources_time/')
dataframe = pd.read_csv('Cluster_Resources_Media.csv',  delimiter=';', header=0, index_col=0)
print(dataframe)
ax = plt.gca()

dataframe.plot(kind='line', y='RAM Média',color='darkred', ax=ax)
dataframe.plot(kind='line', y='RAM Desvio Sup',color='darkred',linestyle='dotted', alpha=0.5,label='Desvio Padrão RAM', ax=ax)
dataframe.plot(kind='line', y='RAM Desvio Inf',color='darkred', linestyle='dotted', alpha=0.5,label='_nolegend_', ax=ax)
ax.yaxis.grid(color='gray', linestyle='--', linewidth=0.5)
ax.set_xlabel("Tempo (s)")
plt.vlines(120, ymin=0, ymax=max(dataframe['RAM Desvio Sup'].to_list()), linestyles='dashed',label='Início Alocação', colors='darkblue', alpha=0.5)
plt.vlines(480, ymin=0, ymax=max(dataframe['RAM Desvio Sup'].to_list()), linestyles='dashed',label='Fim Alocação', colors='darkred', alpha=0.5)
plt.legend()

plt.xlabel("Tempo (s)")
plt.ylabel("Consumode Recursos (%)")
#plt.title("Consumo de Recursos Médio por Nó K8S em função do Tempo")
#plt.gcf().subplots_adjust(bottom=0.5)

plt.savefig('out/Cluster_Resources_StdError_MEMv1.pdf')

plt.show()
