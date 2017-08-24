function stringDiff(s1, s2){
    return (zip(s1,s2)).reduce((acc, curr, i) => {
        if(curr[0] !== curr[1]){
           acc.status = false;
           acc.index = i;
        }
        return acc;
    }, {status: false,index:-1});
}

function zip(xs1, xs2){
    return xs1.split('').map((e,i) => {
        return [e, xs2[i]];
    });
}