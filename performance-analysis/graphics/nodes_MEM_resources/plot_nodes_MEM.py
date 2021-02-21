from matplotlib import colors
import pandas as pd 
import matplotlib.pyplot as plt
import os

os.chdir('performance-analysis/graphics/nodes_MEM_resources/')
dataframe = pd.read_csv('Node_MEM.csv',  delimiter=';', header=0, index_col=0, dtype={'RAM':float})
print(dataframe)
ax = dataframe.plot.bar(y='RAM', figsize=(9,7), color='darkblue')
ax.set_xlabel("Nós de Rede")
ax.set_ylabel("Consumo CPU (%)")
ax.yaxis.grid(color='gray', linestyle='--', linewidth=0.5)
plt.savefig('out/Nodes_MEM_Resources.pdf')
plt.show()
