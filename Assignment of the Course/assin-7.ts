var primecheck=(n:number):void=>{
    var flag=0;
    if (n==0 || n==1)
    flag =1;

  for (var i=2; i<=n/2; ++i) {

    if (n%i===0) {
      flag=1;
      break;
    }
}
if(flag===0){
    console.log("Prime Number");
}  else
{
    console.log("Not Prime Number");
}


}
primecheck(23);