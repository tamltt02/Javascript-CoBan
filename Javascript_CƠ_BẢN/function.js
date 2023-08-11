// Ham
//1.Tao ham dau tien
function showDiaLog() {
    alert('Hi xin chao cac ban!');
}
showDiaLog();

// 2.Tham số
//-kieu du lieu k gioi han
function writeLog1(message,message2) {
    console.log(message);
    console.log(message2);

}
writeLog1('Test message','Mess');// đối số
writeLog1(123);// đối số

//argument
function writeLog2() {
   console.log(arguments);
}
writeLog2('log4','log5');

// for of
function writeLog() {
    var myString= '';
    for (var param of arguments){
    myString += `${param} - `
        }
        console.log(myString);
}
writeLog('log6','log2');


// return trong js
 var 