var boxElement = document.querySelector('.box');
// console.log(boxElement.classList.length);
// console.log(boxElement.classList.value);
// console.log(boxElement.classList[0]);

boxElement.classList.add('red');

// console.log(boxElement.classList.contains('red'));
// console.log(boxElement.classList.remove('red'));

//
setInterval(() => {
    boxElement.classList.toggle('red');
}, 1000);