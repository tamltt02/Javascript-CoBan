
console.log("Lê");
console.log("Tâm");
console.log("Lê Thị Thanh Tâm");

const firstName = "Tâm";
const lastName ="Lê Thanh Tâm";
const age = 33;
//template string
const fullName = `Ten tôi là ${firstName} ${lastName}. Năm nay tôi ${age} tuổi`;
console.log(fullName);
// 3 dấu bằng là so sánh cả kiểu dữ liệu


const a= 10;
const b= 20;
function chuvi(x,y){
    const chuvi = (a+b)*2;
    console.log(chuvi);
}
chuvi(a,b);


const c=11;
function CL(m){
if(c%2==0){
    let result;
    result ="so chan";
}else{
    result = "so le";
}
return result;
}
console.log(CL(c));