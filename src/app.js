const app = () => {
  const apiRequest = new XMLHttpRequest();
  const submitButton = document.getElementById('submit_button');
  submitButton.addEventListener('submit', ($event) => {
    $event.preventDefault();
    const cityInput = document.getElementsByClassName('city');
    const chosenCity = cityInput.value;
    apiRequest.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid={11d091024281fd0f3a53ff3d3b78c460}`);
    apiRequest.send();
  });

  apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4) {
      const report = document.getElementsByClassName('weather_result');
      const res = JSON.parse(apiRequest.response);
      report.textContent = `The weather in${res.name}is${res.weather[0].main}`;
    }
  };

  return apiRequest;
};
export default app;