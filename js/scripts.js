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

        if(units === 0 ) {
            var returned_amount = amount / 25;
        }
        return "You need " + returned_amount + " quarters";
    } else if (amount < 10) { //amount = 6
        var pennies = amount % 5; // remainder 1

        if(pennies !== 0) {
            var cents_remaining  = amount - pennies;

            if(cents_remaining % 5 === 0) {
                var nickels = cents_remaining / 5;
            }
        }
        return "You need " + nickels + " nickel" + " and " + pennies + " pennies";
    }
};
