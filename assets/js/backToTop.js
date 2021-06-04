mybutton = document.getElementById("myBtn");

// Caundo la persona scrollea 20px se activa el boton de volver arriba
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Cuando se hace click en el, se va a la parte mas arriba que se pueda de la pagina
function topFunction() {
  document.body.scrollTop = 0; // Para safari (gracias apple)
  document.documentElement.scrollTop = 0; // Para los navegadores normales
}