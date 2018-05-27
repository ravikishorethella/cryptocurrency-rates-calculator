class CryptoAPI {
  // query the rest api
  async queryAPI(currency, cryptocurrency) {
    // Query the URL
    const url = await fetch(
      `https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`
    );

    // Return as json
    const result = await url.json();

    // Return the object
    return {
      result
    };
  }

  // getting the crypto currencies list
  async getCryptoCurrenciesList() {
    const url = await fetch("https://api.coinmarketcap.com/v1/ticker/");

    // returning this as a json data
    const cryptoCurrencies = await url.json();

    // return the object

    return {
      cryptoCurrencies
    };
  }
}
