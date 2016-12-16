/**
 * Created by mattpowell on 12/16/16.
 */

var MathUtils = (function(){
    var vm = this;
    
    vm.add = add;
    
    return vm;
    
    function add(a,b){
        return a+b;
    }
}());