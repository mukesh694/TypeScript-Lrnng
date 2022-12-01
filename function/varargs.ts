var product=function(...numbs){ //we can use as much as we want  give the input. using the 3 dot  operator
    var result=1;
    for(var i=0;i<numbs.length;i++){
        console.log(numbs[i]);
        result*=numbs[i];
    }
    return result;
}

console.log(product(2,3,4,5));

//using a type on REST Param
var produc2t=function(a:number,b:number,...numbs){ 
    var result=1;
    for(var i=0;i<numbs.length;i++){
        console.log(numbs[i]);
        result*=numbs[i];
    }
    return result;
}