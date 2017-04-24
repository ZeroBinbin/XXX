/**
 * Created by Administrator on 2017/4/23 0023.
 */
var readyList = [] ,readyState  , W3C  = window.dispatchEvent ,readyEvent = W3C ? "DOMContentLoaded" : "readystatechange";
if(!document.readyState){
    readyState = document.readyState = document.body ? "complete" : "loading";
}

function fireReady(){
    for(var i = 0 ,fn; fn = readyList[ i++ ] ;){
        fn();
    }
    readyList = null;
    fireReady = function(){};
}

function doScrollCheck() {
    try {
        document.documentElement.doScroll("left");
        fireReady()
    }catch(e){
        setTimeout(doScrollCheck);
    }
}

if(document.readyState === "complete"){
    fireReady()
}else{
    document.addEventListener && document.addEventListener(readyEvent ,function(){
        if(W3C || document.readyState === "complete") fireReady();
        document.readyState = "complete";
    })

    if(document.documentElement.doScroll){
        try {
            if(self.eval === parent.eval){
                doScrollCheck()
            }
        } catch(e) {
            doScrollCheck();
        }
    }
}



export function domReady(fn){
    if(readyList){
        readyList.push(fn);
    }else{
        fn()
    }
}