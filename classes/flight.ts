interface Iflight{
    flightNo:number;
    from:string;
    to:string;
    displya():void;
}

class Flight implements Iflight{
    flightNo:number;
    from:string;
    to:string;

    constructor(flightNo:number,from:string,to:string){
        this.flightNo=flightNo;
        this.from=from;
        this.to=to;
    }



     displya() {
         console.log(this.flightNo,this.from,this.to);
     }

}
var flight= new Flight(125,"Patna","Bengaluru");
flight.displya();