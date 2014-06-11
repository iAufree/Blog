$(function() {
    $('body').animate({top: '0'}, 1200);
    //Change button status
    $('.navbar-nav>li').click(function(event) {
        $('.active').removeClass('active');
        $(this).addClass('active');       
    });

    var $art_h1 = $('article').find('h1');

    $art_h1.mouseover(function(){
        if($art_h1.queue().length == 0) {
            $art_h1.animate({width:'30%'},"slow");
        }
    }).mouseout(function(){
        if($art_h1.queue().length == 2) {
            $art_h1.stop(true);    
        } else {
            $art_h1.stop(true).animate({width:'100%'},"slow");
        }
    })

    //Pin navbar
    $(".pinned").pin();

    //Add center propery to image
    art_img = $('article').find('img');
    art_img.addClass('img-thumbnail');
    art_img.wrap('<div class="center"></div>')

    //Click elements change background-color to body
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
    //Improved code highlight
    $("pre").addClass("prettyprint");
    prettyPrint(); 
    //Functional of back top
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
    //Click button show comment
    $('body').on('click', '.show-comment', function(){
        var ds_loaded = false;
        window.disqus_shortname = $('.show-comment').attr('name');
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
        $('body').animate({backgroundColor:'#559B9D'}, "slow");
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
