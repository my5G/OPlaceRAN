import os

import pandas as pd

# List all files in a directory using os.listdir
basepath_dir = '/home/vmadmin/tests/2_copy/'


for entry_dir in os.listdir(basepath_dir):
    if os.path.isdir(os.path.join(basepath_dir, entry_dir)):
        basepath = basepath_dir+entry_dir
        for entry in os.listdir(basepath):
            if os.path.isfile(os.path.join(basepath, entry)):
                df = pd.read_fwf(basepath+'/'+ entry)
                df.to_csv(basepath +'/'+ entry +'.csv')
