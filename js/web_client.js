// WebSocketのClient

$(function(){
    var ws = new WebSocket("ws://localhost:9999/");
    var log = "";
    ws.onmessage = function(message){
        log = log + "<br>" + message.data;
        document.getElementById("txt").innerHTML = log;
    }
})