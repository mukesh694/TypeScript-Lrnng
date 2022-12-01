 function doubleMe(n1:number);
 function doubleMe(n1:string);

function doubleMe(n1:any) {
  if(n1 && typeof n1==="number"){
    console.log(n1*2);

  } else if(n1 && typeof n1==="string"){
    console.log(n1+" "+n1);
  }
}
doubleMe(5);
doubleMe("Ram");