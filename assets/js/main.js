let pDayName, pDay, pMonthName, pYear, pTime;

pDayName = document.getElementById("p-day-name");
pDay = document.getElementById("p-day");
pMonthName = document.getElementById("p-month-name");
pYear = document.getElementById("p-year");
pTime = document.getElementById("p-time");

pDayName.append(new persianDate().format("dddd"));
pDay.append(new persianDate().format("DD"));
pMonthName.append(new persianDate().format("MMMM"));
pYear.append(new persianDate().format("YYYY"));
setInterval(() => {
  pTime.textContent = new persianDate().format("hh:mm:ss");
}, 1000);

let menu = document.getElementById("side-bar-col");
let mobileMenu = document.getElementById("mobile-menu-frame");
let cl = document.getElementById("cl");
cl.addEventListener("click", (e) => {
  menu.classList.toggle("expanded");
  mobileMenu.classList.toggle("active");
});

var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let preloader = document.getElementById("preloader");

setTimeout(() => {
  preloader.style.top = "-140%";
}, 3000);

const callsBtn  = document.getElementById('calls')
const callsDialog  = document.getElementById('calls-dialog')
callsBtn.addEventListener("click", (e) => {
  callsDialog.classList.toggle("call-dialog-actvie");

});