const btn=document.querySelector('button');
const div=document.querySelector("div");
const $div=$(div);
const $btn=$(btn);

$btn.on('click',function(){

    $('div').toggleClass('start');
})

// btn.addEventListener('click',function(){
//  $('div').toggleClass('start');
// })