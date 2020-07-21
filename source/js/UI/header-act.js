class Header{
    constructor(){
        this.initEvent();
    }

    initEvent(){
        $('.btn-mobile-device').click(this.viewMobile);
        $('.btn-desktop-device').click(this.viewDesktop);
        $('.btn-undo').click(()=>{
            editor.runCommand('core:undo');
        });
        
        $('.btn-redo').click(()=>{
            editor.runCommand('core:redo');
        })
        this.activeTab();
        $('.btn-preview').click(this.preview);
        $('.btn-back-preview').click(this.backPreview);
        $('.btn-desktop-device-preview').click(this.previewDesktop);
        $('.btn-mobile-device-preview').click(this.previewMobile);
    }

    viewMobile(){
        editor.runCommand('set-device-mobile');
        $('.btn-mobile-device').addClass("active");
        $('.btn-desktop-device').removeClass("active");
    }

    viewDesktop(){
        editor.runCommand('set-device-desktop');
        $('.btn-desktop-device').addClass("active");
        $('.btn-mobile-device').removeClass("active");
    }

    activeTab(){
        var list_tab_control = $('.tab-control > div > div');
        list_tab_control.each((index,item)=>{
            item.onclick = (event)=>{
                list_tab_control.each((index,item)=>{
                    item.classList.remove("active");
                })
                $(event.target).addClass("active");
            }
        })
    }

    preview(){
        $('body').children().hide();
        $('body').find('.header-preview').show();
        var rowHTML = `<iframe id="editor-devicePreview" style="width: calc(100% - 2px); height: calc(100vh - 68px); margin:auto; box-sizing: content-box;border-width: 1px !important;"</iframe>`;
        $('body').append(rowHTML);
        //Lấy HTML và CSS
        var rowHtml = editor.getHtml();
        var rowCss = editor.getCss();
        $("#editor-devicePreview")[0].srcdoc = `<html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="../source/css/index.css">
            <link rel="stylesheet" href="../source/css/grapes.min.css">
            <script src="https://kit.fontawesome.com/a076d05399.js"></script>
            <style>
                body{
                    overflow-y: scroll;
                }

                body::-webkit-scrollbar {
                    display: none !important;
                }
                ${rowCss}
            </style>
            <link href='/css/custom/grapesjs/grapesjs-only-published.css' rel='stylesheet'/>
        </head>
        <body>
            ${rowHtml}
        <script>
            
        </script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <script src="../source/js/grapes.min.js"></script>
        </body>
        `;
    }

    backPreview(){
        $("#editor-devicePreview").remove();
        $('body').children().show();
        $('.header-preview').hide();
    }

    previewMobile(){
        $("#editor-devicePreview").css('width', '420px');
        $("#editor-devicePreview").css('height', '520px');
        $("#editor-devicePreview").css('margin', 'calc((100vh - 520px)/2) calc((100vw - 480px)/2)');
    }

    previewDesktop(){
        $("#editor-devicePreview").css('width', 'calc(100% - 2px)');
        $("#editor-devicePreview").css('height', 'calc(100% - 68px)');
        $("#editor-devicePreview").css('margin', 'auto');
    }
}