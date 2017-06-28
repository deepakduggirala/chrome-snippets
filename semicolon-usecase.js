var f = function(x){
	console.log(x)
	//return console.log.bind(null, 'hello')
}
(function(){
    return 'IEFE';
})()