const SITECORE_CDP = "api.capturedata.com";
const SUMMARY_PAGE = "/payment";
const SUMMARY_EVENT = "checkout_progress";
const SUMMARY_STEP = 5;

//https://stackoverflow.com/a/1216743/9551654
const DEBUG = TRUE;
if(!DEBUG){
    if(!window.console) window.console = {};
    var methods = ["log", "debug", "warn", "info"];
    for(var i=0;i<methods.length;i++){
        console[methods[i]] = function(){};
    }
}

//https://stackoverflow.com/a/4585031/9551654
(function(history){
    history.pushState = function(state) {
        setTimeout(onPageChange,1); 
    }
})(window.history);

console.log("🔥 Sitecore CDP Script Loaded");

function onPageChange(){
    console.log("🔥 Page changed");

    if(window.location.href.includes(SUMMARY_PAGE)){
        console.log("🔥 And this is the payment page");

        let data = dataLayer
            .filter(arg => arg["1"] == SUMMARY_EVENT)
            .filter(arg => arg["2"].checkout_step == SUMMARY_STEP)
            .pop()["2"].items;
        
        //https://stackoverflow.com/a/6418506/9551654
        var xmlhttp = new XMLHttpRequest(); 
        xmlhttp.open("POST", SITECORE_CDP);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(data));

        console.log("🔥 so we sent out the travel itenirary");
    }
}