const menuBtn = document.querySelector(".menu")
const navlist = document.querySelector(".nav__list")

console.log(navlist)

menuBtn.addEventListener("click", () =>{
    navlist.classList.toggle("active")
})