$(window).on("load",function(){
    /*----------- Preloader ------------*/
    $(".preloader").fadeOut("slow")
});

$(document).ready(function() {
    /*----------- Navbar Shrink ------------*/
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink")
        }
        else{
            $(".navbar").removeClass("navbar-shrink")

        }
    });

    /*---------------- Close PopUp ----------------*/ 
    $('a.close').click(function(eve){
			
        eve.preventDefault();
        $(this).parents('div.popup').fadeOut('slow');
    });

    /*---------------- Open PopUp ----------------*/ 
    $('a.open').click(function(eve){
			
        eve.preventDefault();
        $(this).parents('div.popup').fadeIn('slow');
        
    });

    /*----------- Footer Instagram Button ------------*/
     $(".instagram-open-btn").on("click", function(){
        window.open('https://www.instagram.com/standfasya_/')
    });

    /*----------- Footer Whatsapp Button ------------*/
    $(".whatsapp-open-btn").on("click", function(){
        window.open('https://bit.ly/3CwlScE')
    });

    /*----------- Footer Facebook Button ------------*/
    $(".facebook-open-btn").on("click", function(){
        window.open('https://web.facebook.com/stand.fasya/')
    });

    /*----------- Product Carousel ------------*/
    $('.product-carousel').owlCarousel({
        dots:false,
        loop:true,
        margin:0,
        responsiveClass:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    })

    /*----------- Testimoni Carousel ------------*/
    $('.testimoni-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    })


    $('.owl-carousel').owlCarousel({
        dots:false,
        loop:false,
        margin:0,
        responsiveClass:true,
        autoplay:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })  

    /*----------- Page Scrolling - ScrollIt ---------*/
    $.scrollIt({
        topOffset: -50
    });

    /*----------- Navbar Collapse ---------*/
    $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide")
    });

    const openPopupButtons = document.querySelectorAll('[data-popup-target]')
    const closePopupButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')

    openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget)
        openPopup(popup)
    })
    })

    overlay.addEventListener('click', () => {
    const popups = document.querySelectorAll('.popup.active')
    popups.forEach(popup => {
        closePopup(popup)
    })
    })

    closePopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup')
        closePopup(popup)
    })
    })

    function openPopup(popup) {
    if (popup == null) return
    popup.classList.add('active')
    overlay.classList.add('active')
    }

    function closePopup(popup) {
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
    }
});