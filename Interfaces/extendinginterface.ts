interface Exterior{
    color:string;
    numberOfDoors:number;
}
interface Interior{
    seats:number;
    auto:boolean;
}

interface Car extends Exterior,Interior{
    make:string;
    model:string;
    year:number;
}

//now creating the object

var myCar:Car={
    make:"Honda",
    model:"Civic",
    year:2022,
    color:"red",
    seats:5,
    auto:true,
    numberOfDoors:5
}