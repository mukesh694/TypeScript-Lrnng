function hello():string{
    return "hello";

}
console.log(hello());

//parameterised  fucntion
function hello1(name:string):string{
    return "hello"+name;
}
console.log(hello1("ram"));

//passing the multiple parameter
function sum(num1:number,numb2:number):number{
    return num1+numb2;
}

console.log(sum(2,8));



//optinal parameter
function display(id:number,name:string,role?:string){
    console.log("ID"+id);
    console.log("name"+name);
    if(role!=undefined){
    console.log("role"+role);
    }
}
display(1,"ram");


//default value**************************************************************************
function display1(id:number,name:string,role:string="Normal"){
    console.log("ID"+id);
    console.log("name"+name);
    if(role!=undefined){
    console.log("role"+role);
    }
}
display1(1,"ram");

//*****************************function as parameter***************** */
function calculator(fun:any):void{
    console.log(fun(10,54));
}

calculator(sum);

//***********************returning  a functions************* */
function calculator1():any{
    function subtract(x:number,y:number):number{
        return x-y;
    }

    return subtract;
}

var sub=calculator1();
console.log(sub(20,5));
//or
console.log(calculator1()(20,5)); //another way to call the calculator1 functions


//anonymous functions******************************************************************************

var hello2=function (name:string):string{
    return "Hello "+name;
}

console.log(hello2("Rahul"));


//****************Overloading************************************************* */
