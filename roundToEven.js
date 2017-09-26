function roundToEven(x){
    //x = Math.round(x,1);
    var onesPlace = Math.floor(x%10);
    var oneTenthsPlace = Math.floor((x*10)%10);

    if(oneTenthsPlace > 5){
        return Math.floor(x)+1;
    }
    else if(oneTenthsPlace < 5){
        return Math.floor(x);
    }
    else{   //oneTenthsPlace == 5
        if(onesPlace%2 == 0){
            return Math.floor(x);
        }
        else{
            return Math.floor(x)+1;
        }
    }
}