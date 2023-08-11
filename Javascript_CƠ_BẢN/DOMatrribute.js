//them attribute vao element
var headingElement =  document.querySelector('h1');
headingElement.title = "heading";

// them attribute tùy biến
headingElement.setAttribute('data','test data');

//innetText,textContent
//+ innerText: trả về giống những gì trên trình duyệt
//+ textContent:tra ve ca khoảng cách k bị ảnh hưởng bởi thuộc tính , cả css
console.log(headingElement.innerText);
console.log(headingElement.textContent);

//thay đổi
//headingElement.innerText= 'New heading';//setter

//them 1 element
var boxElement = document.querySelector('.box');
boxElement.innerHTML = '<h4> Heading </h4>';
console.log(document.querySelector('h4').innerText);
