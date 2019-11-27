AOS.init({
    duration: 800,
    easing: 'slide'
});
(function($) {
    "use strict";
    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: 'scroll'
    });
    var fullHeight = function() {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function() {
            $('.js-fullheight').css('height', $(window).height());
        });
    };
    fullHeight();
    var loader = function() {
        setTimeout(function() {
            if ($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    $.Scrollax();
    var carousel = function() {
        $('.home-slider').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: false,
            autoplayHoverPause: false,
            items: 1,
            navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        $('.carousel-testimony').owlCarousel({
            autoplay: true,
            center: true,
            loop: true,
            items: 1,
            margin: 30,
            stagePadding: 0,
            nav: false,
            navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 3
                }
            }
        });
    };
    carousel();
    $('nav .dropdown').hover(function() {
        var $this = $(this);
        $this.addClass('show');
        $this.find('> a').attr('aria-expanded', true);
        $this.find('.dropdown-menu').addClass('show');
    }, function() {
        var $this = $(this);
        $this.removeClass('show');
        $this.find('> a').attr('aria-expanded', false);
        $this.find('.dropdown-menu').removeClass('show');
    });
    $('#dropdown04').on('show.bs.dropdown', function() {
        console.log('show');
    });
    var scrollWindow = function() {
        $(window).scroll(function() {
            var $w = $(this),
                st = $w.scrollTop(),
                navbar = $('.ftco_navbar'),
                sd = $('.js-scroll-wrap');
            if (st > 150) {
                if (!navbar.hasClass('scrolled')) {
                    navbar.addClass('scrolled');
                }
            }
            if (st < 150) {
                if (navbar.hasClass('scrolled')) {
                    navbar.removeClass('scrolled sleep');
                }
            }
            if (st > 350) {
                if (!navbar.hasClass('awake')) {
                    navbar.addClass('awake');
                }
                if (sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if (st < 350) {
                if (navbar.hasClass('awake')) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if (sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };
    scrollWindow();
    var counter = function() {
        $('#section-counter').waypoint(function(direction) {
            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                $('.number').each(function() {
                    var $this = $(this),
                        num = $this.data('number');
                    console.log(num);
                    $this.animateNumber({
                        number: num,
                        numberStep: comma_separator_number_step
                    }, 7000);
                });
            }
        }, {
            offset: '95%'
        });
    }
    counter();
    var contentWayPoint = function() {
        var i = 0;
        $('.ftco-animate').waypoint(function(direction) {
            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function() {
                    $('body .ftco-animate.item-animate').each(function(k) {
                        var el = $(this);
                        setTimeout(function() {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn ftco-animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft ftco-animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight ftco-animated');
                            } else {
                                el.addClass('fadeInUp ftco-animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '95%'
        });
    };
    contentWayPoint();
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
})(jQuery);




/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction1() {
  if(!document.getElementById("a").classList.contains("show"))
  {
    document.getElementById("a").classList.toggle("show");
    document.getElementById("b").classList.toggle("hidden");
    document.getElementById("c").classList.toggle("hidden");
    document.getElementById("d").classList.toggle("hidden");
    document.getElementById("e").classList.toggle("hidden");
    document.getElementById("f").classList.toggle("hidden");
    document.getElementById("g").classList.toggle("hidden");
    document.getElementById("h").classList.toggle("hidden");
    document.getElementById("b").classList.remove("show");
    document.getElementById("c").classList.remove("show");
    document.getElementById("d").classList.remove("show");
    document.getElementById("e").classList.remove("show");
    document.getElementById("f").classList.remove("show");
    document.getElementById("g").classList.remove("show");
    document.getElementById("h").classList.remove("show");
    document.getElementById("a").classList.remove("hidden");
  }
}

function myFunction2() {
    if(!document.getElementById("b").classList.contains("show"))
  {
    document.getElementById("b").classList.toggle("show");
    document.getElementById("a").classList.toggle("hidden");
    document.getElementById("c").classList.toggle("hidden");
    document.getElementById("d").classList.toggle("hidden");
    document.getElementById("e").classList.toggle("hidden");
    document.getElementById("f").classList.toggle("hidden");
    document.getElementById("g").classList.toggle("hidden");
    document.getElementById("h").classList.toggle("hidden");
    document.getElementById("a").classList.remove("show");
    document.getElementById("c").classList.remove("show");
    document.getElementById("d").classList.remove("show");
    document.getElementById("e").classList.remove("show");
    document.getElementById("f").classList.remove("show");
    document.getElementById("g").classList.remove("show");
    document.getElementById("h").classList.remove("show");
    document.getElementById("b").classList.remove("hidden");    
  }
}

function myFunction3() {
    if(!document.getElementById("c").classList.contains("show"))
  {
    document.getElementById("c").classList.toggle("show");
    document.getElementById("a").classList.toggle("hidden");
    document.getElementById("b").classList.toggle("hidden");
    document.getElementById("d").classList.toggle("hidden");
    document.getElementById("e").classList.toggle("hidden");
    document.getElementById("f").classList.toggle("hidden");
    document.getElementById("g").classList.toggle("hidden");
    document.getElementById("h").classList.toggle("hidden");
    document.getElementById("a").classList.remove("show");
    document.getElementById("b").classList.remove("show");
    document.getElementById("d").classList.remove("show");
    document.getElementById("e").classList.remove("show");
    document.getElementById("f").classList.remove("show");
    document.getElementById("g").classList.remove("show");
    document.getElementById("h").classList.remove("show");
    document.getElementById("c").classList.remove("hidden"); 
  }
}

function myFunction4() {
    if(!document.getElementById("d").classList.contains("show"))
  {
    document.getElementById("d").classList.toggle("show");
    document.getElementById("a").classList.toggle("hidden");
    document.getElementById("c").classList.toggle("hidden");
    document.getElementById("b").classList.toggle("hidden");
    document.getElementById("e").classList.toggle("hidden");
    document.getElementById("f").classList.toggle("hidden");
    document.getElementById("g").classList.toggle("hidden");
    document.getElementById("h").classList.toggle("hidden");
    document.getElementById("a").classList.remove("show");
    document.getElementById("c").classList.remove("show");
    document.getElementById("b").classList.remove("show");
    document.getElementById("e").classList.remove("show");
    document.getElementById("f").classList.remove("show");
    document.getElementById("g").classList.remove("show");
    document.getElementById("h").classList.remove("show");
    document.getElementById("d").classList.remove("hidden");    
  }
}

function myFunction5() {
    if(!document.getElementById("e").classList.contains("show"))
  {
    document.getElementById("e").classList.toggle("show");
    document.getElementById("a").classList.toggle("hidden");
    document.getElementById("c").classList.toggle("hidden");
    document.getElementById("d").classList.toggle("hidden");
    document.getElementById("b").classList.toggle("hidden");
    document.getElementById("f").classList.toggle("hidden");
    document.getElementById("g").classList.toggle("hidden");
    document.getElementById("h").classList.toggle("hidden");
    document.getElementById("a").classList.remove("show");
    document.getElementById("c").classList.remove("show");
    document.getElementById("d").classList.remove("show");
    document.getElementById("b").classList.remove("show");
    document.getElementById("f").classList.remove("show");
    document.getElementById("g").classList.remove("show");
    document.getElementById("h").classList.remove("show");
    document.getElementById("e").classList.remove("hidden");    
  }
}

function myFunction6() {
    if(!document.getElementById("f").classList.contains("show"))
  {
    document.getElementById("f").classList.toggle("show");
    document.getElementById("a").classList.toggle("hidden");
    document.getElementById("c").classList.toggle("hidden");
    document.getElementById("d").classList.toggle("hidden");
    document.getElementById("e").classList.toggle("hidden");
    document.getElementById("b").classList.toggle("hidden");
    document.getElementById("g").classList.toggle("hidden");
    document.getElementById("h").classList.toggle("hidden");
    document.getElementById("a").classList.remove("show");
    document.getElementById("c").classList.remove("show");
    document.getElementById("d").classList.remove("show");
    document.getElementById("e").classList.remove("show");
    document.getElementById("b").classList.remove("show");
    document.getElementById("g").classList.remove("show");
    document.getElementById("h").classList.remove("show");
    document.getElementById("f").classList.remove("hidden");    
  }
}

function myFunction7() {
    if(!document.getElementById("g").classList.contains("show"))
  {
    document.getElementById("g").classList.toggle("show");
    document.getElementById("a").classList.toggle("hidden");
    document.getElementById("c").classList.toggle("hidden");
    document.getElementById("d").classList.toggle("hidden");
    document.getElementById("e").classList.toggle("hidden");
    document.getElementById("f").classList.toggle("hidden");
    document.getElementById("b").classList.toggle("hidden");
    document.getElementById("h").classList.toggle("hidden");
    document.getElementById("a").classList.remove("show");
    document.getElementById("c").classList.remove("show");
    document.getElementById("d").classList.remove("show");
    document.getElementById("e").classList.remove("show");
    document.getElementById("f").classList.remove("show");
    document.getElementById("b").classList.remove("show");
    document.getElementById("h").classList.remove("show");
    document.getElementById("g").classList.remove("hidden");    
  }
}

function myFunction8() {
    if(!document.getElementById("h").classList.contains("show"))
  {
    document.getElementById("h").classList.toggle("show");
    document.getElementById("a").classList.toggle("hidden");
    document.getElementById("c").classList.toggle("hidden");
    document.getElementById("d").classList.toggle("hidden");
    document.getElementById("e").classList.toggle("hidden");
    document.getElementById("f").classList.toggle("hidden");
    document.getElementById("g").classList.toggle("hidden");
    document.getElementById("b").classList.toggle("hidden");
    document.getElementById("a").classList.remove("show");
    document.getElementById("c").classList.remove("show");
    document.getElementById("d").classList.remove("show");
    document.getElementById("e").classList.remove("show");
    document.getElementById("f").classList.remove("show");
    document.getElementById("g").classList.remove("show");
    document.getElementById("b").classList.remove("show");
    document.getElementById("h").classList.remove("hidden");    
  }
}


function myFunction9() {
  if(!document.getElementById("i").classList.contains("show"))
  {
    document.getElementById("i").classList.toggle("show");
    document.getElementById("j").classList.toggle("hidden");
    document.getElementById("k").classList.toggle("hidden");
    document.getElementById("l").classList.toggle("hidden");
    document.getElementById("m").classList.toggle("hidden");
    document.getElementById("n").classList.toggle("hidden");
    document.getElementById("j").classList.remove("show");
    document.getElementById("k").classList.remove("show");
    document.getElementById("l").classList.remove("show");
    document.getElementById("m").classList.remove("show");
    document.getElementById("n").classList.remove("show");
    document.getElementById("i").classList.remove("hidden");
  }
}

function myFunction10() {
  if(!document.getElementById("j").classList.contains("show"))
  {
    document.getElementById("j").classList.toggle("show");
    document.getElementById("i").classList.toggle("hidden");
    document.getElementById("k").classList.toggle("hidden");
    document.getElementById("l").classList.toggle("hidden");
    document.getElementById("m").classList.toggle("hidden");
    document.getElementById("n").classList.toggle("hidden");
    document.getElementById("i").classList.remove("show");
    document.getElementById("k").classList.remove("show");
    document.getElementById("l").classList.remove("show");
    document.getElementById("m").classList.remove("show");
    document.getElementById("n").classList.remove("show");
    document.getElementById("j").classList.remove("hidden");
  }
}

function myFunction11() {
  if(!document.getElementById("k").classList.contains("show"))
  {
    document.getElementById("k").classList.toggle("show");
    document.getElementById("j").classList.toggle("hidden");
    document.getElementById("i").classList.toggle("hidden");
    document.getElementById("l").classList.toggle("hidden");
    document.getElementById("m").classList.toggle("hidden");
    document.getElementById("n").classList.toggle("hidden");
    document.getElementById("j").classList.remove("show");
    document.getElementById("i").classList.remove("show");
    document.getElementById("l").classList.remove("show");
    document.getElementById("m").classList.remove("show");
    document.getElementById("n").classList.remove("show");
    document.getElementById("k").classList.remove("hidden");
  }
}

function myFunction12() {
  if(!document.getElementById("l").classList.contains("show"))
  {
    document.getElementById("l").classList.toggle("show");
    document.getElementById("j").classList.toggle("hidden");
    document.getElementById("k").classList.toggle("hidden");
    document.getElementById("i").classList.toggle("hidden");
    document.getElementById("m").classList.toggle("hidden");
    document.getElementById("n").classList.toggle("hidden");
    document.getElementById("j").classList.remove("show");
    document.getElementById("k").classList.remove("show");
    document.getElementById("i").classList.remove("show");
    document.getElementById("m").classList.remove("show");
    document.getElementById("n").classList.remove("show");
    document.getElementById("l").classList.remove("hidden");
  }
}

function myFunction13() {
  if(!document.getElementById("m").classList.contains("show"))
  {
    document.getElementById("m").classList.toggle("show");
    document.getElementById("j").classList.toggle("hidden");
    document.getElementById("k").classList.toggle("hidden");
    document.getElementById("l").classList.toggle("hidden");
    document.getElementById("i").classList.toggle("hidden");
    document.getElementById("n").classList.toggle("hidden");
    document.getElementById("j").classList.remove("show");
    document.getElementById("k").classList.remove("show");
    document.getElementById("l").classList.remove("show");
    document.getElementById("i").classList.remove("show");
    document.getElementById("n").classList.remove("show");
    document.getElementById("m").classList.remove("hidden");
  }
}

function myFunction14() {
  if(!document.getElementById("n").classList.contains("show"))
  {
    document.getElementById("n").classList.toggle("show");
    document.getElementById("j").classList.toggle("hidden");
    document.getElementById("k").classList.toggle("hidden");
    document.getElementById("l").classList.toggle("hidden");
    document.getElementById("m").classList.toggle("hidden");
    document.getElementById("i").classList.toggle("hidden");
    document.getElementById("j").classList.remove("show");
    document.getElementById("k").classList.remove("show");
    document.getElementById("l").classList.remove("show");
    document.getElementById("m").classList.remove("show");
    document.getElementById("i").classList.remove("show");
    document.getElementById("n").classList.remove("hidden");
  }
}



// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
      if (openDropdown.classList.contains('hidden')) {
        openDropdown.classList.remove('hidden');
      }
    }
  }
}




function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}