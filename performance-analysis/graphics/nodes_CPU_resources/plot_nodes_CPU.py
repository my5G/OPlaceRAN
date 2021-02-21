import pandas as pd 
import matplotlib.pyplot as plt
import os

os.chdir('performance-analysis/graphics/nodes_CPU_resources/')
dataframe = pd.read_csv('Node_CPU.csv',  delimiter=';', header=0, index_col=0)
print(dataframe)
ax = dataframe.plot.line(y='Pico', color='r')
ax.set_xlabel("Nós de Rede")
ax.set_ylabel("Consumo CPU (%)")
dataframe.plot.bar(y='Media', ax=ax, color='b',figsize=(9,7))
plt.savefig('out/Nodes_CPU_Resources.pdf')
plt.show()
