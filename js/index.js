window.onload = function (){
    let devHeight = $(window).height();
    //pageBg height
    $('.main-up-bj, .main-down-bj').css('height', devHeight/2 + 'px');
    $('.send-post-order li a').click(function () {
        $('.get-order').text("排序:" + $(this).text());
    });
};