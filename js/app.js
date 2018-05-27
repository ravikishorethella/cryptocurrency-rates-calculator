// instantiating the classes
const cryptoAPI = new CryptoAPI();
const ui = new UI();

// variables
const form = document.getElementById("form");

// event listeners
form.addEventListener("submit", e => {
  e.preventDefault();

  //   reading the values from the form
  const currencySelect = document.getElementById("currency").value;
  const cryptoCurrencySelect = document.getElementById("cryptocurrency").value;

  //   validating the form
  if (currencySelect === "" || cryptoCurrencySelect === "") {
    // displaying an error
  } else {
    // correct info
  }
});
