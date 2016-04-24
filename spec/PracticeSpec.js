
describe('Practice your logical thinking and "Algorithm of an Algorithm" here.', function() {

  describe('Kaprekars Constant', function() {
    var practice; 

    beforeEach(function() {
      practice = new Kaprekars();
    });

    it('should work when a single digit number is passed in', function() {
      expect(practice.constant(9)).toEqual(4);
    });

    it('should work when a two digit number is passed in', function() {
      expect(practice.constant(21)).toEqual(3);
    });

    it('should work when a three digit number is passed in', function() {
      expect(practice.constant(142)).toEqual(7);
    });

    it('should work when a four digit number is passed in', function() {
      expect(practice.constant(2705)).toEqual(6);
    });

    it('should work when input number begins with zeroes', function() {
      expect(practice.constant(0125)).toEqual(7);
      expect(practice.constant(0052)).toEqual(2);
      expect(practice.constant(0005)).toEqual(6);
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

});

