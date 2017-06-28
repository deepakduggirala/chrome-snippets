function randRange(a,b){
    var min_num = Math.min(a,b);
    var max_num = Math.max(a,b);
    var scale = max_num - min_num;
    var offset = min_num;
    return offset + Math.random()*scale;
}

function randInt(a,b){
    return Math.floor(randRange(a,b));
}

function randSentence(maxWords=20){
    var sentence = [];
    var numWords = randInt(1,maxWords);
    for(var i=0; i<numWords; i++){
        sentence.push(randWord());
    }
    return sentence.join(' ');
}

function randWord(minLen=3, maxLen=10){
    var length = randInt(minLen, maxLen);
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_-+={[}]|'\";:.>,</?";
    var word = '';
    for(var i=0;i<length; i++){
        word += possible.charAt(randInt(0,possible.length));
    }
    return word;
}