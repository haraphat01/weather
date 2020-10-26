const weather = () => {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form_container');
    const formP = document.createElement('p');
    formP.innerHTML = 'Enter Your City Below';
    formTag = document.createElement('FORM')
    formTag.setAttribute("id", "formTag");
    formInput = document.createElement("INPUT");
    formInput.setAttribute("type", "text");
    formInput.setAttribute("value", "Donald");
    submit = document.createElement('button')
    submit.classList.add('submit_button')
    submit.innerHTML = "Check Weather"
    result = document.createElement('p')
    result.classList.add('weather_result') 
    formContainer.append(formP,formTag,formInput,submit,result)
    return formContainer;
  };
  export default weather;