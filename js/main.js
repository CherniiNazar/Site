// header scroll
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.oscroll = () => {
   menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// const myCarouselElement = document.querySelector('#myCarousel') 

// const carousel = new bootstrap.Carousel(myCarouselElement, { 
//   interval: 2000,
//   touch: false
// })












console.log(jQuery().jquery);
// Submit subscription form using Ajax
$('#subscription_form').on('submit', function (e) {
 e.preventDefault();
 var $form = $(this);
 $.ajax({
 type: 'POST',
 url: 'subscription_ajax.php', 
 data: $form.serialize()
 }).done(function () {
 $form[0].reset()
 alert('Thank you for the subscription!')
 }).fail(function () {
 alert('Something went wrong')
 });
});
