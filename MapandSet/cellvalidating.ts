let cell:string="6171238760";
let re:any=/[0-9]{10}/;
if(cell.match(re)){
    console.log("cell is valid");
}else{
    console.log("cell is  Invalid"+cell);
}