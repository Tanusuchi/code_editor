const mobile_nav = document.querySelector(".mobile-nav");
const nav_header = document.querySelector(".header");

const togglenavbar = () =>{
    // alert("hello world")

    nav_header.classList.toggle("active")
};

mobile_nav.addEventListener("click",()=> togglenavbar())

const accordians = document.querySelectorAll(".addres");

accordians.forEach(addres =>{
    const icon = addres.querySelector(".icon");
    const answ = addres.querySelector(".ans");

    addres.addEventListener('click', () => {
        icon.classList.toggle('active');
        answ.classList.toggle('active');
    })

})