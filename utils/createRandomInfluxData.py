
#import pandas as pd
import time
import random
#convert csv to line protocol;

#convert sample data to line protocol (with nanosecond precision)
#df = pd.read_csv("inflyx_input.csv")
low=random.randint(15, 20)
high=random.randint(50, 60)
value=random.randint(29, 48)
list=[]
currentTime=int(time.time()) 
for i in range(0,5):
    low=random.randint(15, 20)
    high=random.randint(50, 60)
    value=random.randint(2, 9)
    error=random.randint(10, 20)
    line = ("orders"
            + ",tagKey=orders"
            + " "
            + "low=" + str(low)+ ","
            + "high=" + str(high) + ","
            + "value=" + str(value)+ ","
            + "error=" + str(error)
            + " " + str(currentTime-(i*60)))
    list.append(line)
for i in range(5,120):
    low=random.randint(15, 20)
    high=random.randint(50, 60)
    value=random.randint(29, 48)
    error=0 
    line = ("orders"
            + ",tagKey=orders"
            + " "
            + "low=" + str(low)+ ","
            + "high=" + str(high) + ","
            + "value=" + str(value)+ ","
            + "error=" + str(error)
            + " " + str(currentTime-(i*60)))
    list.append(line)
thefile = open('influx_out.txt', 'w')
for item in list:
    thefile.write("%s\n" % item)