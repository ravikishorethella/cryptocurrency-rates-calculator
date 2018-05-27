class UI {
  constructor() {
    this.init();
  }
  init() {
    this.printCryptoCurrencies();
  }
  printCryptoCurrencies() {
    cryptoAPI.getCryptoCurrenciesList().then(data => {
      const cryptoCurrencies = data.cryptoCurrencies;
      //  options
      const select = document.getElementById("cryptocurrency");
      cryptoCurrencies.forEach(currency => {
        // adding the options for the cryptocurrencies
        const option = document.createElement("option");
        option.value = currency.id;
        option.appendChild(document.createTextNode(currency.name));
        select.appendChild(option);
      });
    });
  }

  //   print message
  printMessage(message, className) {
    const div = document.createElement("div");

    //   adding the classes
    div.className = className;
    div.appendChild(document.createTextNode(message));

    const messagesDiv = document.querySelector(".messages");

    messagesDiv.appendChild(div);

    setTimeout(() => {
      document.querySelector(".messages div").remove();
    }, 3000);
  }
}
