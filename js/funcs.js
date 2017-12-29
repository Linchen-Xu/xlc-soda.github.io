function changeOpacity(){
    var a = $('body');
    if(a.hasClass('transparent')){
        a.removeClass('transparent');
        a.css('opacity','1');
    }else{
        a.addClass('transparent');
        a.css('opacity','0.5');
    }
}
