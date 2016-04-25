
describe('stock your logical thinking and "Algorithm of an Algorithm" here.', function() {

  describe('Kaprekars Constant', function() {
    var stock; 

    beforeEach(function() {
      stock = new Kaprekars();
    });

    it('should work when a single digit number is passed in', function() {
      expect(stock.constant(9)).toEqual(4);
    });

    it('should work when a two digit number is passed in', function() {
      expect(stock.constant(21)).toEqual(3);
    });

    it('should work when a three digit number is passed in', function() {
      expect(stock.constant(142)).toEqual(7);
    });

    it('should work when a four digit number is passed in', function() {
      expect(stock.constant(2705)).toEqual(6);
    });

    it('should work when input number begins with zeroes', function() {
      expect(stock.constant(0125)).toEqual(7);
      expect(stock.constant(0052)).toEqual(2);
      expect(stock.constant(0005)).toEqual(6);
    });           
  });

  describe('Blackjack Highest', function() {
    var a = ['king','queen','ace'];
    var b = ['three', 'nine', 'ace'];
    var c = ['four', 'two', 'jack'];
    var d = ['seven', 'five', 'queen', 'three', 'eight'];
    var e = ['ten', 'six', 'five'];
    var f = ['jack', 'queen', 'ten'];
    var g = ['three'];
    var h = ['ace', 'two', 'three', 'four','five', 'six'];
    var i = ['ace', 'jack'];

    var blackjack; 

    beforeEach(function() {
      blackjack = new BlackjackHighest();
    });
    
    it('should output "blackjack king" with input: ' + JSON.stringify(a), function() {
      expect(blackjack.hitMe(a)).toEqual('blackjack king');
    });

    it('should output "below nine" with input: ' + JSON.stringify(b), function() {
      expect(blackjack.hitMe(b)).toEqual('below nine');
    });

    it('should output "below jack" with input: ' + JSON.stringify(c), function() {
      expect(blackjack.hitMe(c)).toEqual('below jack');
    });

    it('should output "above queen" with input: ' + JSON.stringify(d), function() {
      expect(blackjack.hitMe(d)).toEqual('above queen');
    });

    it('should output "blackjack ten" with input: ' + JSON.stringify(e), function() {
      expect(blackjack.hitMe(e)).toEqual('blackjack ten');
    }); 

    it('should output "above queen" with input: ' + JSON.stringify(f), function() {
      expect(blackjack.hitMe(f)).toEqual('above queen');
    }); 

    it('should output "below three" with input: ' + JSON.stringify(g), function() {
      expect(blackjack.hitMe(g)).toEqual('below three');
    }); 

    it('should output "blackjack six" with input: ' + JSON.stringify(h), function() {
      expect(blackjack.hitMe(h)).toEqual('blackjack six');
    }); 

    it('should output "blackjack ace" with input: ' + JSON.stringify(i), function() {
      expect(blackjack.hitMe(i)).toEqual('blackjack ace');
    }); 
  }); 

  describe('Stock Picker', function() {
    var stock; 
    var a = [4, 3, 10, 3, 4, 20];
    var b = [20, 30, 10, 9, 8, 1];
    var c = [10, 9, 8, 6, 4, 2];
    var d = [40, 24, 25, 22, 10];
    var e = [54, 35, 40, 46, 53, 20, 1, 2, 3, 6];
    var f = [20, 19, 18, 16, 5, 4, 3, 2, 5];
    var g = [40];
    var h = [30, 50, 51];



    beforeEach(function() {
      stock = new StockPicker();
    });

    it('should return a profit of 17 if stock prices are [4, 3, 10, 3, 4, 20]', function() {
      expect(stock.highestProfit(a)).toEqual(17);
    });

    it('should return a profit of 10 if stock prices are [20, 30, 10, 9, 8, 1]', function() {
      expect(stock.highestProfit(b)).toEqual(10);
    });

    it('should return -1 when there is no profit', function() {
      expect(stock.highestProfit(c)).toEqual(-1);
    });

    it('should return a profit of 1 if stock prices are [40, 24, 25, 22, 10]', function() {
      expect(stock.highestProfit(d)).toEqual(1);
    });

    it('should return a profit of 18 if stock prices are [54, 35, 40, 46, 53, 20, 1, 2, 3, 6] ', function() {
      expect(stock.highestProfit(e)).toEqual(18);
    });

    it('should return a profit of 3 if stock prices are [20, 19, 18, 16, 5, 4, 3, 2, 5] ', function() {
      expect(stock.highestProfit(f)).toEqual(3);
    });

    it('should return -1 when there is only a single price', function() {
      expect(stock.highestProfit(g)).toEqual(-1);
    });

    it('should return 21 if stock prices are [30, 50, 51]', function() {
      expect(stock.highestProfit(h)).toEqual(21);
    });

  });

});

