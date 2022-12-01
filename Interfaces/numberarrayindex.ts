interface StudentName{
    [index:number]:string;  //index will be number and value will be string.
}
var studentName:StudentName=["Ram","Shyam","Rahul"];

//stirng index
interface StudentScore{
    [index:string]:number; 
}
var studentScore:StudentScore={}//it will like object
studentScore["Ram"]=100;
studentScore["Shayam"]=500;
studentScore["Rahul"]=300;

for(var item in studentScore){
console.log(studentScore[item]);
}