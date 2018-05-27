class CryptoAPI {
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
