window.onload = function (){
    let devHeight = $(window).height();
    let log = $('.log').is(":visible");//登录状态
    let allStatus = true;//消息页面的状态
    let allReplyNum = 0,//all reply click num
        replyNum = 0,//every reply click num
        recordNav = 0;//home-nav-item click index
    //pageBg height
    $('.main-up-bj, .main-down-bj').css('height', devHeight/2 + 'px');
    $('.send-post-order li a').click(function () {
        $('.get-order').text("排序:" + $(this).text());
    });
    //log
    $('.log-forget').click(function () {
        $('#log-modal').hide();
        $('#forget-modal').show();
    });
    $('#forget-close').click(function () {
        $('#log-modal').show();
        $('#forget-modal').hide();
    });
    //message nav
    $('.home-nav-item').click(function () {
        $(this).addClass('message-nav-active').siblings().removeClass('message-nav-active');
    });
    $('.home-nav>.home-nav-item').click(function () {
        $(this).addClass('home-nav-active').siblings().removeClass('home-nav-active');
    });
    //log nav
    $('.log-nav').click(function () {
        $(this).addClass('log-page-active').siblings().removeClass('log-page-active');
    });
    //reply-on
    $('#reply-edit').on('show.bs.collapse', function () {
        $('.reply').children('span').css({
            'background': 'url("../img/reply-on.png") 0 -0.05rem no-repeat',
            '-moz-background-size': '100%',
            'background-size': '100%'
        });
    });
    $('#reply-edit').on('hidden.bs.collapse', function () {
        $('.reply').children('span').css({
            'background': 'url("../img/reply-off.png") 0 -0.05rem no-repeat',
            '-moz-background-size': '100%',
            'background-size': '100%'
        });
    });
    if (log) {//判断登录状态
        $('.home-child-save').click(function () {//收藏
            $(this).attr('data-target',"");
            $('#detail-save').text("已收藏");
            $('.laud').css({
                'background': 'url("../img/laud.png") no-repeat',
                '-moz-background-size': '100%',
                'background-size': '100%'
            });
        });
    } else {
        $(this).attr('data-target',"#save-house");
        $('#detail-save').text("收藏");
        $('.laud').css({
            'background': 'url("../img/laud-no.png") no-repeat',
            '-moz-background-size': '100%',
            'background-size': '100%'
        });
    }
    //删除该元素对应的列表项目
    $('.message-item-del').click(function () {//单个删除
        $(this).parents('.my-message-item').remove();
    });
    $('#my-message .home-nav-item').click(function () {//判断是否是全部
        let status = true;
        if ($(this).index() === 0 ) {
            status = true;
            allStatus = status;
        } else {
            status = false;
            allStatus = status;
        }
    });
    $('.message-all-del').click(function () {//删除所有
        if (allStatus) {
            $('.my-message-item').remove();
            $('#my-content').children('.tab-pane').html("<p style='text-align: center;margin-top: 1rem'>暂无消息</p>");
        } else {
            $('#my-content').children('.active').children('.my-message-item').remove();
            $('#my-content').children('.active').html("<p style='text-align: center;margin-top: 1rem'>暂无消息</p>");
        }
    });
    //标记
    $('.message-all-read').click(function () {//所有标记
        if (allReplyNum === 0) {
            $(this).css({
                'color': '#9d3a23',
                'border': '0.03333rem solid #9d3a23'
            });
            $('.message-item-read').css('color','#9d3a23').children('.reply-read').css({
                'background': 'url("../img/read-on.png") no-repeat',
                '-moz-background-size': '100%',
                'background-size': '100%'
            });
            // if (allStatus) {//判断是否当前页面
            //     $('.message-item-read').css('color','#9d3a23').children('.reply-read').css({
            //         'background': 'url("../img/read-on.png") no-repeat',
            //         '-moz-background-size': '100%',
            //         'background-size': '100%'
            //     });
            //     $(this).css({
            //         'color': '#9d3a23',
            //         'border': '0.03333rem solid #9d3a23'
            //     });
            // } else {
            //     recordNav = $('.message-nav-active').index();
            //     $('#my-content').children('.active').children('.my-message-item').children('.reply-fun').children('.message-item-read').
            //     css('color','#9d3a23').children('.reply-read').css({
            //         'background': 'url("../img/read-on.png") no-repeat',
            //         '-moz-background-size': '100%',
            //         'background-size': '100%'
            //     });
            // }
            allReplyNum = 1;
            $('.log-message-active').css({
                'background': 'url("../img/log-message-hover.png") no-repeat',
                '-moz-background-size': '100%',
                'background-size': '100%'
            });
        } else {
            $(this).css({
                'color': '#222222',
                'border': '0.03333rem solid #222222'
            });
            $('.message-item-read').css('color','#000000').children('.reply-read').css({
                'background': 'url("../img/read-off.png") no-repeat',
                '-moz-background-size': '100%',
                'background-size': '100%'
            });
            // if (allStatus) {
            //     $('.message-item-read').css('color','#000000').children('.reply-read').css({
            //         'background': 'url("../img/read-off.png") no-repeat',
            //         '-moz-background-size': '100%',
            //         'background-size': '100%'
            //     });
            // } else {
            //     $('#my-content').children('.active').children('.my-message-item').children('.reply-fun').children('.message-item-read').
            //     css('color','#000000').children('.reply-read').css({
            //         'background': 'url("../img/read-off.png") no-repeat',
            //         '-moz-background-size': '100%',
            //         'background-size': '100%'
            //     });
            // }
            allReplyNum = 0;
            $('.log-message-active').css({
                'background': 'url("../img/nav-message.png") no-repeat',
                '-moz-background-size': '100%',
                'background-size': '100%'
            });
        }
    });
    // $('#my-message .home-nav-item').click(function () {//判断只让当前所有标记为红（未做完）
    //     allReplyNum = 0;
    //     if ($(this).index() === recordNav) {
    //         $('.message-all-read').css({
    //             'color': '#9d3a23',
    //             'border': '0.03333rem solid #9d3a23'
    //         });
    //     } else {
    //         $('.message-all-read').css({
    //             'color': '#222222',
    //             'border': '0.03333rem solid #222222'
    //         });
    //     }
    // });
    $('.message-item-read').click(function () {//单个标记
        if (replyNum === 0) {
            $(this).css('color','#9d3a23').children('.reply-read').css({
                'background': 'url("../img/read-on.png") no-repeat',
                '-moz-background-size': '100%',
                'background-size': '100%'
            });
            replyNum = 1;
        } else {
            $(this).css('color','#000000').children('.reply-read').css({
                'background': 'url("../img/read-off.png") no-repeat',
                '-moz-background-size': '100%',
                'background-size': '100%'
            });
            replyNum = 0;
        }
    });
    $('.log a').eq(2).click(function () {//退出
        $('.no-log').css('display', 'inline-block');
        $('.log').css('display', 'none');
    });
    $('.detail-del').click(function () {
        $(this).parents('.reply-item').remove();
    });
    $('.message-forum-del').click(function () {
        $(this).parents('.home-newest-item').remove();
    });
};