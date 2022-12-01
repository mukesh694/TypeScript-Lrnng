class Bmw{
    make:string;
    model:string;
    year:number;

   commonEngineFun(){
        console.log("common fun");
     }

      constructor(make:string,model:string,year:number){
        this.make=make;
        this.model=model;
        this.year=year;
      }



   start(){
    console.log("start eng")

   }


   stop(){
    console.log("stop car");
   }
}

class ThreeSeries  extends Bmw{
  cruiseControlEnabled:boolean;

       cruiseControl(){
        this.cruiseControlEnabled=true;
        console.log("controller method enabled");
       }
  constructor( make:string,model:string,year:number,cruiseControlEnabled:boolean){
    super(make,model,year);
    this.cruiseControlEnabled=cruiseControlEnabled;

  }

  start(){
    console.log("button start ")

   }


   stop(){
    console.log("stop button");
   }
}

class FiveSeries extends Bmw{
       parkingAssistEnabled:boolean;


       parkingAssist(){
        this.parkingAssistEnabled=true;
        console.log("assisting the parking ");
       }

       constructor( make:string,model:string,year:number,parkingAssistEnabled:boolean){
        super(make,model,year);
        this.parkingAssistEnabled=parkingAssistEnabled;

       }
        start(){
            console.log("Remote start ")
        
           }
        
        
           stop(){
            console.log("Remote stop ");
           }
           
}
var  threeSeries=new ThreeSeries("bmdw","1234i",1245,true);

console.log(threeSeries.cruiseControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
threeSeries.commonEngineFun();
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControl();


var fiveSeries=new FiveSeries("bmdw","1234i",1245,true);
console.log(threeSeries.cruiseControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
fiveSeries.commonEngineFun();
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssist()

