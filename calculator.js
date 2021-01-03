window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {

  // prepopulate with new automobile loan values
  document.getElementById("loan-amount").value = 30000;
  document.getElementById("loan-years").value = 5;
  document.getElementById("loan-rate").value = 2.54;

}

// Get the current values from the UI
// Update the monthly payment
function update() {

  calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

  // monthlyPayment = (P x i) / (1 - ((1 + i)**-n)) 
  // Where:
  //  P = principal amount
  //  i = periodic interest rate, yearly / 12. The interest rate also
  //       is divided by 100 since it is provided as a precentage,
  //       8 not 0.08.
  //  n = total number of payments (years x 12)

  // ASSUMPTION: values were tested elsewhere to verify numerics

  // rate = (1 - ((1 + i)**-n))
  let i = values.rate / 1200;
  let compounding = 1 - ((1 + i) ** (-1 * (values.years * 12)));
  return ((Math.round(((values.amount * i) / compounding) * 100)) / 100).toFixed(2);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {

  const domMonthlyPayment = document.getElementById("monthly-payment");

  if (isNaN(monthly)) {

    domMonthlyPayment.innerText = "Please ensure Loan Amount, Term, and Rate contain only numbers and decimal points."
    domMonthlyPayment.classList.add("error");

  } else {

    domMonthlyPayment.innerText = monthly;
    if (domMonthlyPayment.classList.contains("error")) {
      domMonthlyPayment.classList.remove("error");
    }
  }
}
