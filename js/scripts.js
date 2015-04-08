//var coinCombine = function(amount){

//INPUT CAN ONLY BE UP TO 25
var coinCombine = function(amount) {
    if(amount <= 4) {
        return "You need " + amount + " pennies";
    } else if (amount === 5) {
        return "You need a nickel";
    } else if (amount === 10) {
        return "You need a dime";
    } else if (amount === 25) {
        return "You need a quarter";
    } else if (amount < 10) { //amount = 6
        var pennies = amount % 5; // remainder 1

        if(pennies !== 0) {
            var cents_remaining  = amount - pennies;

            if(cents_remaining % 5 === 0) {
                var nickels = cents_remaining / 5;
            }
        }
        return "You need " + nickels + " nickel" + " and " + pennies + " pennies";
    } else if (amount <= 14) {
        var pennies = amount % 10;

        if(pennies !== 0) {
            var cents_remaining = amount - pennies;

            if(cents_remaining % 10 === 0) {
                var dimes = cents_remaining / 10;
            }
        return "You need " + dimes + " dime" + " and " + pennies + " pennies";
        }
    } else if(amount === 15) {
        return "You need a dime and a nickel";
    } else if(amount >=25) {
        var units = amount % 25;

        if(units === 0 ) {
            var quarter = amount / 25;
            return "You need " + quarter + " quarters";
        } else {
            return "Sorry, can't calculate that..."
        }
    } else if(amount > 15) {
        var not_dimes = amount % 10;
        var pennies = not_dimes % 5;
        var nickels = (not_dimes - pennies) / 5;
        var dimes = (amount - not_dimes) / 10;

        return "You need " + dimes + " dimes, " + nickels + " nickels," + " and " + pennies + " pennies";
    }
};


$(document).ready(function() {
    $("form#coin-combination").submit(function(event) {
        var amount = parseInt($("input#amount").val());
        var result = coinCombine(amount);

    $(".amount").text(result);

    $("#result").show();
    event.preventDefault();
    });
});


// else if (units !== 0) {
//     var not_quarters = amount % 25;
//     var pennies = not_quarters % 10;
//     var nickels = pennies % 5;
//     var nickel_cents =
//     var quarter = (amount - not_quarters) / 25;
//     var quarter_cents = amount - not_quarters;
//     var dimes = (amount - quarter_cents - pennies) / 10;
// }
