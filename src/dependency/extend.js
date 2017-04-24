/**
 * Created by Administrator on 2017/4/22 0022.
 */
'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    return Object(val);
}

function assignKey(to, from, key ,filter) {
    var val = from[key];

    if (val === undefined || val === null) {
        return;
    }

    if (hasOwnProperty.call(to, key)) {
        if (to[key] === undefined || to[key] === null) {
            throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
        }
    }

    if (!hasOwnProperty.call(to, key) || !filter(val) ) {
        to[key] = val;
    } else {
        to[key] = assign(Object(to[key]), from[key]);
    }
}

function assign(to, from ,filter ) {
    if (to === from) {
        return to;
    }

    from = Object(from);

    for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
            assignKey(to, from, key ,filter);
        }
    }

    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(from);

        for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
                assignKey(to, from, symbols[i] ,filter);
            }
        }
    }

    return to;
}

export function extend(target) {
    var hasFilter = Filter.typeis("Function|Regex") ,
        Filter = hasFilter ? arguments[ arguments.length - 1 ] : null ;
    if(Filter.typeis("Regex")){
        let regex = Filter;
        Filter = (attr)=>{
            return regex.test(attr);
        }
    }

    target = toObject(target);

    for (var s = 1; s < (hasFilter ? arguments.length - 1 : arguments.length ); s++) {
         assign(target, arguments[s] ,Filter || (value=>value.typeis("Object")) );
    }

    return target;
};
