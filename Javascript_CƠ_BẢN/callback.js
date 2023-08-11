//Callback

function myfunction (param){
    if( typeof param === 'function'){
    param();
    }
}
function myCallBack(values){
    console.log("Values: ",values);
}
myfunction(myCallBack);

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
]
courses.map(function(course){
console.log(course);
})

var htmls = courses.map(function(course) {
    return `<h2> ${course} </h2>`;
})
console.log(htmls.join(' '));