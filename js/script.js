
// Nav bar start
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", function(){
 menu.classList.toggle("active");
});
// nav bar end

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i){
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

function nextSlide(){
    index++;
    if(index >= slides.length){
        index = 0;
    }
    showSlide(index);
}

function prevSlide(){
    index--;
    if(index < 0){
        index = slides.length - 1;
    }
    showSlide(index);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

setInterval(nextSlide, 4000);


// current time 
function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  document.getElementById('date-time').textContent = currentDateTime;
}
updateDateTime();
setInterval(updateDateTime, 1000);
