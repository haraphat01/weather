// const app = () => {
//   const apiRequest = new XMLHttpRequest();
//   const parent = document.getElementById('container');
//   parent.addEventListener('click', (e) => {
//     if (e.target.classList.contains('submit_button')) {
//       e.preventDefault();
//       const cityInput = document.getElementById('city');
//       const chosenCity = cityInput.value;
//       apiRequest.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=11d091024281fd0f3a53ff3d3b78c460`);
//       apiRequest.send();
//     }
//   });

//   apiRequest.onreadystatechange = () => {
//     const report = document.getElementById('weather_result');
//     if (apiRequest.readyState === 4) {
//       if (apiRequest.readyState === 404) {
//         report.textContent = 'City not found';
//         return report.textContent;
//       }

//       const response = JSON.parse(apiRequest.response);
//       report.textContent = `The weather in${response.name}is${response.weather[0].main}`;
//     }
//     return report;
//   };

//   return apiRequest;
// };

const app = () => {
  const parent = document.getElementById('container');
  parent.addEventListener('click', (e) => {
    if (e.target.classList.contains('submit_button')) {
      e.preventDefault();
      const cityInput = document.getElementById('city');
      const chosenCity = cityInput.value;
      const apiRequest = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=11d091024281fd0f3a53ff3d3b78c460`;
      fetch(apiRequest)
        .then((response) => response.json())
        .catch((error) => ((`${chosenCity} not found`, error)))
        .then((response) => {
          const report = document.getElementById('weather_result');
          report.textContent = `The weather in ${response.name}  is ${response.weather[0].main}`;
        });
    }
  });
};

export default app;
