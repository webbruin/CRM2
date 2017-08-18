import $ from 'jquery';
console.log(111)
setTimeout(function () {
  $(function () {
    var header_usn = $('.header_usn');
    var tmp = true;
    header_usn.on('click',function (event) {
      if(tmp){
        $(this).find('.header_down img').css({transform:'rotate(180deg)',transition:'all .3s'});
        $('.msg_select').animate({top:'60px'});
        tmp = false;
      }else{
        $(this).find('.header_down img').css({transform:'rotate(0deg)',transition:'all .3s'});
        $('.msg_select').animate({top:'-130px'});
        tmp = true;
      }
      event.stopPropagation();
    })

    var parentTree = $('.tree .parentTree>a')
    parentTree.append(`<img class="down1" src="src/images/down1.png" />`);
    $('.down1').css({position:'absolute',right:'15px'});

    var isOk = true;
    parentTree.each(function (i) {
      $(this).on('click',function (event) {
        if(isOk){
          $(this).find('.down1').css({transform:'rotate(180deg)',transition:'all .3s'});
          $(this).siblings('ul').animate({height:$(this).siblings('ul').find('li').length * 45+'px'});
          isOk = false;
        }else{
          $(this).find('.down1').css({transform:'rotate(0deg)',transition:'all .3s'});
          $(this).siblings('ul').animate({height:0});
          isOk = true;
        }
        event.stopPropagation();
      })
    })

    $('.parentTree ul li a').each(function (j) {
      $(this).on('click',function (event) {
        $('.parentTree ul li a').removeClass('active');
        $(this).addClass('active');
        event.stopPropagation();
      })
    })

  })
},200)