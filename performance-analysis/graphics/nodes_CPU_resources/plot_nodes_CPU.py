import pandas as pd 
import matplotlib.pyplot as plt
import os

os.chdir('performance-analysis/graphics/nodes_CPU_resources/')

dataframe = pd.read_csv('Node_CPU.csv',  delimiter=';', header=0, index_col=0)
print(dataframe.index)
ax = dataframe.plot.line(y='Pico', color='r')
ax.set_xlabel("Número dos Nós")
ax.set_ylabel("Consumo CPU (%)")
dataframe.plot.bar(y='Media', ax=ax, color='b')
plt.savefig('out/Nodes_CPU_Resources.pdf')
plt.show()
