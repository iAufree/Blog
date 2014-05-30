$(function() {
    window.prettyPrint && prettyPrint();
    $('.wrapper').scrollbar();
    //点击按钮改变状态
    $('.navbar-nav>li').click(function(event) {
        $('.active').removeClass('active');
        $(this).addClass('active');       
    });
    var img_width = $('article').find('img').width();
    var ImgLeft = (-img_width / 2 + 'px');
    $('article img').css('left', ImgLeft);
    //点击元素改变背景颜色
    $('ul li:eq(0)').click(function(event) {
        $('body').animate({backgroundColor:'#2C94C0'}, "slow")        
    });
    $('ul li:eq(1)').click(function(event) {
        $('body').animate({backgroundColor:'pink'}, "slow")        
    });
    $('ul li:eq(2)').click(function(event) {
        $('body').animate({backgroundColor:'#50AF87'}, "slow")        
    });
    $('ul li:eq(3)').click(function(event) {
        $('body').animate({backgroundColor:'#D15659'}, "slow")        
    });
    $('ul li:eq(4)').click(function(event) {
        $('body').animate({backgroundColor:'#c08db1'}, "slow")        
    });
    var clicked = false;
    if (!clicked) {
        $('button').click(function(event) {
            $('button').addClass('rotate-icon');
            clicked = true;
            setTimeout(function() {
                $('button').removeClass('rotate-icon');
                clicked = false;
            }, 600);
        });
    }
   //  $('.wrapper').scroll(function(e) {
   //     //若滚动条离顶部大于100元素
   //     if($('.scroll-bar').css("top")>"100px"){
   //          alert('hi');
   //         $("#backtop").fadeIn(1000);//以1秒的间隔渐显id=gotop的元素
   //     }
   //     else {
   //         $("#backtop").fadeOut(1000);//以1秒的间隔渐隐id=gotop的元素
   //      }
   // });
})
