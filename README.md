# SiteCore-Technical-Consultant-Exam

## Part 1:
Chose wizzair as site to send data from.

I found in window the relevant variable `dataLayer` that contained the users actions on the page. 

It contains every change in checkoutstep as a `checkout_progress` event

All itinerary  data is sent using a post request to the dummy /Sitecore/ CDP page "api.capturedata.com" 

`test_plan_wizzair.md` contains a table with the steps QA personel can perform and the expected output in the console.

## Part 2:

The `input_data.csv` is an exceprt (first few lines) from a csv dataset found in http://web.mit.edu/nsfnats/www/README.html

Our utility functions (and class) separated in `util.py` 

### Working with huge csv files
To work with the original file
1. Download the file `http://web.mit.edu/nsfnats/www/PassengerItineraries_2007_I.tar.gz`
2. Extract
3. Replace `input_data.csv`(2KB) with the content from `PassengerItineraries_01-2007.csv`(2.11GB)


### Further considerations
If million requests are made, consider using a library like [requests-futures](https://github.com/ross/requests-futures) or [requests-threads](https://github.com/requests/requests-threads)

If a large dataset like that is transfered to Sitecores CDP, send data in bulk (otherwise there will be millions of requests sent out)


### Code help (for Part 2)
- [python shorthand initializer](https://stackoverflow.com/a/48285480/9551654)
- [pass list as positional arguments](https://stackoverflow.com/questions/14518314/passing-a-list-as-positional-arguments-to-a-function-like-python-in-f)
- [remove additional empty lines when writing](https://stackoverflow.com/a/16864777)
- [set csv reader delimiter](https://stackoverflow.com/a/49414740)
- [make a class json seralizable](https://stackoverflow.com/a/3768975)
- [custom encoder with json dump](https://stackoverflow.com/q/57062992)