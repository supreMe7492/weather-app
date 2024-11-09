async function getWeather(location) {
  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=ERHU3XNW9C3TQMH5WE2HQPJ3G`;
  const fetchedData = await fetch(url, { mode: 'cors' });
  const response = await fetchedData.json();
  return response;
}

export { getWeather };
