(function ($) {
"use strict";

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

//Navber//
(() =>{
 
	const openNavMenu = document.querySelector(".open-nav-menu"),
	closeNavMenu = document.querySelector(".close-nav-menu"),
	navMenu = document.querySelector(".main-menu"),
	menuOverlay = document.querySelector(".menu-overlay"),
	mediaSize = 991;
  
	openNavMenu.addEventListener("click", toggleNav);
	closeNavMenu.addEventListener("click", toggleNav);
	// close the navMenu by clicking outside
	menuOverlay.addEventListener("click", toggleNav);
  
	function toggleNav() {
	  navMenu.classList.toggle("open");
	  menuOverlay.classList.toggle("active");
	  document.body.classList.toggle("hidden-scrolling");
	}
  
	navMenu.addEventListener("click", (event) =>{
		if(event.target.hasAttribute("data-toggle") && 
		  window.innerWidth <= mediaSize){
		  // prevent default anchor click behavior
		  event.preventDefault();
		  const menuItemHasChildren = event.target.parentElement;
		  // if menuItemHasChildren is already expanded, collapse it
		  if(menuItemHasChildren.classList.contains("active")){
			collapseSubMenu();
		  }
		  else{
			// collapse existing expanded menuItemHasChildren
			if(navMenu.querySelector(".menu-item-has-children.active")){
			collapseSubMenu();
			}
			// expand new menuItemHasChildren
			menuItemHasChildren.classList.add("active");
			const subMenu = menuItemHasChildren.querySelector(".sub-menu");
			subMenu.style.maxHeight = subMenu.scrollHeight + "px";
		  }
		}
	});
	function collapseSubMenu(){
	  navMenu.querySelector(".menu-item-has-children.active .sub-menu")
	  .removeAttribute("style");
	  navMenu.querySelector(".menu-item-has-children.active")
	  .classList.remove("active");
	}
	function resizeFix(){
	   // if navMenu is open ,close it
	   if(navMenu.classList.contains("open")){
		 toggleNav();
	   }
	   // if menuItemHasChildren is expanded , collapse it
	   if(navMenu.querySelector(".menu-item-has-children.active")){
			collapseSubMenu();
	   }
	}
  
	window.addEventListener("resize", function(){
	   if(this.innerWidth > mediaSize){
		 resizeFix();
	   }
	});

  })();
// Navbar End //
        $(document).ready(function(){
          $('.slider-active').slick({
            prevArrow: '<button type="button" class="slick-prev"><svg width="30px" class="icon flat-color" data-name="Flat Color" viewBox="0 0 24 24"><path d="M21 11H5.41l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.41 13H21a1 1 0 0 0 0-2Z" style="fill:currentColor"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg  width="30px" class="icon flat-color" data-name="Flat Color" viewBox="0 0 24 24"><path d="m21.71 11.29-3-3a1 1 0 0 0-1.42 1.42l1.3 1.29H3a1 1 0 0 0 0 2h15.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42Z" style="fill:currentColor"/></svg></button>',
            autoplay:false,
            loop:true,
            dots:true,
          });
         
      });


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// WOW active
new WOW().init();


})(jQuery);