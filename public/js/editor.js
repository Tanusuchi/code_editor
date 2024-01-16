const mobile_nav = document.querySelector(".mobile-nav");
const nav_header = document.querySelector(".header");

const togglenavbar = () =>{
    // alert("hello world")

    nav_header.classList.toggle("active")
};


mobile_nav.addEventListener("click",()=> togglenavbar())


// main

var textarea = document.getElementById("mytextaria");
textarea.value="";
const html_code = document.querySelector('.html-code textarea');
const css_code = document.querySelector('.css-code textarea');
const js_code = document.querySelector('.js-code textarea');
const result = document.querySelector('.result');

function run(){

    // store data in local storage
    localStorage.setItem('html_code', html_code.value);
    localStorage.setItem('css_code', css_code.value);
    localStorage.setItem('js_code', js_code.value);

    //executed the code
    result.contentDocument.body.innerHTML = `<style>${localStorage.css_code} </style>` + localStorage.html_code;

    result.contentWindow.eval(localStorage.js_code) ;   
}

html_code.onkeyup = () => run();
css_code.onkeyup = () => run();
js_code.onkeyup = () => run();

html_code.value = localStorage.html_code;
css_code.value = localStorage.css_code;
js_code.value = localStorage.js_code;


let isMediaQueryMet = false;

function checkMediaQuery() {
  if (window.matchMedia("(max-width: 990px)").matches) {
    if (!isMediaQueryMet) {
      // Media query is met (screen width is less than 600px)
      // Perform actions you want when the media query is first met
      // For example, you can reload the page using:
      

      // Set a flag to indicate that the media query has been met
      isMediaQueryMet = true;
    }
  } else {
    // Reset the flag when the media query is no longer met
    isMediaQueryMet = false;
    location.reload();
  }
}

// Add a listener to check when the media query changes
window.matchMedia("(max-width: 990px)").addListener(checkMediaQuery);

