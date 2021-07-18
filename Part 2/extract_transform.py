from util import gettransformeddata
from util import DefaultEncoder

with open('output.json', 'w', encoding='utf-8') as f:
    dataWithoutHeader = list(gettransformeddata("input_data.csv"))[1:]
    f.write(DefaultEncoder().encode(dataWithoutHeader))
    