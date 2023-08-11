// array methods
var courses = [
    {
        id: 1,
        name : 'Javascript',
        coin : 250
    },
    {
        id: 2,
        name : 'HTML,CSS',
        coin : 0
    },
    {
        id: 3,
        name : 'Ruby',
        coin : 0
    },
    {
        id: 4,
        name : 'PHP   ',
        coin : 400
    },
    {
        id: 5,
        name : 'ReactJs',
        coin : 500
    }
]
// for each
courses.forEach(function(course) {
        console.log(course);
})

//every: kiem tra tat ca ptu dung hay k
//var isFree = courses.every(function(course,index){
    //return course.coin ===0;
//})
//console.log(isFree);

//some: kiem tra 1 phtu dung thi dung
var isUn = courses.some(function(course,index) {
    return course.coin === 0;
})
console.log(isUn);

//map(): thay doi ptu 
function courseHandler (course){
   // console.log(course);
   return{
       id: course.id,
       name:`Khao hoc: ${course.name}`,
       coin : course.coin,
       coinText: `Gia : ${course.coin}`
   }
}
var newCourses = courses.map(courseHandler);

console.log(newCourses);

//reduce
//1.De hieu
var total =0;
for (var course of courses){
    total += course.coin;
}
console.log(total);
//2.ngan gon
    
function coinHandler (accumulator, currentValues ){// 0 la gtri khoi tao
                                                // accumulator: bien luu tru
                                                // currentValues: gia khoa hoc
         return accumulator + currentValues.coin;               
}

var totalCoin = courses.reduce(coinHandler,0);
console.log(totalCoin);

//Baitap
// Flat: lam phang manf tu depth
var depthArray = [1,2,[3,4],5,6[7,8,9]];
var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);
console.log(flatArray);

// include method
