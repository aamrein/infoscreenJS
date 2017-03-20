import $ from "jquery";

window.onload = runInfoscreen;

$.getJSON("http://localhost:8080/resources.json", function(data) {
    runInfoscreen(data);
});

function runInfoscreen(resources){
    let contentIframe = document.getElementById('content');
    requestFullScreen(contentIframe);

    let index = 0;
    let loadSite = function (resource, timeout) {
        document.getElementById('content').src = resource;

        let nextResource = resources[index].res;
        let nextTimeout = resources[index].timeout;

        index++;
        index = index < resources.length ? index : 0;

        setTimeout(function(){
            loadSite(nextResource, nextTimeout)
        }, timeout);
    };

    loadSite(resources[index].res, resources[index].timeout)
}

function requestFullScreen(element) {
    let fullScreen = element.requestFullScreen
        || element.webkitRequestFullScreen
        || element.mozRequestFullScreen
        || element.msRequestFullScreen;

    if (fullScreen) {
        fullScreen.call(element);
    }
}

