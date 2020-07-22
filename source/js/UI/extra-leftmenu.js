class ExtraLeftMenu{
    constructor(){
        this.initEvent();
    }

    initEvent(){
        $('.layer-container').hide();
        $('.layer-manager').click(this.toggleLayer);
    }

    toggleLayer(){
        $('.layer-container').toggle("fast","swing");
    }
}