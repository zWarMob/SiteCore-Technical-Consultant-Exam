import csv
import json
from dataclasses import dataclass
from json import JSONEncoder

def getdata(filename):
    with open(filename, "r") as csvfile:
        datareader = csv.reader(csvfile, delimiter=";")
        yield next(datareader)
        for row in datareader:
            yield row

def gettransformeddata(filename):
    for row in getdata(filename):
        yield ItineraryData(*row)

@dataclass
class ItineraryData:
    """Class for keeping track of Itinerary data."""
    firstFlightID: str
    firstOperatingCarrier: str
    firstOrigin: str
    firstDestination: str
    firstMonth: str
    firstDay: str
    firstDeparture: str
    firstArrival: str
    firstCapacity: str
    secondFlightID: str
    secondOperatingCarrier: str
    secondOrigin: str
    secondDestination: str
    secondMonth: str
    secondDay: str
    secondDeparture: str
    secondArrival: str
    secondCapacity: str
    numberPassangers: str

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)

class DefaultEncoder(JSONEncoder):
        def default(self, o):
            return o.__dict__    


## Used to create the CSV file in the solution
## Might not work as expected on non-win env. (because of newline being replaced)

# createcsvexcerpt("PassengerItineraries_01-2007.csv",30)
def createcsvexcerpt(filename, maxRows):
    count = 0
    out = csv.writer(open("input_data.csv", "w",newline=''), delimiter=";") 
    for row in getdata(filename):
        count += 1
        out.writerow(row)
        if (count >= maxRows):
            break