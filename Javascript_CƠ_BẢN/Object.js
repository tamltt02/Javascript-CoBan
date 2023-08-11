// Object 
var myInfo = {
    name : 'Thanh Tam',
    age : 18,
    [address]: 'Ha Noi,VN',
    getName : function(){
        return this.name;
    }
}
//them key ms
myInfo.email = 'thanhtam@gmai;.com';


console.log(myInfo);
// lay value ra
var myKey = 'address';
console.log(myInfo['myKey']);// cach 1

console.log(myInfo.address);//cach 2

//xoa value
 delete myInfo.age;
 // goi ham
 console.log(myInfo.getName());


 // Function: phuowng thuwsc
 // Others: thuoc tinh