const url = 'https://economia.awesomeapi.com.br/json/all';

const fetchApi = async () => {
  const resolve = await fetch(url);
  const data = await resolve.json();
  // console.log(Object.keys(data));
  const filtredCurrencies = Object.keys(data).filter((moeda) => moeda !== 'USDT');
  console.log(filtredCurrencies);
  return filtredCurrencies;
};

export default fetchApi;
