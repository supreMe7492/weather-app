import clearDay from '../icons/clear-day.png';
import cloudy from '../icons/cloudy.png';
import clearNight from '../icons/clear-night.png';

const iconMap = {
  'clear-day': clearDay,
  cloudy: cloudy,
  'clear-night': clearNight,
};
let location = document.querySelector('.location');

function render(data) {
  location.innerHTML = ``;
  let locationIcon = document.createElement('i');
  locationIcon.classList.add('bi', 'bi-geo-alt', 'ml-2');
  location.append(locationIcon);

  let locationSpan = document.createElement('span');
  locationSpan.textContent = `${data.resolvedAddress}`;
  location.append(locationSpan);

  let icon = document.querySelector('.logo');
  icon.src = iconMap[data.currentConditions.icon];

  let tempCelsius = `${Math.floor((data.currentConditions.temp - 32) * (5 / 9))}°C`;
  let feelTempCelsius = `${Math.floor((data.currentConditions.feelslike - 32) * (5 / 9))}°C`;
  let tempFahrenheit = `${data.currentConditions.temp}°F`;
  let feelTempFarenheit = `${data.currentConditions.feelslike}°F`;
  let isCelsius = true;
  const unit = document.querySelector('.unit');
  const temp = document.querySelector('.temp');
  temp.textContent = tempCelsius;
  const feelsLike = document.querySelector('.feelsLike');
  feelsLike.textContent = `Feels like ${feelTempCelsius}`;

  unit.addEventListener('click', () => {
    if (isCelsius) {
      temp.textContent = tempFahrenheit;
      feelsLike.textContent = `Feels like ${feelTempFarenheit}`;
      isCelsius = false;
    } else {
      temp.textContent = tempCelsius;
      feelsLike.textContent = `Feels like ${feelTempCelsius}`;
      isCelsius = true;
    }
  });

  const conditions = document.querySelector('.conditions');
  conditions.textContent = `${data.currentConditions.conditions}`;

  const description = document.querySelector('.description');
  description.textContent = `${data.description}`;

  const wind = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');
  const visibility = document.querySelector('.visibility');
  const pressure = document.querySelector('.pressure');

  wind.textContent = `${data.currentConditions.windspeed}mph`;
  humidity.textContent = `${data.currentConditions.humidity}%`;
  visibility.textContent = `${data.currentConditions.visibility}mi.`;
  pressure.textContent = `${data.currentConditions.pressure}mb`;
}

export { render };
