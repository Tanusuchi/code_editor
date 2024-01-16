
const mobile_nav = document.querySelector(".mobile-nav");
const nav_header = document.querySelector(".header");

const togglenavbar = () =>{
    // alert("hello world")

    nav_header.classList.toggle("active")
};


mobile_nav.addEventListener("click",()=> togglenavbar())










const htmlEditor = CodeMirror(document.querySelector(".editor .code .html-code"),{
    lineNumbers:true,
    tabSize:4,
    mode:"xml",
    theme:"dracula",
    autoCloseTags: true,
    autoCloseBrackets: true
});


const cssEditor = CodeMirror(document.querySelector(".editor .code .css-code"),{
    lineNumbers:true,
    tabSize:4,
    theme:"dracula",
    mode:"css",
    // autoCloseTags: true,
    autoCloseBrackets: true
});


const jsEditor = CodeMirror(document.querySelector(".editor .code .js-code"),{
    lineNumbers:true,
    tabSize:4,
    mode:"javascript",
    theme:"dracula",
    autoCloseBrackets: true
});


document.querySelector("#run-btn").addEventListener("click",function(){
    
    let htmlcode = htmlEditor.getValue();
    localStorage.setItem('htmlnk', htmlcode);
    console.log(localStorage.htmlnk);


    let csscode ="<style>" +  cssEditor.getValue() + "</style>";
    let csscope = cssEditor.getValue();
    localStorage.setItem('cssnk', csscope);


    console.log(localStorage.cssnk);
    let jscode ="<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
    let jscope = jsEditor.getValue();
    localStorage.setItem('jsnk', jscope);

    
    console.log(localStorage.jsnk);
    let previewwindow = document.querySelector("#preview-window").contentWindow.document;
    previewwindow.open();
    previewwindow.write(htmlcode+csscode+jscode);
    previewwindow.close()


});







htmlEditor.setValue(localStorage.htmlnk);
cssEditor.setValue(localStorage.cssnk);
jsEditor.setValue(localStorage.jsnk);




let isMediaQueryMet = false;

function checkMediaQuery() {
  if (window.matchMedia("(max-width: 990px)").matches) {
    if (!isMediaQueryMet) {
      // Media query is met (screen width is less than 600px)
      // Perform actions you want when the media query is first met
      // For example, you can reload the page using:
      

      // Set a flag to indicate that the media query has been met
      isMediaQueryMet = true;
      location.reload();
    }
  } else {
    // Reset the flag when the media query is no longer met
    isMediaQueryMet = false;
    location.reload();
  }
}

// Add a listener to check when the media query changes
window.matchMedia("(max-width: 990px)").addListener(checkMediaQuery);

