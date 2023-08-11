//forEach, find,filter,some,every,reduce

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
]
//courses.length = 1000;
//courses.forEach(function(course,index,array) {
   // console.log(course,index,array);

//})

// xay dung forEach2

Array.prototype.forEach2 = function(callback){
    for (var index in this){
      //  console.log(index, this.hasOwnProperty(index));// ktra index co nam trong phtu khong
        if(this.hasOwnProperty(index)){
            console.log(index);
            callback(this[index],index,this);
        }      
    }
}

courses.forEach2(function(course,index,array) {
    console.log(course,index,array);
})


// xoa phan tu trong mang 
// arr = ['a','b','c','d','a','b','c']
var array = ['a','b','c','d','a','b','c'];
console.log(new Set(array));