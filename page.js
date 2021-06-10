{
    let floating=document.querySelector(".floating-menu");
    let other=document.querySelector(".other");
    floating.addEventListener("click",function(){
        other.classList.toggle("active");
        floating.classList.toggle("active");
        
    });
    let afloating=document.querySelector(".floating-menu.active");
    afloating.addEventListener("click",function(){
        floating.classList.remove("active");
        other.classList.remove("active");
    });
    

}
