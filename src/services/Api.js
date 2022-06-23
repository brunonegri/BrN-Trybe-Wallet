const url = 'https://economia.awesomeapi.com.br/json/all';

const fetchApi = async () => {
  const resolve = await fetch(url);
  const data = await resolve.json();
  return data;
};

export default fetchApi;
