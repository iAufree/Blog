$(function() {
    $('body').animate({top: '0'}, 1000);
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
    change_bg();

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
});
function change_bg(){
    $('ul li:eq(0)').click(function(event) {
        $('body').animate({backgroundColor:'#559B9D'}, "slow")        
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
} 

