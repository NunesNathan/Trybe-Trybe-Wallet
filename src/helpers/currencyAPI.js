const endpoint = 'https://economia.awesomeapi.com.br/json/all';

export const fetchCurrency = async () => {
  const response = await (await fetch(endpoint)).json();
  return response;
};

export const fetchCurrencyOptions = async () => {
  const response = Object.entries(await fetchCurrency());
  const myObj = [];

  response.forEach(([a, b]) => {
    if (a !== 'USDT' && a !== 'DOGE') {
      myObj.push({ currency: a, currencyStatus: b });
    }
  });

  return myObj;
};

export const realItemValue = ({ ask }, value) => {
  const result = (ask * value);
  return result;
};
