//Mang trong JS
//1.Tao mang
var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    null,
    undefined,
    function(){

    },
    1233
]
// cach tao 2: 
var lag = new Array(
    'Javascript',
    'PHP',
    'Ruby',
    null,
    undefined,
    function(){

    },
    1233
)
console.log(languages);
// kiem tra kieu du lieu
console.log(Array.isArray(languages));
console.log(Array.isArray([]));

//Truy xuat mang
console.log (languages.length);
//lay phan tu theo index
console.log(languages[2]);
