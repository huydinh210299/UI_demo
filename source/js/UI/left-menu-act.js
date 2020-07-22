class LeftMenu{
    constructor(){
        this.initEvent();
        this.initAttr();
        this.blockManager = editor.BlockManager;
    }

    initAttr(){
        //Khởi tạo mặc định trạng thái cho danh sách các block
        $('#blocks').attr("block-status",0);
        //Khởi tạo mặc định trạng thái cho các nút hiển thị danh sách các block
        var list_btn = $('.btn-list-block');
        list_btn.each((index,item)=>{
        $(item).attr("btn-status",0);
        //Khởi tạo trạng thái mặc định cho các tab
        var list_tab_block = $('.btn-block');
        $('.btn-template').attr("tab-status",1);
        $('.btn-basic').attr("tab-status",0);
    })
    }

    initEvent(){
        $('.btn-more-template').click(this.openLeftMenu.bind(this));
        $('.btn-template-wrapper').click(this.openTemplate);
        $('.btn-basic-wrapper').click(this.openBasic);
        $('.basic').click(()=>{
            this.blockManager.render(basic_component);
            this.hideWhenDrag();
        })
        
        $('.layout').click(()=>{
            this.blockManager.render(layout_component);
            this.hideWhenDrag();
        })
        
        $('.application').click(()=>{
            this.blockManager.render(application_component);
            this.hideWhenDrag();
        })
        
        $('.sample').click(()=>{
            this.blockManager.render(layout_component);
            this.hideWhenDrag();
        })
        this.activeTab();
        this.activeBlockBtn();
    }

    removeAllTabStt(){
        var list_tab_block = $('.btn-block');
        list_tab_block.each((index,item)=>{
            $(item).attr("tab-status",0);
        })
    };

    removeAllTabActive(){
        var list_tab_block = $('.btn-block');
        list_tab_block.each((index,item)=>{
            item.classList.remove("active");
        })
    }

    removeAllBtnStt(){
        var list_btn = $('.btn-list-block');
        list_btn.each((index,item)=>{
            $(item).attr("btn-status",0);
        });
    }

    removeAllBtnActive(){
        var list_btn = $('.btn-list-block');
        list_btn.each((index,item)=>{
            item.classList.remove("active");
        });
    }

    /**
     *Hàm active khi chuyển tab 
     */
    activeTab(event){
        var list_tab_block = $('.btn-block');
        list_tab_block.each((index,item)=>{
            item.onclick = (event)=>{
                var tabstt = $(item).attr("tab-status");
                var blockstt = $('#blocks').attr("block-status");
                if(tabstt == 0 && blockstt == 1){//sang tab mới và block đã mở
                    this.removeAllTabStt();
                    this.removeAllTabActive();
                    this.removeAllBtnStt();
                    this.removeAllBtnActive();
                    $(item).attr("tab-status",1);
                    $('#blocks').attr("block-status",0);
                    $('#blocks').hide("fast");
                    item.classList.add("active");
                }
                else if(tabstt == 0 && blockstt == 0){//sang tab mới và block đã mở
                    this.removeAllTabStt();
                    this.removeAllTabActive();
                    this.removeAllBtnStt();
                    this.removeAllBtnActive();
                    $(item).attr("tab-status",1);
                    item.classList.add("active");
                }
            }
        });
    }

    /**
     * Hàm active khi nhấn nút mở danh sách block
     */

    activeBlockBtn(){
        var list_btn = $('.btn-list-block');
        list_btn.each((index,item)=>{
            $(item).click((e)=>{
                var me = e.target;
                var btnstt = $(me).attr("btn-status");
                var blockstt = $('#blocks').attr("block-status");
                if((btnstt == 0) && (blockstt == 0)){//click mở block và block chưa mở
                    this.removeAllBtnStt();
                    this.removeAllBtnActive();
                    me.classList.add("active");
                    $(me).attr("btn-status",1);
                    $('#blocks').attr("block-status",1);
                    $('#blocks').show("fast");
                }
                if((btnstt == 1) && (blockstt == 1)){//click lại nút đã mở block
                    this.removeAllBtnStt();
                    this.removeAllBtnActive();
                    me.classList.remove("active");
                    $(me).attr("btn-status",0);
                    $('#blocks').attr("block-status",0);
                    $('#blocks').hide("fast");
                }
                if((btnstt == 0) && (blockstt == 1)){//nút chưa được nhấn và block đang mở
                    this.removeAllBtnStt();
                    this.removeAllBtnActive();
                    me.classList.add("active");
                    $(me).attr("btn-status",1);
                    $('#blocks').attr("block-status",1);
                    $('#blocks').hide();
                    $('#blocks').show("fast");
                }
            })
        })
    }

    /**
     * Hàm mở left menu
     */
    
    openLeftMenu(){
        $('.left-menu').toggle("fast","linear");
        $('#blocks').hide("fast");
        $('#blocks').attr("block-status",0);
        this.removeAllBtnActive();
        this.removeAllBtnStt();
    }

    /**
     * Hàm chuyển qua giữa các tab
     */
    openTemplate(e){
        var button = e.currentTarget;
        var tabstt = $(item).attr("tab-status");
        var blockstt = $('#blocks').attr("block-status");
        var item = $(button).children(".btn-block");
        if(tabstt == 0 && blockstt == 1){//sang tab mới và block đã mở
            this.removeAllTabStt();
            this.removeAllTabActive();
            this.removeAllBtnStt();
            this.removeAllBtnActive();
            $(item).attr("tab-status",1);
            $('#blocks').attr("block-status",0);
            $('#blocks').hide("fast");
            item.classList.add("active");
        }
        else if(tabstt == 0 && blockstt == 0){//sang tab mới và block đã mở
            this.removeAllTabStt();
            this.removeAllTabActive();
            this.removeAllBtnStt();
            this.removeAllBtnActive();
            $(item).attr("tab-status",1);
            item.classList.add("active");
        }
        $('.template-comp').show("fast");
        $('.block-cate').hide("fast");
    }

    openBasic(){
        $('.template-comp').hide("fast");
        $('.block-cate').show("fast");
    }


        /**
     * Hàm thêm chức năng tắt danh sách các block khi có block được kéo ra dropzone
     */
    hideWhenDrag(){
        var blocks = $('.gjs-block');
        blocks.each((index,item)=>{
            item.ondragenter = ()=>{
                $('#blocks').hide();
                $('.left-menu').hide();
                this.removeAllBtnStt();
                this.removeAllBtnActive();
                // this.removeAllTabStt();
                // this.removeAllTabActive();
            }
        })
    }
}