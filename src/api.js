const API_KEY =
  "27e0b4ea632ec5912ec5902491a1c30f21df3e642da1c82bae4d773a7969ce8a";

export function loadTickers(tickers) {
  return fetch(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${tickers.join(
      ","
    )}&tsyms=USD&api_key=${API_KEY}`
  )
    .then((r) => r.json())

    .then((rawData) => {
      //   /*eslint-disable*/
      //   debugger;
      return Object.fromEntries(
        Object.entries(rawData).map(([key, value]) => [key, value.USD])
      );
    });
}
// Object.entries для объекта {a: 1, b: 2} вернет [["a", 1], ["b", 2]], след шаг [["a", 1], ["b", $]]
