let elenvelope = document.querySelector('.envelope');

 elenvelopetop = document.querySelector('.envelope-top');

 elpaper = document.querySelector('.paper')

elenvelope.addEventListener('click',function(e){
elenvelopetop.classList.toggle('envelope-top-close');
elpaper.classList.toggle('paper-close');

});


// let container = document.querySelector(".menu-btn");

//   Nav = document.querySelector(".menu-nav");

// // navlink = document.querySelector('.menunav-link');

// container.addEventListener("click", function(e){
// container.classList.toggle("menu-btn-active");
//  Nav.classList.toggle('menu-nav-active');

// // document.querySelectorAll('.menunav-link').forEach(function(ball){

// //   ball.classList.toggle('menunav-link-active');

// // });

// });