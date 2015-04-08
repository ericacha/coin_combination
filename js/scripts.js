//var coinCombine = function(amount){

var coinCombine = function(amount) {
    if(amount <= 4) {
        return "You need " + amount + " pennies";
    } else if (amount === 5) {
        return "You need a nickel";
    } else if (amount === 10) {
        return "You need a dime";
    } else if (amount === 25) {
        return "You need a quarter";
    } else if(amount >=25) {
            var units = amount % 25;

            if(units === 0) {
                var returned_amount = amount / 25;
            }
        }
        return "You need " + returned_amount + " quarters";
};

// penny: 1
// nickel: 5
// dime: 10
// quarter: 25
