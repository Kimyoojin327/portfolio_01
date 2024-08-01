$(document).ready( function () {
  //슬라이드

  //main_visual
  const progressLine = document.querySelector('.autoplay-progress svg')
  const mb=new Swiper(".mb" , {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed : 1500,
    loop : true,
    effect: "fade",
    
    pagination: {
      el: ".visual_control .swiper-pagination",
      type: "fraction",
      clickable: false,
    },

    on: {
      autoplayTimeLeft(s, time, progress) {
        progressLine.style.setProperty("--progress", 1 - progress)
      }
    }
  });
  $(".mb_play").hide();

  $(".mb_pause").click(function () {
    mb.autoplay.stop();
    $(".mb_play").show();
    $(".mb_pause").hide();
  });

  $(".mb_play").click(function () {
    mb.autoplay.start();
    $(".mb_pause").show();
    $(".mb_play").hide();
  });

  $(window).scroll(function() {
    let scrollT = $(this).scrollTop();
    if(scrollT > 200) {
      $("#header").addClass("fix");
    } else{
      $("#header").removeClass("fix");
    }
  });


  //prd
  const prd_list=new Swiper(".prd_list" , {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: { 
        slidesPerView: 1,
        spaceBetween: 16,
      },
      550: { 
        slidesPerView: 1.5,
        spaceBetween: 16,
	      slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
      },
      840: { 
        slidesPerView: 2,
        spaceBetween: 20,
	      slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
      },
      1051: { 
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
    },
    speed : 1500,
    loop : true,
    navigation: {
      nextEl: ".swiper-button-next", 
      prevEl: ".swiper-button-prev",
     },
     pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: false,
    },
    
    slidesPerView: 1.4,
    centeredSlides: true,
  });

  //gallery
  const gallery_list=new Swiper(".gallery_list" , {
    breakpoints: {
      320: { 
        slidesPerView: 1.2,
        spaceBetween: 30,
      },
      430: { 
        slidesPerView: 1.6,
        spaceBetween: 50,
      },
      900: { 
        slidesPerView: 2.2,
        spaceBetween: 50,
      },
      1024: { 
        slidesPerView: 3.4,
        spaceBetween: 50,
      },
    },
    speed : 5000,
    loop : true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },    
    centeredSlides: true,
  });

  //notice
  $(".notice_txt > div").not(":first").hide();
  $(".notice_name > div").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let idx = $(this).index();
    $(".notice_txt > div").eq(idx).fadeIn(500).siblings().fadeOut(0);  
  });

  //bottom_info
  const bottom_list=new Swiper(".bottom_list" , {
    speed : 1000,
    loop : true,
    breakpoints: {
      320: { 
        slidesPerView: 2,
        spaceBetween: 10,
      },
      500: { 
        slidesPerView: 3.2,
        spaceBetween: 15,
      },
      768: { 
        slidesPerView: 4.5,
        spaceBetween: 20,
      },
      1080: { 
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
    slidesPerView: 8,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next", 
      prevEl: ".swiper-button-prev",
     },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
  });
  $(".bottom_play").hide();

  $(".bottom_pause").click(function () {
    bottom_list.autoplay.stop();
    $(".bottom_play").show();
    $(".bottom_pause").hide();
  });

  $(".bottom_play").click(function () {
    bottom_list.autoplay.start();
    $(".bottom_pause").show();
    $(".bottom_play").hide();
  });
   
  //language_btn
  $(".depth2").hide();
  $(".language_btn").mouseenter( function() {
    $(this).find(".depth2").stop().fadeIn();
  });
  $(".depth2").hide();
  $(".language_btn").mouseleave( function() {
    $(this).find(".depth2").stop().fadeOut();
  });
   //gnb 
  $(".gnb > li").mouseenter( function() {
    $(this).find(".depth2").stop().fadeIn();
  });
  $(".depth2").hide();
  $(".gnb > li").mouseleave( function() {
    $(this).find(".depth2").stop().fadeOut();
  }); 
  //mgnb
  $(".ham").click( function () {
  $(".mgnb_wrap").fadeIn();  
  });
  $(".mgnb_close").click( function () {
    $(".mgnb_wrap").fadeOut();  
    });  
  $(".mgnb > li").click(function () {
    $(this).find(".mdepth2").slideDown();
    $(this).siblings().find(".mdepth2").slideUp();
  });
});