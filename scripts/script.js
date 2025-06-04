// Smooth Scroll
      
       const links = document.querySelectorAll(".header-nav a, .footer-nav a, .btn-request a");

       for (const link of links) {
       link.addEventListener("click", clickHandler);
       }

       function clickHandler(e) {
       e.preventDefault();
       const href = this.getAttribute("href");

       document.querySelector(href).scrollIntoView({
           behavior: "smooth"
       });
       }

// Button Up

       window.onscroll = function(){scrollFunction()};

       const downbuttons = document.querySelectorAll(".arrow");

       for (const downbutton of downbuttons) {
           downbutton.addEventListener("click", clickHandler);
       }

       function clickHandler(e) {
       e.preventDefault();
       const href = this.getAttribute("href");

       document.querySelector(href).scrollIntoView({
           behavior: "smooth"
       });
       }


// Menu

       function openModal() {
           document.getElementById("modal").style.top = "0px";
       }

       function closeModal() {
           document.getElementById("modal").style.top = "-400px";
       }

       /* function scrollFunction(){
           if ( document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
               document.getElementById('btndown').className = 'arrow visible';
           } else {
               document.getElementById('btndown').className = 'arrow hidden';
           }
       } */

