let btn= document.querySelector(".btn");
let seccao= document.querySelector(".dia");
let dilay=document.querySelector(".dilay");

let x= function(){
    seccao.classList.toggle("hidden");
    dilay.classList.toggle("hidden");
}

btn.addEventListener('click',x);
dilay.addEventListener('click',x);
document.addEventListener('keydown',function(e){

    if(e.key=="Escape"){
        seccao.classList.toggle("hidden");
        dilay.classList.toggle("hidden");
    }
});
