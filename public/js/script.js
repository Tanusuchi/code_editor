const mobile_nav = document.querySelector(".mobile-nav");
const nav_header = document.querySelector(".header");

const togglenavbar = () =>{
    // alert("hello world")

    nav_header.classList.toggle("active")
};


mobile_nav.addEventListener("click",()=> togglenavbar())


// main button 
document.addEventListener("DOMContentLoaded", function () {
    var mdiv = document.getElementById("myDiv");
    var mlink = document.getElementById("myLink");

    mdiv.addEventListener("click", function () {
        window.location.href = mlink.href;
    });
});

// html button 
// leran 
document.addEventListener("DOMContentLoaded", function () {
    var hldiv = document.getElementById("hle");
    var hllink = document.getElementById("hlel");

    hldiv.addEventListener("click", function () {
        window.location.href = hllink.href;
    });
});

// video 
document.addEventListener("DOMContentLoaded", function () {
    var hvdiv = document.getElementById("hve");
    var hvlink = document.getElementById("hvel");

    hvdiv.addEventListener("click", function () {
        window.location.href = hvlink.href;
    });
});





// editors
document.addEventListener("DOMContentLoaded", function () {
    var hediv = document.getElementById("hed");
    var helink = document.getElementById("hedl");

    hediv.addEventListener("click", function () {
        window.location.href = helink.href;
    });
});




// css button 
// leran 
document.addEventListener("DOMContentLoaded", function () {
    var cldiv = document.getElementById("cle");
    var cllink = document.getElementById("clel");

    cldiv.addEventListener("click", function () {
        window.location.href = cllink.href;
    });
});


// video 
document.addEventListener("DOMContentLoaded", function () {
    var cvdiv = document.getElementById("cve");
    var cvlink = document.getElementById("cvel");

    cvdiv.addEventListener("click", function () {
        window.location.href = cvlink.href;
    });
});



// editor 
document.addEventListener("DOMContentLoaded", function () {
    var cediv = document.getElementById("ced");
    var celink = document.getElementById("cedl");

    cediv.addEventListener("click", function () {
        window.location.href = celink.href;
    });
});


// js button 
// leran 
document.addEventListener("DOMContentLoaded", function () {
    var jldiv = document.getElementById("jle");
    var jllink = document.getElementById("jlel");

    jldiv.addEventListener("click", function () {
        window.location.href = jllink.href;
    });
});

// video 
document.addEventListener("DOMContentLoaded", function () {
    var jvdiv = document.getElementById("jve");
    var jvlink = document.getElementById("jvel");

    jvdiv.addEventListener("click", function () {
        window.location.href = jvlink.href;
    });
});



// editor 
document.addEventListener("DOMContentLoaded", function () {
    var jediv = document.getElementById("jed");
    var jelink = document.getElementById("jedl");

    jediv.addEventListener("click", function () {
        window.location.href = jelink.href;
    });
});


const accordians = document.querySelectorAll(".addres");

accordians.forEach(addres =>{
    const icon = addres.querySelector(".icon");
    const answ = addres.querySelector(".ans");

    addres.addEventListener('click', () => {
        icon.classList.toggle('active');
        answ.classList.toggle('active');
    })

})

