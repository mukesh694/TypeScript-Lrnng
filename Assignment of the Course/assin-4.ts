var employee={
    id:1854,
    firstName:"Manish",
    salary:900
};

for(var item in employee){
    console.log(item);
    console.log(employee[item]);
}

var { id,firstName,salary}=employee;
    console.log(id,firstName ,salary);
    
    