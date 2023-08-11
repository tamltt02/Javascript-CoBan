// Atribute event
var h1Element = document.querySelectorAll('h1');

for(let i =0; i< h1Element.length; i++){
  //  console.log(h1Element[i]);
    h1Element[i].onclick = function(e){
        console.log(e.target);
    }
}
