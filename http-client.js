var error;
Promise.resolve($.ajax({
    method: 'GET',
    url: '/renewSession'
}))
.then(response => {console.log(response)})
.catch(err => {error=err;console.log(err)});