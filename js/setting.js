// random backgroung image
window.onload = function(){
    var oTop = document.getElementById("to_top");
    var screenw = document.documentElement.clientWidth || document.body.clientWidth;
    var screenh = document.documentElement.clientHeight || document.body.clientHeight;
    oTop.style.left = screenw - oTop.offsetWidth +"px";
    oTop.style.top = screenh - oTop.offsetHeight + "px";
    window.onscroll = function(){
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        oTop.style.top = screenh - oTop.offsetHeight + scrolltop +"px";
    };
    oTop.onclick = function(){
        document.documentElement.scrollTop = document.body.scrollTop =0;
    };
    $('body').removeClass('is-loading');
};
// return-to-top button
window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var top_div = document.getElementById( "top_div" );
    if( t >= 500 ) {
        top_div.style.display = "block";
        if(t<=700)  top_div.style.opacity = (t-500) * 0.005;
        else top_div.style.opacity = 1;
    } else {
        top_div.style.display = "none";
    }
};
function totop(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(totop);
        window.scrollTo (0,currentScroll - (currentScroll/5));
    }
}