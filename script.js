var x = document.querySelector(".down");
var y = document.querySelector(".backbtn")
x.addEventListener("click", ()=>{
    window.scrollBy(0, 32500);
})
window.addEventListener("scroll", ()=>{
    if(pageYOffset > 50){
        y.classList.add("active");
    } else{
        y.classList.remove("active");
    }
});

y.addEventListener("click", ()=>{
    window.scroll({
        top: 0,
    })
});
window.addEventListener("load", ()=>{
	document.getElementById("loader").classList.add('hidden');
	document.querySelector('body').classList.add('active');
});