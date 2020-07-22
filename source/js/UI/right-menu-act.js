class RightMenu{
    constructor(){
        this.initEvent();
    }

    initEvent(){
        $('.btn-edit-wrap').click(this.showStyle.bind(this));
        $('.btn-effect-wrap').click(this.showEffect.bind(this));
        $('.btn-event-wrap').click(this.showEvent.bind(this));
        this.removeActiveBtnContent();
        $('.btn-edit-content').css('color','#060E2E');
        this.hideAllEventTab();
        $('.select-event').change(this.selectEvent.bind(this));
        $('.add_btn').click(this.add);
        $('.sub_btn').click(this.sub);
        this.addFontClass();
    }

    showStyle(){
        $('.effect-content').hide("fast");
        $('.event-content').hide("fast");
        $('.style-content').show("fast");
        this.removeAllActiveIcon();
        this.removeActiveBtnContent()
        $('.btn-edit-icon').css('background-image', 'url("../source/img/common/Icon-Edit-Active.svg")');
        $('.btn-edit-content').css('color','#060E2E');
    }

    showEffect(){
        $('.style-content').hide("fast");
        $('.event-content').hide("fast");
        $('.effect-content').show("fast");
        this.removeActiveBtnContent();
        this.removeAllActiveIcon();
        $('.btn-effect-icon').css('background-image', 'url("../source/img/common/Icon-Effect-Active.svg")');
        $('.btn-effect-content').css('color','#060E2E');
    }

    showEvent(){
        $('.style-content').hide("fast");
        $('.effect-content').hide("fast");
        $('.event-content').show("fast");
        this.removeActiveBtnContent();
        this.removeAllActiveIcon();
        $('.btn-event-icon').css('background-image', 'url("../source/img/common/Icon-Event-Active.svg")');
        $('.btn-event-content').css('color','#060E2E');
    }

    removeAllActiveIcon(){
        $('.btn-edit-icon').css('background-image', 'url("../source/img/common/Icon-Edit-Inactive.svg")');
        $('.btn-effect-icon').css('background-image', 'url("../source/img/common/Icon-Effect-Inactive.svg")');
        $('.btn-event-icon').css('background-image', 'url("../source/img/common/Icon-Event-Inactive.svg")');
    }

    removeActiveBtnContent(){
        $('.switch-menu div div div:last-child').css('color','#ABB1BC');
    }

    selectEvent(){
        var val = $('.select-event option:selected').val();
        if(val == 1){
            this.hideAllEventTab();
        }
        else if(val == 2){
            this.hideAllEventTab();
            $('.moveSection-content').show();
        }
        else if(val == 3){
            this.hideAllEventTab();
            $('.openLink-content').show();
        }
        else{
            this.hideAllEventTab();
            $('.count-content').show();
        }
    }

    hideAllEventTab(){
        $('.moveSection-content').hide();
        $('.openLink-content').hide();
        $('.count-content').hide();
    }

    add(){
        debugger
        var input = $(this).closest('.custom_input').children(".number");
        var value = $(input).val();
        value = parseInt(value) + 1;
        $(input).val(value);
    }

    sub(){
        debugger
        var input = $(this).closest('.custom_input').children(".number");
        var value = $(input).val();
        if(parseInt(value) > 0){
            value = parseInt(value) - 1;
        }
        $(input).val(value);
    }

    addFontClass(){
        var options = $('.option');
        options.each((index,item)=>{
            item.classList.add("ggs-regular");
            $(item).attr("color","#404557")
        });
    }
}