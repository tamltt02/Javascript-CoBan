var boxElement = document.querySelector(".box");
boxElement.style.width = '100px';
boxElement.style.height = '200px';

Object.assign(boxElement.style,{
    width : '200px',
    height : '100px',
    backgroundColor: 'green',
});