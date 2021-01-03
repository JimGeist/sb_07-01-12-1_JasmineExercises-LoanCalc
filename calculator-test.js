
it("should calculate the monthly rate correctly", function () {
  expect(calculateMonthlyPayment({ "amount": 100000, "years": 30, "rate": 8 })).toEqual("733.76");
  expect(calculateMonthlyPayment({ "amount": 20000, "years": 5, "rate": 7.5 })).toEqual("400.76");
  expect(calculateMonthlyPayment({ "amount": 300000, "years": 15, "rate": 2.654 })).toEqual("2022.19");
});


it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment({ "amount": 100000, "years": 30, "rate": 8 })).toBeCloseTo("733.76", 2);
  expect(calculateMonthlyPayment({ "amount": 20000, "years": 5, "rate": 7.5 })).toBeCloseTo("400.76", 2);
  expect(calculateMonthlyPayment({ "amount": 300000, "years": 15, "rate": 2.654 })).toBeCloseTo("2022.19", 2);
});

it("should return a string", function () {
  expect(calculateMonthlyPayment({ "amount": 100000, "years": 30, "rate": 8 })).toBeInstanceOf(String);
  expect(calculateMonthlyPayment({ "amount": 0, "years": 0, "rate": 0 })).toBeInstanceOf(String);
});

it("should return 'NaN' in the string", function () {
  expect(calculateMonthlyPayment({ "amount": 0, "years": 0, "rate": 0 })).toEqual("NaN");
});

it("should show an error / red text (class error)", function () {

  updateMonthly("NaN");
  var domMonthlyPayment = document.getElementById("monthly-payment");
  expect(domMonthlyPayment).toHaveClass("error");

});


it("should show result without error color (not have class error)", function () {

  updateMonthly("500.00");
  var domMonthlyPayment = document.getElementById("monthly-payment");
  expect(domMonthlyPayment).not.toHaveClass("error");

});


// .toHaveClass("error")
/// etc
