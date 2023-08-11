 var inputElement = document.querySelector('input[type ="text"]');
// inputElement.onchange = function(e){
//     console.log(e.target.value);
// }
// inputElement.oninput = function(e){
//     console.log(e.target.value);
// }
// var inputElement = document.querySelector('input[type ="checkbox"]');
// inputElement.onchange = function(e){
//     console.log(e.target);
// }
// var inputElement = document.querySelector('select');
// inputElement.onchange = function(e){
//     console.log(e.target.value);
// }
inputElement.onkeydown = function(e){
    console.log(e.which);
    switch(e.which){
        case 27:
            console.log('Exit');
            break;
    }
}

var  aElement = document.links;
for(var i=0; i < aElement.length ; i++){
    aElement[i].onclick = function(e){
        console.log(e.target.href);
        if(!e.target.href.startsWith('https://fullstack.edu.vn/')){
            e.preventDefault();
        }
    }
}
// stopPropagation ();  : trasnh enent noi bot
