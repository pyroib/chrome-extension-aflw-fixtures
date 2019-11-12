chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked(tab){
	let payload = {
		extension:"aflw",
		action:"insert"
	}
	chrome.tabs.sendMessage(tab.id, payload);
}