/**
 * Created by Administrator on 2017/4/20 0020.
 */
import './dependency/typeis';
import { extend } from './dependency/extend';
import { domReady } from './domReady'

var _XXX = window.XXX ;

class XXX {
    constructor(args){

    }
    //静态方法
    /**
     * 无冲突处理方法
     * @returns {XXX}
     */
    static noConflict(){
        window.XXX = _XXX;
        return XXX
    }
    /**
     * 数组化
     */
    static slice(){
        window.dispatchEvent ? function(nodes ,start ,end){
            return [].slice.call(nodes ,start ,end)
        } : function(nodes ,start ,end){
            let ret = [] ,n = nodes.length;
            if(end.typeis("Undefined|Number") && isFinite(end)){
                start = parseInt(start ,0) || 0 ;
                if(start < 0){
                    start += n;
                }
                if(end > n){
                    end = n;
                }
                if(end < 0){
                    end += n;
                }
                for (var i = start; i< end; ++i) {
                    ret[ i - start ] = nodes[ i ]
                }
            }
        }
    }


}
XXX.extend = extend;
XXX.domReady = domReady;
export { XXX }

//语言扩展
var sp = String.prototype;
sp.contains = function(target ,str ,separator){
    return separator ?
        (separator + target +separator).indexOf(separator + str +separator) > -1 :
        target.indexOf(str) > -1;
}
sp.sartWidth = function(target ,str ,ignorecase) {
    var start_str = target.substr(0 ,str.length);
    return ignorecase ? start_str.toLowerCase() ===str.toLowerCase() :
        start_str === str;
}
sp.endWidth = function(target ,str ,ignorecase) {
    var end_str = target.substring(target.length - str.length);
    return ignorecase ? end_str.toLowerCase() ===str.toLowerCase() :
    end_str === str;
}
sp.repeat = function() {
    var s = target ,total = "";
    while ( n > 0 ){
        if(n % 2 == 1) total += s;
        if(n == 1) break;
        s += s;
        n = n >> 1;
    }
    return total;
}
sp.byteLen = function(target ,fix) {
    fix = fix ? fix : 2;
    var str = new Array(fix + 1).join("-");
    return target.replace(/[^\x00-\xff]/g ,str).length;
}