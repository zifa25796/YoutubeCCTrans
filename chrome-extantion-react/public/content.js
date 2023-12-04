chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.logThisMessage) {
        let message = request.logThisMessage
        console.log(message)
    }
})