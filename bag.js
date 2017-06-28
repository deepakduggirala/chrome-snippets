function Bag(n){
    this._bag = new Set();
    this.add = function(items){
        items.forEach(item => this._bag.add(item));
    },
    this.populateNumbers = function(n){
        this.add([ ... Array(n).keys() ]);
    },
    this.fetch = function(){
        var values = [ ... this._bag.values()];
        var numItems = values.length;
        if(numItems === 0){
            throw new Error('Bag is empty');
        }
        var item = values[randInt(0,numItems)]
        this._bag.delete(item);
        return item;
    }
    var arg = arguments[0];
    if(arg.constructor === Array){
        this.add(arg)
    }
    else if(arg.constructor === Number){
        this.populateNumbers(arg);
    }
    else{
        throw new Error('Argument to constructor must be an array or a number');
    }
}