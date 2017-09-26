var utils = (function(){
    var utils = {};
    utils.setIntervalX = function (callback, delay, repetitions) {
        'use strict';
        var x = 0;
        var intervalID = window.setInterval(function () {
           callback();
           if (++x === repetitions) {
               window.clearInterval(intervalID);
           }
        }, delay);
    }

    utils.randRange = function(a,b){    //a, b are whole numbers, range is inclusive and b >= a
        'use strict';
        if(a<0 || b<0) return;
        if(a > b) return;
        if(a === b) return a;
        return a + Math.floor(Math.random()*Math.pow(10,(Math.floor(Math.log10(b-a))+1)))%(b-a+1);
    }

    utils.randomString = function(minChars, maxChars, startAscii, endAscii){
        'use strict';
        return [... new Array(utils.randRange(minChars, maxChars))]
                .map(() => String.fromCharCode(utils.randRange(startAscii, endAscii)))
                .join('');
    }

    utils.parseURL = function (url){
        'use strict';
        var url = new URL(url);
        url.params = url.search
                        .slice(1)
                        .split('&')
                        .map(item => item.split('='))
                        .reduce((acc, item) => {acc[item[0]] = item[1]; return acc;}, {});
        return url;
    }
    
    utils.metricRunner = function(test, options, results){    //delay should be 100 ms greater than expected maximum test running time
        var t0,
            count = 0;
        function callback(result){
            results.push({
                time : performance.now() - t0,
                result : result
            });
        }
        utils.setIntervalX(function(){
            console.log('repetition:', ++count);
            t0 = performance.now();
            test(callback);
            if(count === options.repetitions)
                console.log('done');
        }, options.delay, options.repetitions);
    }
    
    return utils;
})();

(function(console){

    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console);