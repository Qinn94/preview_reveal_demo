var ORIGINPAGEWIDTH = 960
var ORIGINPAGEHEIGHT = 720

var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        setRem()
    };
recalc()
//if (!document.addEventListener) return
window.addEventListener(resizeEvt, recalc, false)


function setRem() {
    var clientWidth = document.documentElement.clientWidth;
    var clientHeight = document.documentElement.clientHeight;
    if (!clientWidth) return;

    if (clientWidth / clientHeight > ORIGINPAGEWIDTH / ORIGINPAGEHEIGHT) {
        document.documentElement.style.fontSize = 100 * (clientHeight / ORIGINPAGEHEIGHT) + 'px';
        window.base = 100 * (clientHeight / ORIGINPAGEHEIGHT);
        window.DomBase = 100
    } else {
        document.documentElement.style.fontSize = 100 * (clientWidth / ORIGINPAGEWIDTH) + 'px';
        window.base = 100 * (clientWidth / ORIGINPAGEWIDTH);
        window.DomBase = 100
    }
}