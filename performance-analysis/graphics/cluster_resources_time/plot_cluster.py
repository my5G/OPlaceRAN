import pandas as pd 
import matplotlib as mlp 
import matplotlib.pyplot as plt
import os
os.chdir('performance-analysis/graphics/cluster_resources_time/')
dataframe = pd.read_csv('Cluster_Resources.csv',  delimiter=';', header=0, index_col=0)
ax = dataframe.plot(y='CPU', color='darkred')
ax.set_ylabel("Consumo de Recursos")
dataframe.plot(y='Memória', ax=ax, color='darkblue',figsize=(9,7))
ax.yaxis.grid(color='gray', linestyle='--', linewidth=0.5)
ax.set_xlabel("Tempo (s)")
plt.vlines(120, ymin=0, ymax=max(dataframe['Memória'].to_list()), linestyles='dotted',label='Início Pico', colors='darkblue')
plt.vlines(480, ymin=0, ymax=max(dataframe['Memória'].to_list()), linestyles='dotted',label='Fim Pico', colors='darkred')
plt.legend()
plt.savefig('out/Cluster_Resources.pdf')
plt.show()