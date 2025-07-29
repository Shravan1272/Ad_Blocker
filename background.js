
/*
     event triggers when the browser has committed to load a webpage.
    As opposed to e.g. webNavigation.onCompleted, this will start to run early
    so that we can begin to remove ads as soon as possible.
*/

chrome.webNavigation.onCommitted.addListener(function(tab){
    //prevents script from running when other frames load
    if(tab.frameId==0){
        chrome.tabs.get(tab.tabId,(currentTab)=>{
            //get the URL of the web page
            let url = currentTab.url;

            //remove unnecessary protocol definations and www subdomain from URL
            let parsedUrl = url
            .replace("https://","")
            .replace("http://","")
            .replace("www.","");

            //remove path and queries(linked.com/feed)
            //we only need the base domain
            //so to obtain only the part of URL "linkedin.com":
            let endSlash = parsedUrl.indexOf('/')===-1? parsedUrl.length : parsedUrl.indexOf('/');
            let endQuery = parsedUrl.indexOf('?')===-1? parsedUrl.length : parsedUrl.indexOf('?');
            let endIndex = Math.min(endSlash, endQuery);
            let domain = parsedUrl.slice(0, endIndex);

           try {
                if(domain.length<1 ||domain===null || domain===undefined){
                    return;
                }else if(domain == "linkedin.com"){
                    chrome.scripting.executeScript({
                        target: {tabId:tab.tabId},
                        files:["linkedin.js"]
                    });
                    
                }
            }catch(err){
                console.error("Error: ",err);
            }
        });
    }
});

