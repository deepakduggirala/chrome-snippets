var error;
Promise.resolve()
    .then(function(){
        throw new Error('qwerty');
    })
    .catch(function(err){
        error = err;
        console.log(err.message);
    });