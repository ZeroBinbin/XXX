/**
 * https://typeis.github.io/
 * https://github.com/typeis/typeisjs
 * typeis.js
 * Typeis. it's the smart and simple javascript type check and validation library
 *
 * @author Salih Sağdilek
 * @version 1.1.1
 */

;(function () {
    var OP = Object.prototype;
    if (Object.defineProperty && !OP.typeis) {
        var toString, Regex;
        toString = OP.toString;
        Regex = /^\[object |]$/gi;
        Object.defineProperty(OP, 'typeis', {value: function (is) {return typeis(this, is)}});
        function whatTheType(something){
            return something != something
                ? "NaN" : something == null
                ? "Null" :something == void 0
                ? "Undefined" : toString.call(something).replace(Regex, '');
        }
        function typeis(something, is) {
            var type = whatTheType(something, is);
            if(whatTheType(is) == 'Array'){
                is = is.join('|');
            }
            if(type === 'Object'){
                is = is.split("|");
                for(var i = 0;i<is.length;i++){
                    if(something.constructor.name === is[i] || is[i] === 'Object'){
                        return true;
                    }
                }
            }
            return is ?  new RegExp('^(' + is + ')$', 'i').test(type) : type;
        }
    }
})();