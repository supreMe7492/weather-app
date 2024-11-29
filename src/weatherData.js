async function getWeather(location) {
  const load = document.querySelector('.loader');
  load.style.display = 'block';
  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=ERHU3XNW9C3TQMH5WE2HQPJ3G`;
    const fetchedData = await fetch(url, { mode: 'cors' });
    const response = await fetchedData.json();
    return response;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  } finally {
    load.style.display = 'none';
  }
}

export { getWeather };
