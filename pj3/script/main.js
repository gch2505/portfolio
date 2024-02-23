
$(document).ready(function(){
  $(window).resize(function(){
    w_width = $(window).innerWidth();
    console.log(w_width)

  }).resize;



//헤더 서식
  $('.gnb > ul > li > a').mouseenter(function(){
    $('.sub').stop().slideDown();
    $('.g_box').stop().slideDown();
  });
  $('.h_wrap').mouseleave(function(){
    $('.sub').stop().slideUp();
    $('.g_box').stop().slideUp();
  });

  //태블릿 헤더 서식
  $('.lnb > .fa-bars').click(function(){
    $('.sub').stop().slideToggle();
    $('.g_box').stop().slideToggle();
  });

  //모바일 헤더 서식


  
//슬라이드 서식 시작
  const l_btn = $('.fa-chevron-left');
  const r_btn = $('.fa-chevron-right');
  const c_btn = $('.swiper-wrapper .ctrl_btn > li');

  let slide_img = $('.swiper-slide');
  let i = $('.swiper-wrapper .ctrl_btn li').index();

  //슬라이드 페이드인/아웃 효과
  function fadeInOut(){
    $('.swiper-wrapper .ctrl_btn li').removeClass('on');
    slide_img.fadeOut();
    if(i==2){
      i=0;
    }else{
      i++;
    }
    $('.swiper-wrapper .ctrl_btn li').eq(i).addClass('on');
    slide_img.eq(i).stop().fadeIn();
  }

  function fadeInOut2(){
    $('.swiper-wrapper .ctrl_btn li').removeClass('on');
    slide_img.fadeOut();
    if(i==0){
      i=2;
    }else{
      i--;
    }
    $('.swiper-wrapper .ctrl_btn li').eq(i).addClass('on');
    slide_img.eq(i).stop().fadeIn();
  }

  //슬라이드 자동재생
  let Timer = setInterval(fadeInOut,5000);

  l_btn.click(function(){
    fadeInOut2();
  });
  r_btn.click(function(){
    fadeInOut();
  });
  $('.swiper-wrapper .fas').hover(function(){
    clearInterval(Timer);
  }, function(){
    Timer = setInterval(fadeInOut,5000);
  });

  c_btn.click(function(){
    let idx = $(this).index();
    console.log();

    slide_img.fadeOut();

    $('.swiper-wrapper .ctrl_btn li').removeClass('on');
    $(this).addClass('on');

    i = idx;
    slide_img.eq(i).fadeIn();
    clearInterval(Timer);
  });

  c_btn.mouseenter(function(){
    Timer = clearInterval(Timer);
  });
  c_btn.mouseleave(function(){
    Timer = setInterval(fadeInOut, 5000);
  });

  //태블릿 베스트 서식

  $('.b_inner .fa-chevron-left').click(function(){

  });
  $('.b_inner .fa-chevron-right').click(function(){
    

  });


  //태블릿 인스타그램 서식

  

  //탑버튼 고정 서식
    let scrollTop;
    /*window.addEventListener('scroll',function(){
      const t_btn = document.getElementById('top_btn');
      scrollTop = this.pageYOffset;
      console.log(scrollTop);
    });*/
    $(window).scroll(function(){
      scrollTop = this.pageYOffset;
      console.log(scrollTop);

      if(scrollTop<300){
        $('#top_btn').css('display','none');
      }else{
        $('#top_btn').css('display','block');
      }
      if(scrollTop>=2865){
        $('#top_btn').addClass('btn_s');
      }else{
        $('#top_btn').removeClass('btn_s');
      }
    });
  

});