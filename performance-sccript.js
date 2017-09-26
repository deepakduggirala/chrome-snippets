function timeit(f){
    return function(){
        var t0 = performance.now();
        result = f.apply(this, arguments);
        var t1 = performance.now();
        console.log((t1 - t0) + " milliseconds.");
        return result;
    }
}