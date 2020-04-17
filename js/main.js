// Change homepage navbar color to opaque on scroll
var myNav = document.getElementById('mynav');
console.log(myNav);

window.addEventListener('scroll', function () {
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 ) {
                myNav.classList.add('nav-colored');
                myNav.classList.remove('nav-transparent');
            } else {
                myNav.classList.add('nav-transparent');
                myNav.classList.remove('nav-colored');
            }
    });

//Home page carousel
jQuery(document).ready(function(){
  jQuery('.main-social-carousel').slippry();
});
