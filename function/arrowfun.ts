var hello3=():string=>{ 
    return "hllo";}
    console.log(hello3());


    //passing paramter
var hello4=(name:string):string=>{ 
    return "hllo";}
    console.log(hello4("bharath"));


    var multip=(n1:number,n2:number):number{

    }
    console.log("Product :"+multip(2,7))


//array of arrow functions


    var myarray:Array<any>=[];
    for(var i=0;i<10;i++){
        myarray.push(():number=>{return i});
    }
    for(var i=0;i<10;i++){
        console.log(myarray[i]());
    }