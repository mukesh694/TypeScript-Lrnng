function gradeCalculator(physics:number,math:number,chemistry:number):string{
  var avggarde=(physics+math+chemistry)/3;
  if(avggarde>90){
   return "A grade";
  }else if(avggarde>70 && avggarde<90){
    return"B grade";
  }  else if(avggarde<70)
   return"c grade";
}

   console.log(gradeCalculator(80,80,80));