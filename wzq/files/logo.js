function setLogo(e){
    var a,g;switch(e.position){
        case"BottomLeft":
            a="bottom: 0; left: 0;";
            g="bottom: 0; left: 0;";
            break;
        case"BottomRight":
            a="bottom: 0; right: 0;";
            g="bottom: 0; right: 0;";
            break;
        case"TopLeft":
            a="top: 0; left:0; ";
            g="top: 0; left:0; ";
            break;
        case"TopRight":
            a="top: 0; right: 0; ";
            g="top: 0; right: 0; ";
            break;
        default:
            a="top: 0; right: 0; ";
            g="top: 0; right: 0; ";
    }
    var c=document.getElementsByTagName("script"),h;
    for(var d=0;d<c.length;d++){
        if(c[d].src.indexOf("fm.ipinyou.com/j/logo.js")>-1){
            h=c[d];
        }
    }
    a=a+"width: "+e.logo.width+"px; height: "+e.logo.height+"px;";
    g=g+"width: "+e.hoverLogo.width+"px; height: "+e.hoverLogo.height+"px;";
    var b=document.createElement("a");
    b.onmouseover=function(){
        this.nextSibling.style.display="block";this.style.display="none";
    };
    b.style.cssText="position: absolute; cursor: pointer; z-index: 999; "+a+" overflow: hidden; display: block; background: url('"+e.logo.url+"');";
    h.parentNode.insertBefore(b,h);
    var f=document.createElement("a");
    f.onmouseout=function(){
        this.previousSibling.style.display="block";
        this.style.display="none";
    };
    f.style.cssText="position: absolute; cursor: pointer; z-index: 999; "+g+"display: none; overflow: hidden; background: url('"+e.hoverLogo.url+"');";
    f.setAttribute("target","_blank");f.href=e.hoverLogo.clickUrl;h.parentNode.insertBefore(f,h);
}