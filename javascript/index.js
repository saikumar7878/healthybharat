
//login modal and signup modal closes if clicks somewhere outside the modals
var signup_form = document.getElementById('id02');
var login_form = document.getElementById('id01');
var forgot_password_container = document.getElementById('id03');
var reset_password = document.getElementById('id04');
window.onclick = function(event) {
    if (event.target == signup_form) {
        signup_form.style.display = "none";
    } else if (event.target == login_form) {
        login_form.style.display = "none";
    } else if (event.target == forgot_password_container) {
      forgot_password_container.style.display = "none";
    } else if (event.target == reset_password) {
      reset_password.style.display = "none";
    }
    // Close the dropdown if the user clicks outside of it
        //else if (!event.target.matches('.profile_icon_box')) {
        //var dropdowns = document.getElementsByClassName("profile_icon");
        //var i;
        //for (i = 0; i < dropdowns.length; i++) {
          //var openDropdown = dropdowns[i];
          //if (openDropdown.classList.contains('show')) {
            //openDropdown.classList.remove('show');
          //}
        //}
      //}
}

    function pageRedirect() {
      window.location.href = "./subfiles/signup.html";
    }
//above code ends here


//navbar js starts
  $(function () {
      'use strict'

      $("[data-trigger]").on("click", function(){
         var trigger_id =  $(this).attr('data-trigger');
         $(trigger_id).toggleClass("show");
         $('body').toggleClass("offcanvas-active");
});
//navbar js ends

//navbar hightlight clicked element js starts
/*$('#hightlight_nav a').click(function(e) {
  $('#hightlight_nav a').removeClass('active');
  $(this).addClass('active');
});*/
/*function navHighlight("".menu a", "index.html", "active") {
    var url = location.href.split('/'),
        loc = url[url.length -1],
        link = document.querySelectorAll(menu);
    for (var i = 0; i < link.length; i++) {
        var path = link[i].href.split('/'),
            page = path[path.length -1];
        if (page == loc || page == index.html && loc == '') {
            link[i].parentNode.className += ' ' + active;
            document.body.className += ' ' + page.substr(0, page.lastIndexOf('.'));
            }
        }
    }*/
//navbar hightlight clicked element js ends

// close if press ESC button
      $(document).on('keydown', function(event) {
        if(event.keyCode === 27) {
          $(".navbar-collapse").removeClass("show");
          $("body").removeClass("overlay-active");
        }
});

// close button
$(".btn-close").click(function(e){
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
});


})
//navbar ends
//slideshow js starts
var imageSlides = document.getElementsByClassName('imageSlides');
var circles = document.getElementsByClassName('circle');
var leftArrow = document.getElementById('leftArrow');
var rightArrow = document.getElementById('rightArrow');
var counter = 0;

// HIDE ALL IMAGES FUNCTION
function hideImages() {
  for (var i = 0; i < imageSlides.length; i++) {
    imageSlides[i].classList.remove('visible');
  }
}

// REMOVE ALL DOTS FUNCTION
function removeDots() {
  for (var i = 0; i < imageSlides.length; i++) {
    circles[i].classList.remove('dot');
  }
}

// SINGLE IMAGE LOOP/CIRCLES FUNCTION
function imageLoop() {
  var currentImage = imageSlides[counter];
  var currentDot = circles[counter];
  currentImage.classList.add('visible');
  removeDots();
  currentDot.classList.add('dot');
  counter++;
}

// LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
function arrowClick(e) {
  var target = e.target;
  if (target == leftArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    removeDots();
    if (counter == 1) {
      counter = (imageSlides.length - 1);
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 5000);
    } else {
      counter--;
      counter--;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 5000);
    }
  }
  else if (target == rightArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    removeDots();
    if (counter == imageSlides.length) {
      counter = 0;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 5000);
    } else {
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 5000);
    }
  }
}

leftArrow.addEventListener('click', arrowClick);
rightArrow.addEventListener('click', arrowClick);


// IMAGE SLIDE FUNCTION
function slideshow() {
  if (counter < imageSlides.length) {
    imageLoop();
  } else {
    counter = 0;
    hideImages();
    imageLoop();
  }
}

// SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
setTimeout(slideshow, 1000);
var imageSlideshowInterval = setInterval(slideshow, 5000);

//gallery page full_screen js
//slideshow js ends
