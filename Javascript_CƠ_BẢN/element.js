//element : ID,class, Tag,css selector,html collection: img,a,form
var headingnode = document.getElementById('heading');
console.log(headingnode);

var head = document.getElementsByClassName('head');
console.log(head);


var listItem = document.querySelectorAll('.box-1 li');
console.log(listItem);

var boxnode = document.querySelector('.box-1');
console.log(boxnode);
console.log(boxnode.getElementsByTagName('li'));