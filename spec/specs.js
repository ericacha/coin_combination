 describe('coinCombine', function() {
     it("tells the user what coin is needed for one cent", function() {
         expect(coinCombine(1)).to.equal("You need 1 pennies");
     });
     it("tells the user what coin is needed for five cents", function() {
         expect(coinCombine(5)).to.equal("You need a nickel");
     });
     it("tells the user what coin is needed for ten cents", function() {
         expect(coinCombine(10)).to.equal("You need a dime");
     });
     it("tells the user what coin is needed for twenty-five cents", function(){
         expect(coinCombine(25)).to.equal("You need a quarter");
     });
 });
