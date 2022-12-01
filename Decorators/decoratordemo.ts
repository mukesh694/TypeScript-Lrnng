function methodDecora(constructor:Function){
    console.log('class decorator');
    console.log(constructor);
}

function propertyDecorator(target:any,propertyName:string){
    console.log("property decorator");
    console.log(target.constructor);
    console.log(propertyName)
}

function methodDecorator(target:any,methodName:string,descriptor:PropertyDescriptor){
    console.log("method decorator");
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
}
function paramDecorator(target:any,methodName:string,indexDecorator:number){
    console.log("param decorator");
    console.log(target);
    console.log(methodName);
    console.log(indexDecorator);
}



@classDecorator
class Product{
    @propertyDecorator
    name:string="Iphone";
    constructor(id:number){

    }
     
    @methodDecorator
     print(@paramDecorator test:string){
        console.log(this.name);
     }

}
let p=new Product(1);
console.log((<any>).price)