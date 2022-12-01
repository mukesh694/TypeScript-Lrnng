var pn:string=prompt("enter a number");
var n:number=parseInt(pn);

//using the for looop
for(var i=1;i<=n;i++){
    if(i%5===0)
    continue;
    console.log(i);
}

//using the while loop
var i = 0;
while (n>i){

if(i%5 !== 0){

console.log(i++);

}

}