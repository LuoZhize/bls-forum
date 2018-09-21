var ue = UE.getEditor('myEditor', {
    autoHeight: false,
    elementPathEnabled:false,//关闭elementPath
    wordCount:false, //关闭字数统计
    toolbars: [
        [
            'fullscreen', 'source',
            '|', 'undo', 'redo',
            '|', 'removeformat', 'bold', 'italic', 'underline',
            '|', 'forecolor', 'paragraph',
            '|', 'justifyleft', 'justifycenter', 'justifyright',
            '|', 'link', 'unlink',
            '|', 'insertcode', 'insertvideo', 'insertimage'
        ]
    ]
});
ue.ready(function(){
    //阻止工具栏的点击向上冒泡
    $(this.container).click(function(e){
        e.stopPropagation()
    });
    //设置编辑器的内容
    // ue.setContent('hello');
    //获取html内容，返回: <p>hello</p>
    // var html = ue.getContent();
    //获取纯文本内容，返回: hello
    // var txt = ue.getContentTxt();
});