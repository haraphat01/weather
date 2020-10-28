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
          const colors = ['blue', 'red', 'yellow', 'pink'];
          for (let i = 0; i <= colors.length; i = +1) {
            report.style.backgroundColor = colors[i];
          }
          report.textContent = `The weather in ${response.name}  is ${response.weather[0].main} with ${response.main.temp} °`;
        })
        .catch((error) => ((`${chosenCity} not found`, error)));
    }
  });

  //  const report = document.getElementById('weather_result');
};

export default app;
