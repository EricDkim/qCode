document.addEventListener('DOMContentLoaded', function() {

    var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 100,
	height : 100
});

    chrome.tabs.getSelected(null, function(tab){
        var tabUrl = tab.url;
        var div = document.getElementById("sample");
        div.innerHTML = div.innerHTML + tabUrl;
        function makeCode(){
            qrcode.makeCode(tabUrl);
        }
        makeCode();
    });
});

