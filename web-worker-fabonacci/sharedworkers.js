var a = 1;

// sharedworkers.js
onconnect = function (e) {
    // 通过 e.ports 拿到 port
    var port = e.ports[0];

    // port.onmessage 监听父线程的消息
    port.onmessage = function () {
        // port.postMessage 向父线程传递消息
        throw "Error from worker.";
        port.postMessage(a++)
    }
}