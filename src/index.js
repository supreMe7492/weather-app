import './styles.css';
import { getWeather } from './weatherData';
import { render } from './render';
//getWeather().then((data) => {
//console.log(data);
//});
let search = document.querySelector('.search');
search.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter' && search.value.trim() !== '') {
    const location = search.value;
    search.value = ``;
    const response = await getWeather(location);
    render(response);
  }
});
async function x() {
  const a = await getWeather('Itahari');
  render(a);
  console.log(a);
}
x();
console.log('is this running?');
