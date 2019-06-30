let navBtn = document.querySelector(".nav__button");
let nav = document.querySelector(".nav__list");

navBtn.addEventListener("click", showNav);
function showNav() {
    if(navBtn.classList.contains("fa-bars"))
    {
        navBtn.classList.remove("fa-bars");
        navBtn.classList.toggle("fa-close");
        nav.style.transform = "translateX(0)";
    }
    else{
        navBtn.classList.toggle("fa-close");
        navBtn.classList.add("fa-bars");
        nav.style.transform = "translateX(100vw)";
    }
}
hdr = document.querySelector(".nav");
let x = document.body.offsetHeight/10;
// document.addEventListener("scroll", function(){
    
//     if(Math.round(x) == window.pageYOffset)
//     {
//         hdr.style.backgroundColor="#dbdbe0"; 
//     }
//     // hdr.style.backgroundColor="white";
//     else if(window.pageYOffset == 0)
//     {
//         hdr.style.backgroundColor="rgba(24,38,109,1)"; 
//     }
// })
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
let carsWidth = cars.offsetWidth;
let move = carsWidth/howManySlides;
let jitter = 30;
 
async function changeSlide(e)
{
    id = e.srcElement.id - 1;
    translate = id*move;
    // actual = cars.style.transform;
    // console.log(actual);
    last = window.getComputedStyle(cars).getPropertyValue("transform").match(/(-?[0-9\.]+)/g);
    if(last)
    {
        last = last[4];
    }
    else{
        last = 0;
    }
    // console.log(e.srcElement);
    sliders.forEach(v => {
        v.classList.remove("slider__item--active");
    });
    e.srcElement.classList.toggle("slider__item--active")
    cars.style.transform= "translateX(-"+(last+jitter)+"px)";
        await sleep(200);
        cars.style.transform= "translateX(-"+translate+"px)";
    // if(id==1){
    //     cars.style.transform = "translateX("+jitter+"vw)";
    //     await sleep(200);
    // }
    // else{

    // }
    
}