const SITECORE_CDP = "api.capturedata.com";
const SUMMARY_PAGE = "/payment";
const SUMMARY_EVENT = "checkout_progress";
const SUMMARY_STEP = 5;


(function(history){
    history.pushState = function(state) {
        setTimeout(onPageChange,1); 
    }
})(window.history);

function onPageChange(){
    if(window.location.href.includes(SUMMARY_PAGE)){
        let data = dataLayer
            .filter(arg => arg["1"] == SUMMARY_EVENT)
            .filter(arg => arg["2"].checkout_step == SUMMARY_STEP)
            .pop()["2"].items;
        
        var xmlhttp = new XMLHttpRequest(); 
        xmlhttp.open("POST", SITECORE_CDP);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(data));
    }
}