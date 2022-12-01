let password:string="ts124er";
let regExp:any=/(?=.*[A-Z]) \w{4,10}/

if(password.match(regExp)){
    console.log("valid password");
}else{
    console.log("invalid password"+password);
}