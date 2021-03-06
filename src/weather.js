const weather = () => {
  const formContainer = document.createElement('div');
  formContainer.classList.add('form_container');
  const formP = document.createElement('p');
  formP.classList.add('form_p');
  formP.innerHTML = 'Enter Your City Below';
  const formTag = document.createElement('FORM');
  formTag.classList.add('form_');
  formTag.setAttribute('id', 'formTag');
  const formInput = document.createElement('INPUT');
  formInput.setAttribute('type', 'text');
  formInput.setAttribute('placeholder', "pls input the city's name");
  formInput.id = 'city';
  const select = document.createElement('select');
  select.id = 'unit';
  const cel = document.createElement('option');
  const far = document.createElement('option');
  cel.setAttribute('value', 'metric');
  cel.innerHTML = 'Celsius';
  far.setAttribute('value', 'imperial');
  far.innerHTML = 'Fahrenheit';
  select.append(cel, far);

  const submit = document.createElement('button');
  submit.classList.add('submit_button');
  submit.innerHTML = 'Check Weather';
  const result = document.createElement('p');
  result.id = 'weather_result';

  formContainer.append(formP, formTag, formInput, select, submit, result);
  return formContainer;
};
export default weather;