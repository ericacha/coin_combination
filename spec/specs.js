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
    it("tells the user what coins are needed for fifty cents", function() {
     expect(coinCombine(50)).to.equal("You need 2 quarters");
    });
    it("tells the user what coins are needed for seventy-five cents", function() {
     expect(coinCombine(75)).to.equal("You need 3 quarters");
    });

    it("tells the user what coins are needed for six cents", function() {
    expect(coinCombine(6)).to.equal("You need 1 nickel and 1 pennies");
    });

    it("tells the user what coins are needed for nine cents", function() {
    expect(coinCombine(9)).to.equal("You need 1 nickel and 4 pennies");
    });

    it("tells the user what coins are needed for fourteen cents", function() {
    expect(coinCombine(14)).to.equal("You need 1 dime and 4 pennies");
    });

    it("tells the user what coins are needed for sixteen cents", function() {
    expect(coinCombine(16)).to.equal("You need 1 dimes, 1 nickels, and 1 pennies");
    });
 });
