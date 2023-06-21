
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 50000,
    years: 10,
    rate: 9
  }
  expect(calculateMonthlyPayment(values)).toEqual('633.38')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 20000,
    years: 5,
    rate: 7
  }
  expect(calculateMonthlyPayment(values)).toEqual('396.02')
});

/// etc
