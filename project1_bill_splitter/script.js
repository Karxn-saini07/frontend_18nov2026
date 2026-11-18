document.getElementById("calcBtn").addEventListener("click", function () {
  const bill   = parseFloat(document.getElementById("bill").value);
  const tipPct = parseFloat(document.getElementById("tip").value);
  const people = parseInt(document.getElementById("people").value);

  const errorBox  = document.getElementById("error");
  const resultBox = document.getElementById("result");
  errorBox.textContent = "";
  resultBox.innerHTML  = "";

  // Validation: bill empty / <= 0, or people < 1
  if (isNaN(bill) || bill <= 0) {
    errorBox.textContent = "Please enter a bill amount greater than 0.";
    return;
  }
  if (isNaN(people) || people < 1) {
    errorBox.textContent = "Number of people must be at least 1.";
    return;
  }

  const tipAmount = bill * tipPct / 100;
  const total     = bill + tipAmount;
  const perPerson = total / people;

  resultBox.innerHTML =
    "Tip amount: Rs. " + tipAmount.toFixed(2) + "<br>" +
    "Total bill: Rs. " + total.toFixed(2) + "<br>" +
    "Each person pays: Rs. " + perPerson.toFixed(2);
});
