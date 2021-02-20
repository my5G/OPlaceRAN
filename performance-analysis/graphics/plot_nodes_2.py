import pandas as pd 
import matplotlib as mlp 
import matplotlib.pyplot as plt
import os
import numpy as np

os.chdir('performance-analysis/graphics/')

dataframe_CPU = pd.read_csv('Node_CPU.csv',  delimiter=';', header=0)
dataframe_MEM = pd.read_csv('Node_MEM.csv',  delimiter=';', header=0)
max= len(dataframe_CPU['Node Number'].to_list())
#node_numbers = list(range(max))
node_numbers = dataframe_MEM['Nodes'].to_list()
media_CPU = dataframe_CPU['Media'].to_list()
media_MEM = dataframe_MEM['Media'].to_list()
stderror_CPU = dataframe_CPU['Desvio_Padrao'].to_list()
stderror_MEM = dataframe_MEM['Desvio_Padrao'].to_list()
lists = {'Nodes':node_numbers,'Media CPU':media_CPU,'Media MEM':media_MEM,\
    'Desvio CPU':stderror_CPU, 'Desvio MEM':stderror_MEM}
dataframe = pd.DataFrame (data=lists)
dataframe.set_index('Nodes')
print(dataframe)
dataframe[['Media CPU', 'Media MEM']]\
    .plot(kind='bar', yerr=dataframe[['Desvio CPU', 'Desvio MEM']].values.T,\
         alpha = 0.75,error_kw=dict(ecolor='k'),xticks=dataframe['Nodes'])
dataframe.plot

plt.show()

