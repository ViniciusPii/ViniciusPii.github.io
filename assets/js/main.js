function menuClick(id) {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.scrollY - 50;
    window.scroll({
        top: y,
        behavior: 'smooth'
    });
}

function menuMobile() {
  if (document.getElementById("ulmobile").style.display == 'flex') {
            document.getElementById("ulmobile").style.display = 'none';
        } else {
            document.getElementById("ulmobile").style.display = 'flex';
        }
}

function mobileMenuClick(){
    if (document.querySelector("#ulmobile").style.display == 'flex') {
      document.querySelector("#ulmobile").style.display = 'none';
    } else {
      document.querySelector("#ulmobile").style.display = 'flex';
    }
}


$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      
      
      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2-120
      }, 800, 'swing', function () {
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#menu-center a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top-120 <= scrollPos && refElement.position().top-70 + refElement.height() > scrollPos) {
          $('#menu-center ul li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}

$(document).ready(function() {
    $('.port_img').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{enabled:true}
        // other options
      });
  });








