const menuButton = $(".menu-button");
const darkOverlay = $(".dark-overlay");
const mobileMenu = $(".mobile-menu");

$(document).on("click", ".menu-button", handleMenu);
$(document).on("click", ".is-submenu", handleToggleMenu);

function handleToggleMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this.parent(".has-submenu").toggleClass("opened");

  $this.next("ul").slideToggle(500, function () {
    $(this).find(".has-submenu").removeClass("opened").children("ul").hide();
  });

  $this
    .parent(".has-submenu")
    .toggleClass("opened")
    .siblings("li")
    .removeClass("opened")
    .find("ul")
    .hide();
}

function resetMobileMenu() {
  darkOverlay.removeClass("visible");
  mobileMenu.removeClass("visible");
  $(".mobile-navigation .has-submenu").removeClass("opened").find("ul").hide();
}

function handleMenu(e) {
  e.preventDefault();
  darkOverlay.toggleClass("visible");
  mobileMenu.toggleClass("visible");
}

function initMobile() {
  console.log("is-mobile");
}

function initDesktop() {
  resetMobileMenu();
  console.log("is-desktop");
}

ssm.addState({
  id: "tablet",
  query: "(max-width: 900px)",
  onEnter: function () {
    initMobile();
  },
});

ssm.addState({
  id: "desktop",
  query: "(min-width: 900px)",
  onEnter: function () {
    initDesktop();
  },
});

// //------------------------slider
  $("#slider").slick( {
     arrows: false,   
     slidesToShow: 1
 
   }
     );
  $(".slider1").slick({
    arrows: false,   
      slidesToShow: 1,
    mobileFirst: true,

    responsive:[
      {
        breakpoint: 768,
        settings: {
          arrows: false,   
      slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
       settings: {
          arrows: false,   
          slidesToShow: 3,
         
        }
      }
    ]
      
     });
//-------------showbox
     
 
const box600 = $("#box600");  
const box550 = $("#box550");  
const price600 = $("#pr600");  
const price550 = $("#pr550");  
$(document).on("click","#pr600", showCatalog600);
$(document).on("click","#pr550", showCatalog550);
price600.addClass("orange");
box550.hide();
function showCatalog600(e){
  const $this = $(this);
box600.show();
box550.hide();
$this.addClass("orange");
price550.removeClass("orange")
}
function showCatalog550(e){
  const $this = $(this);
box550.show();
box600.hide();
$this.addClass("orange");
price600.removeClass("orange")
}
//-----------------------------validate
const btn=document.querySelector('.btn');
const form=document.querySelectorAll('.valid');

btn.addEventListener('click', Validate);


function createError(text) {
  const error = document.createElement('div')
  error.className = 'error'
  error.style.color = 'red'
  error.innerHTML = text
  return error
}

function Validate(e){
  e.preventDefault();
  const errors =document.querySelectorAll('.error')

  for (let i = 0; i < errors.length; i++) {
    errors[i].remove()
  }

  for (let i = 0; i < form.length; i++) {  

    if (!form[i].value) {
      
      let error = createError('Поле не заполненое')
      form[i].after(error);
    
    }
  }
 const len=form[0].value.length
 const checkLeter=form[0].value.indexOf('@')

  if (len>0){
  
    if(checkLeter==-1){
      let error = createError('Нету @ в адресе') 
      form[0].after(error);
      return;
    }
    if(checkLeter==0){
      let error = createError('Нету символа перед @') 
      form[0].after(error);
      return;
    }
    if((checkLeter+1)==len ){
      let error = createError('Нету символа после @') 
      form[0].after(error);
 
    }
  }
}
