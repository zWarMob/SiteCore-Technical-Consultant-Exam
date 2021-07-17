## Test plan
Step | Description | Console output
--- | --- | ---
1 | Inject `wizzair_script.js` once the vue components have loaded | `🔥 Sitecore CDP Script Loaded`
2 | On every page change (when you go on to the next step) | `🔥 Page changed`
3 | When you reach the payment page | `🔥 And this is the payment page`
. | . | `🔥 so we sent out the travel itenirary`
4 | Check the payload sent to our CDP is the flight data
