function GlobalEventSource(url, settings){
    const source = new EventSource(url, settings);
    source.addEventListener('open', function(){
        console.log('calling sessionTimeoutReminder');
        //sessionTimeoutReminder.init();
    });
    return source;
}
var errror;
var source = GlobalEventSource('/stream/mixed');
source.addEventListener('message', function(e){
    console.log('message');
    catalog_data = e.data;
}, false);

var source2 = GlobalEventSource('/stream/mixed');
source2.addEventListener('message', function(e){
    console.log('message2');
    catalog_data = e.data;
}, false);

source.addEventListener('open', console.log, false);
source.addEventListener('error', function(e){
    console.log('error event');
    error = e;
    e.target.close();
}, false);

source.addEventListener('close', function(e){
    console.log('close event');
    e.target.close();
}, false);

source2.addEventListener('close', function(e){
    console.log('close event2');
    e.target.close();
}, false);

source.addEventListener('redirect', function(e){
    console.log('redirect event');
    const url = e.data;
    console.log('redirecting to', url);
    e.target.close();
    window.location = url;
}, false);