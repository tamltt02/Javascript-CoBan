var a = null;
var b = null;
var o = null;


function toan_hang(x){
    if(a == null){
        a = x;
    }else{
        b = x;
    }
}
function toan_tu(x){
    o = x;
}
function thuchien(){
    switch(o){
        case "+":
            var c= a+b;
           alert("Tong : " + c);
           break; 
        case "-":
            c= a-b;
            alert("Hieu : " + c);
            break; 
        case "x":
            c= a*b;
            alert("Tich : " + c);
             break; 
        case ":":
            c = a/b;
           alert("Thuong : " + c);
          break;  
          default:
        alert( o +' không phải toán tử');              
    }
}
function lamlai(){
     a = null;
    b = null;
    o = null;
}

toan_hang();
toan_tu();
thuchien();
lamlai();