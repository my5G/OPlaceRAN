import pandas as pd 
import matplotlib.pyplot as plt
import os

from pandas.core.indexes.base import Index

os.chdir('performance-analysis/graphics/nodes_CPU_resources/')
dataframe = pd.read_csv('Node_CPU.csv',  delimiter=';', header=0, index_col=0)
print(dataframe)
ax = dataframe.plot(y='Pico', color='darkred', style='.')
ax.set_ylabel("Consumo CPU (%)")
dataframe.plot.bar(y='Media', ax=ax, color='darkblue')
ax.yaxis.grid(color='gray', linestyle='--', linewidth=0.5)
ax.set_xlabel("Nós de Rede")
plt.gcf().subplots_adjust(bottom=0.2)
plt.savefig('out/Nodes_CPU_Resources.pdf')
plt.show()
