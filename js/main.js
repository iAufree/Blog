$(function() {
    $('body').animate({top: '0'}, 1200);
    //改变活动按钮背景色
    $('.navbar-nav>li').click(function(event) {
        $('.active').removeClass('active');
        $(this).addClass('active');       
    });

    //给image添加class,使图片居中显示
    art_img = $('article').find('img');
    art_img.addClass('img-thumbnail');
    art_img.wrap('<div class="center"></div>')

    //点击元素改变背景颜色
    change_list();

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
    $("pre").addClass("prettyprint");
    prettyPrint(); 
    $('#backtop').click(function(event) {
        $('html,body').animate({scrollTop:0}, "slow");
    });
    $('#backtop').mouseenter(function(event) {
        $(this).animate({opacity:0.3}, "slow");
    });
    $('#backtop').mouseleave(function(event) {
        $(this).animate({opacity:0.5}, "slow");   
    });
    backtop();
    $('body').on('click', '.show-commend', function(){
        var ds_loaded = false;
        window.disqus_shortname = $('.show-commend').attr('name');
        $.ajax({
          type: "GET",
          url: "http://" + disqus_shortname + ".disqus.com/embed.js",
          dataType: "script",
          cache: true
      });
    });
});
function change_list(){
    $('ul li:eq(0)').click(function(event) {
        var str = "notes";
        var patt1 = new RegExp(location.url);
        $('body').animate({backgroundColor:'#559B9D'}, "slow");
        if(location.href)
        $('.list-active').removeClass('list-active');
        $('.list:eq(0)').addClass('list-active');        
    });
    $('ul li:eq(1)').click(function(event) {
        $('body').animate({backgroundColor:'pink'}, "slow");
        $('.list').fadeOut(100);
        $('.list:eq(1)').fadeIn(1000);         
    });
    $('ul li:eq(2)').click(function(event) {
        $('body').animate({backgroundColor:'#50AF87'}, "slow");
        $('.list').fadeOut(1);
        $('.list:eq(2)').fadeIn(1000);  
    });
    $('ul li:eq(3)').click(function(event) {
        $('body').animate({backgroundColor:'#D15659'}, "slow");
        $('.list').fadeOut(100);
        $('.list:eq(3)').fadeIn(1000);  
    });
    $('ul li:eq(4)').click(function(event) {
        $('body').animate({backgroundColor:'#c08db1'}, "slow");
        $('.list').fadeOut(100);
        $('.list:eq(4)').fadeIn(1000);   
    });
} 
function backtop(){
    $(window).scroll(function(event) {
        if($(window).scrollTop()>500){
            $('#backtop').fadeIn('slow');
        }else{
            $('#backtop').fadeOut('slow');
        }
    });
}
