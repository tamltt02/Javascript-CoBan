
//for in
var myInfo ={
    name : 'Thanh tam',
    age : 18,
}
for(var key in myInfo){
    console.log(myInfo[key]);
}

//for of: khong ap dung voi object
var languages = [
    'Java',
    'PHP',
]
for (var key of languages){
    console.log(languages[key]);
}
