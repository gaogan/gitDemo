var psdWidth=1920
function setRem(w) {
    if(w){
        psdWidth=w
    }
    changeRem()
}
window.onresize=function(){
    changeRem()
}
function changeRem(){
    var a=document.documentElement.clientWidth||document.body.clientWidth;
    document.documentElement.style.fontSize=(a/psdWidth)*100+"px"
}
setRem(1920)