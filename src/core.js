/**
 * Created by Administrator on 2017/4/20 0020.
 */
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
     * 对象扩展
     */
    static extend(){

    }
}
export { XXX }