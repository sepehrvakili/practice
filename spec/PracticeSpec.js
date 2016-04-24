
describe("Practice", function() {

  var practice; 

  beforeEach(function() {
    practice = new Practice();

  });

  it("should work when a single digit number is passed in", function() {
    expect(practice.kConstant(9)).toEqual(4);
  });

  it("should work when a two digit number is passed in", function() {
    expect(practice.kConstant(21)).toEqual(3);
  });

  it("should work when a three digit number is passed in", function() {
    expect(practice.kConstant(142)).toEqual(7);
  });

  it("should work when a four digit number is passed in", function() {
    expect(practice.kConstant(2705)).toEqual(6);
  });

  it("should work when input number begins with zeroes", function() {
    expect(practice.kConstant(0125)).toEqual(7);
    expect(practice.kConstant(0052)).toEqual(2);
    expect(practice.kConstant(0005)).toEqual(6);
  });

});

