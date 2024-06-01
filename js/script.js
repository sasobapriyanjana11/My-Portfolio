// ===========================Togle icon nabar=========================
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};




//======================== sections======================================
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll= () =>{

    sections.forEach(sec =>{
        let top=window.scrollY;
        let offSet=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');


        if(top >= offSet && top< offSet+height){

            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[herf*='+id+']').classList.add('active');
            });

        };


    });

    // ===========steaky navbar=====================
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // ===========remove toggle icon and navbar when click navbar link(scroll)=====================


    //when click any section remove the scrollbar//
    menuIcon.classList.remove('bx-x'); 
    navbar.classList.remove('active');
};

// ===========scroll reveal=====================
  ScrollReveal({
    //  reset: true ,
     distance:'80px',
     duration:2000,
     delay:200
    });


    ScrollReveal().reveal('.home-content, .heading', {
         origin:'top'
     });

     ScrollReveal().reveal('.home-image, .services-container, .portfolio.box ,.contact form', {
        origin:'bottom'
    });

    ScrollReveal().reveal('.home-content h1, .about-image ', {
        origin:'left'
    });

    ScrollReveal().reveal('.home-content p, .about-content ', {
        origin:'right'
    });