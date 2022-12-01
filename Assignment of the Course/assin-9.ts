class Organizer{
    id:number;
    name:string;
 
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
       
    }


    display(){
        console.log(this.id+" "+this.name);
}
}
var organizer=new Organizer(125,"Mandi");
organizer.display();


class Event1{
    id:number;
    name:string;
    decription:string;
    startTime:string;
    endTime:string;

    constructor(id:number,name:string,decription:string, startTime:string,endTime:string){
        this.id=id;
        this.name=name;
        this.decription=decription;
        this.startTime=startTime;
        this.endTime=endTime;
        
    }


    display(){
        console.log(this.id+" "+this.name+" "+this.decription+" "+this.startTime+" "+this.endTime);
}

}

var event1=new Event1(125,"Mandi","Nothing is im....","25/1/121","14/24/12");
organizer.display();





class Value{
    id:number;
    name:string;
    decription:string;
    address:string;


    constructor(id:number,name:string,decription:string, address:string){
        this.id=id;
        this.name=name;
        this.decription=decription;
        
        this.address=address;
        
    }


    display(){
        console.log(this.id+" "+this.name+" "+this.decription+" "+this.address);
}

}


var values=new Value(125,"Mandi","Nothing is im....","Patna");
organizer.display();