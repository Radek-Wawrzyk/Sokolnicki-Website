"use strict";window.addEventListener("load",function(){var e=document.querySelector("#preloader"),t=document.querySelector("body");e.classList.add("loaded"),t.classList.add("loaded"),e.addEventListener("transitionend",function(){t.removeChild(e)})});var navigation=function(){var t=document.querySelector(".navigation-right"),n=document.querySelector(".navigation-button"),e=document.querySelectorAll(".navigation-menu li a"),a=document.querySelector(".navigation-logo a");n.addEventListener("click",function(){n.classList.toggle("active"),t.classList.toggle("active");var e=n.getAttribute("aria-expanded");e="false"==e?"true":"false",n.setAttribute("aria-expanded",e)}),a.addEventListener("click",function(){n.classList.contains("active")&&i()});for(var i=function(){n.classList.remove("active"),n.setAttribute("aria-expanded",!1),t.classList.remove("active")},o=0;e.length>o;o++)e[o].addEventListener("click",function(){i()});document.onkeydown=function(e){27==(e=e||window.event).keyCode&&i()}};navigation();