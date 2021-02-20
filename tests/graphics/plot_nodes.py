import pandas as pd 
import matplotlib as mlp 
import matplotlib.pyplot as plt
import os

print (os.getcwd())

dataframe = pd.read_csv('Node_CPU.csv', index_col=0)

print(dataframe)

fig, ax = plt.subplots()
ax.bar (dataframe.index, dataframe['Media'])
plt.savefig('nodes_bar.png')