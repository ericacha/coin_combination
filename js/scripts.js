//var coinCombine = function(amount){

function coinCombine(amount) {
    if(amount <= 4) {
        return "You need " + amount + " pennies";
    } else if (amount === 5) {
        return "You need a nickel";
    } else if (amount === 10) {
        return "You need a dime";
    } else if (amount === 25) {
        return "You need a quarter";
    }
};

// penny: 1
// nickel: 5
// dime: 10
// quarter: 25
