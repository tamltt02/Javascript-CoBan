var btn = document.getElementById('btn');

function viec1(){
    console.log('Viec 1');
}

 btn.addEventListener('click', function(e){
       console.log(Math.random());
 });
btn.addEventListener('click', function(e){
     console.log("Event");
 });
btn.addEventListener('click',viec1);

setTimeout(function(e){
    btn.removeEventListener('click',viec1);
}, 3000);