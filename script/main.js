
$(document).ready(function(){

  // 인트로 1
  setTimeout(function(){
    $('.intro1').fadeOut(1000);
  },6000);

  //메인페이지
  setTimeout(function(){
    $('.intro2').fadeIn(1000);
    $('main').fadeIn(1000);
  },7000);
  setTimeout(function(){
    $('.h_wrap').fadeIn(500);
  },8000);
  setTimeout(function(){
    $('.title03').animate({'top':'128px'},1000,'easeOutBounce');
  },9000);
  setTimeout(function(){
    $('.title02').animate({'top':'0'},1000,'easeOutBounce');
  },9800);
  setTimeout(function(){
    $('.title01').animate({'top':'-128px'},1000,'easeOutBounce');
  },10600);


  //낮 구름 흘러가는 효과
  const cloudSlide = $('.cloud_inner');

  //첫번째 구름 앞에 마지막 구름 배치하기
  $('.cloud_inner > li:last-child').insertBefore('.cloud_inner > li:first-child');

  //왼쪽으로 이동하는 함수 작성
  function moveRight(){
    cloudSlide.animate({'margin-left':'-900px'},10000,'linear',function(){
      $('.cloud_inner > li:first-child').insertAfter('.cloud_inner > li:last-child');
      cloudSlide.css('margin-left','-450px');
    });
  }

  let Timer2 = setInterval(moveRight, 0);



  // //밤하늘 별
  // const size = ['size1', 'size2', 'size3'];
  // const opacity = ['opacity1', 'opacity1', 'opacity1', 'opacity2', 'opacity3'];
  // const twinkle = ['twinkle1', 'twinkle1', 'twinkle1', 'twinkle2', 'twinkle2', 'twinkle3', 'twinkle4'];

  // //랜덤함수
  // function getRandomValue(max){
  //   return Math.floor(Math.random() * max);
  // }

  // const _s = getRandomValue(3);
  // const _o = getRandomValue(5);
  // const _t = getRandomValue(7);

  // const className = size[_s] + ' ' + opacity[_o] + ' ' + twinkle[_t];


  //윈도우 높이
  $(window).scroll(function(){
    let s_pos = $(this).scrollTop();
    let sec_pos = $('section').offset().top;
    console.log(s_pos);


    if(s_pos>=sec_pos){
      $('.top_btn').fadeIn();
      $('.h_wrap').addClass('h_top');
      $('.sub').fadeIn();
    }else{
      $('.top_btn').fadeOut();
      $('.h_wrap').removeClass('h_top');
      $('.sub').fadeOut();
    }

  });

  //탑버튼 클릭하면 페이지 상단으로 이동
  $('.top_btn').click(function(){
    $('html,body').animate({'scrollTop':'0px'},500);
    return false;
  });
  
  //로고 클릭하면 페이지 상단으로 이동
  const logo = $('.h_inner h1 a');
  logo.click(function(){
    $('html,body').animate({'scrollTop':'0px'},500);
    return false;
  });

  //gnb 클릭하면 해당 페이지로 스크롤
  let gnb = $('.gnb > ul > li');
  gnb.click(function(){
    let i = $(this).index();
    console.log(i);

    if(i>=2){
      i = i+4;
    }else{
      i = $(this).index();
    }

    $('html, body').stop().animate({scrollTop:$('main section').eq(i).offset().top},500);

    return false;
  });

  //프로젝트 리스트에서 프로젝트 클릭하면 해당 페이지로 스크롤
  let pj_list = $('.project li');
  pj_list.click(function(){
    let i = $(this).index();
    console.log(i);

    i = i+2;
    $('html, body').stop().animate({scrollTop:$('main section').eq(i).offset().top},500);

    return false;
  });



  //snb 클릭시 snb 모양 바뀌게
  let snb = $('.sub ul li');
  snb.click(function(){
    let i = $(this).index();
    console.log(i);

    $('html, body').stop().animate({scrollTop:$('main section').eq(i).offset().top},500);
    $(this).addClass('on').siblings().removeClass('on');
  });

  
  //프로젝트 리스트 애니메이션
  $('.project li').mouseenter(function(){
    $(this).find('.jar_top').css('transform','rotate(-105deg)').siblings().find('.jar_cookie:last-child').addClass('cookie_mov');
    $(this).find('.cookie_txt').css({
      'opacity':'1',
      'line-height':'210px'
    });
  });
  $('.project li').mouseleave(function(){
    $(this).find('.jar_cookie:last-child').removeClass('cookie_mov');

    $(this).find('.jar_top').css('transform','rotate(0deg)');
    $(this).find('.cookie_txt').css({
      'opacity':'0',
      'line-height':'30px'
    });
  });


  //갤러리 스크립트
  const g_menu = $('.g_menu li a');
  const g_img = $('.g_list a');

  const all_btn = $('.g_menu .g_all');
  const design_btn = $('.g_menu .g_uiux');
  const uiux_btn = $('.g_menu .g_design');
  const art_btn = $('.g_menu .g_art');

  g_menu.click(function(){
    $(this).addClass('action').parent().siblings().find('a').removeClass('action');
  });

  //버튼 클릭시 해당 태그만 보이도록
  all_btn.click(function(){
    $('.g_photo').hide();
    $('.g_photo').fadeIn();
  });
  design_btn.click(function(){
    $('.g_photo').hide();
    $('.design').fadeIn();
  });
  uiux_btn.click(function(){
    $('.g_photo').hide();
    $('.uiux').fadeIn();
  });
  art_btn.click(function(){
    $('.g_photo').hide();
    $('.art').fadeIn();
  });
  
  //갤러리 클릭시 모달창 띄우기
  g_img.click(function(){
    let img_src = $(this).attr('href');
    console.log(img_src);

    let modal = `
      <div class="modal">
        <div class="center">
          <img src="${img_src}" alt="">
          <i class="fas fa-times"></i>
        </div>
      </div>
    `;

    $('body').append(modal);
    const close_btn = $('.modal .center .fas');

    close_btn.click(function(){
      $('.modal').fadeOut(250);
    });

    return false;
  });

});