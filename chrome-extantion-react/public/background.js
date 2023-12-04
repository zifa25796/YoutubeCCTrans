chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url) {
       if (/^https:\/\/www\.youtube\.com/.test(changeInfo.url)) {
            document.querySelector("video").addEventListener("timeupdate", function() {
                chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
                    if (request.logToConsole) {
                        let message = request.message;
                        chrome.tabs.sendMessage(tabId, {
                            logThisMessage: message
                        })
                    }
                })
            })
       }
    }
})