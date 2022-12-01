class Check{
    static bankName:string="Bank of America";
    customerName:string;
    accNo:number;
    routingNum:number;

   display(){
        Check.bankName="BOA";
        console.log(Check.bankName);
   }
}

var chck=new Check();
 chck.accNo;

chck.display();

 var chck2=new Check();
 chck.accNo;

 