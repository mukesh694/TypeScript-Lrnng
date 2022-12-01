class Student{
   private _name:string;
//for accessing the private field we need to use the set and get method

get getName():string{
    return this._name;
}

set setName(name:string){
     this._name=this._name;
}


}

   var st= new Student();

     st.setName="bob";
     console.log(st.getName);