interface Product{
    id:number;
    name:string;
    description:string;
    price:number;
    display():void;
}  
//we can also use optional properties using the ? in the interface.if we want to any field to be optional.
//now going to create the object of above interface.

var product1:Product={
    id:124,
    name:"Mukesh",
    description:"Iphone",
    price:25000,
    display():void{
        console.log(this.id+" "+this.name);
    }

}
var product2:Product={
    id:124,
    name:"Mukesh",
    description:"Iphone",
    price:25000
    display():void{
        console.log(this.id+" "+this.name);
    }
}