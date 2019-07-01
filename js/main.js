let navBtn = document.querySelector(".nav__button");
let nav = document.querySelector(".nav__list");
let navItem = document.querySelectorAll(".nav__item");
navItem.forEach(e => {e.addEventListener("click", collapseNav)});
function collapseNav(){
    navBtn.classList.toggle("fa-close");
        navBtn.classList.add("fa-bars");
    nav.style.transform = "translateX(100vw)";
}
navBtn.addEventListener("click", showNav);
function showNav() {
    if(navBtn.classList.contains("fa-bars"))
    {
        navBtn.classList.remove("fa-bars");
        navBtn.classList.toggle("fa-close");
        nav.style.transform = "translateX(0)";
        
    }
    else{
        collapseNav();
    }
}
// window.onresize = function(){ location.reload(); }
hdr = document.querySelector(".nav");
let x = window.getComputedStyle(hdr).height;
document.addEventListener("scroll", function(){
    
    if(window.pageYOffset >= parseInt(x))
    {
        
        hdr.style.backgroundColor="white"; 
        navBtn.style.color="rgba(24,38,109,1)"
    }
    // hdr.style.backgroundColor="white";
    else if(window.pageYOffset == 0)
    {
        navBtn.style.color="white"
        hdr.style.backgroundColor="rgba(24,38,109,1)"; 
    }
})
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// chgBtn = document.querySelector(".xd");
// cars = document.querySelector(".cars");
// chgBtn.addEventListener("click", changeCar);
// async function changeCar(){
//     cars.style.transform= "translateX(10vw)";
//     await sleep(200);
//     cars.style.transform= "translateX(-100vw)";
// }
let howManySlides = 0;
sliders = document.querySelectorAll(".slider__item");
sliders.forEach(e => {
    e.addEventListener("click", changeSlide);
    howManySlides++;
});

let cars = document.querySelector(".cars");

let jitter =20;
let last = 0;
async function changeSlide(e)
{
    let carsWidth = cars.offsetWidth;
let move = carsWidth/howManySlides;
    id = e.srcElement.id - 1;
    translate = id*move;
    // actual = cars.style.transform;
    // console.log(actual);
    // last = window.getComputedStyle(cars).getPropertyValue("transform").match(/(-?[0-9\.]+)/g);
    // if(last)
    // {
    //     last = last[4];
    // }
    // else{
    //     last = 0;
    // }
    
    // console.log(e.srcElement);
    sliders.forEach(v => {
        v.classList.remove("slider__item--active");
    });
    e.srcElement.classList.toggle("slider__item--active")
    
    
    cars.style.transform= "translateX("+(jitter+last)+"px)";
    await sleep(250);
    cars.style.transform= "translateX("+(last)+"px)";
    await sleep(250);
    cars.style.transform= "translateX(-"+translate+"px)";
    last = -translate;
    
}