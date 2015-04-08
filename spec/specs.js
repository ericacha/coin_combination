 describe('coinCombine', function() {
     it("tells the user what coins are needed for an amount less than five", function() {
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
    //  it("tells the user what coins are needed for six cents", function() {
    //      expect(coinCombine(6)).to.equal("You need 1 nickel and 1 penny");
    //  });
     it("tells the use what coins are needs for fifty cents", function() {
         expect(coinCombine(50)).to.equal("You need 2 quarters");
     });
 });
