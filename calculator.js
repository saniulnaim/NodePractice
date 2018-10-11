function squareFunction(number){
    return number * number;
}

function addFunction(f,s){
    return f+s;
}

function calculatorss(param){

}

module.exports = {
    //square,
   // add, 
    msg:function(param){
        return param + ' at ' + new Date();
    },
    calculatorObj:{
        add:addFunction,
        square: squareFunction
    }
};