import pandas as pd 
import matplotlib.pyplot as plt
import os

os.chdir('performance-analysis/graphics/cluster_resources_time/')
dataframe = pd.read_csv('Cluster_Resources_Media.csv',  delimiter=';', header=0, index_col=0)
print(dataframe)
ax = plt.gca()

dataframe.plot(kind='line', y='CPU Media',color='darkblue', ax=ax)
dataframe.plot(kind='line', y='RAM Media',color='darkred', ax=ax)
dataframe.plot(kind='line', y='CPU Desvio Sup',color='darkblue', linestyle='dotted', alpha=0.5,label='Desvio CPU', ax=ax)
dataframe.plot(kind='line', y='CPU Desvio Inf',color='darkblue', linestyle='dotted', alpha=0.5, label='_nolegend_', ax=ax)
dataframe.plot(kind='line', y='RAM Desvio Sup',color='darkred',linestyle='dotted', alpha=0.5,label='Desvio Memória', ax=ax)
dataframe.plot(kind='line', y='RAM Desvio Inf',color='darkred', linestyle='dotted', alpha=0.5,label='_nolegend_', ax=ax,figsize=(12,6.75))




#ax = dataframe.plot(y='CPU Media', color='darkblue')
#ax.set_ylabel("Consumo dos RCs (%)")
#dataframe.plot(y='RAM Media', ax=ax, color='darkred')
ax.yaxis.grid(color='gray', linestyle='--', linewidth=0.5)
ax.set_xlabel("Tempo (s)")
plt.vlines(120, ymin=0, ymax=max(dataframe['RAM Desvio Sup'].to_list()), linestyles='dashed',label='Início Alocação', colors='darkblue', alpha=0.5)
plt.vlines(480, ymin=0, ymax=max(dataframe['RAM Desvio Sup'].to_list()), linestyles='dashed',label='Fim Alocação', colors='darkred', alpha=0.5)
plt.legend()

plt.xlabel("Tempo")
plt.ylabel("% Consumode Recursos")
#plt.title("Consumo de Recursos Médio por Nó K8S em função do Tempo")
plt.savefig('out/Cluster_Resources_StdError.pdf')

plt.show()
