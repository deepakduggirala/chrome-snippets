function zip(xs1, xs2){
    return xs1.split('').map((e,i) => {
        return [e, xs2[i]];
    });
}