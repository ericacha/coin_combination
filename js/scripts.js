
var coinCombine = function(amount) {

  var quarters = Math.floor(amount/25);
  amount = amount - (quarters * 25);
  var dimes = Math.floor(amount/10);
  amount = amount - (dimes * 10);
  var nickels = Math.floor(amount/5);
  amount = amount - (nickels * 5);
  var pennies = Math.floor(amount/1);
  amount = amount - (pennies * 1);

  return "You need " + quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels," + " and " + pennies + " pennies";


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
