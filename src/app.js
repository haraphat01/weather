const app = () => {
  const parent = document.getElementById('container');
  parent.addEventListener('click', (e) => {
    if (e.target.classList.contains('submit_button')) {
      e.preventDefault();
      const cityInput = document.getElementById('city');
      const chosenCity = cityInput.value;
      const unitSelect = document.getElementById('unit');
      const apiRequest = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=11d091024281fd0f3a53ff3d3b78c460&units=${unitSelect.value}`;
      fetch(apiRequest)
        .then((response) => response.json())
        .then((response) => {
          const report = document.getElementById('weather_result');


          report.textContent = `The weather in ${response.name}  is ${response.weather[0].main} with ${response.main.temp} °`;
          if (response.weather[0].main === 'Clouds') {
            report.style.backgroundColor = 'blue';
          } else if (response.weather[0].main === 'Clear') {
            report.style.backgroundColor = 'red';
          } else { report.style.backgroundColor = 'pink'; }
        })
        .catch((error) => ((`${chosenCity} not found`, error)));
    }
  });
};

export default app;
