const weather = () => {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form_container');
    const formP = document.createElement('p');
    formP.classList.add('form_p')
    formP.innerHTML = 'Enter Your City Below';
    let formTag = document.createElement('FORM')
    formTag.classList.add('form_')
    formTag.setAttribute("id", "formTag");
    let formInput = document.createElement("INPUT");
    formInput.setAttribute("type", "text");
    formInput.setAttribute("placeholder", "pls input the city's name");
    let submit = document.createElement('button')
    submit.classList.add('submit_button')
    submit.innerHTML = "Check Weather"
    let result = document.createElement('p')
    result.classList.add('weather_result') 
    formContainer.append(formP,formTag,formInput,submit,result)
    return formContainer;
  };
  export default weather;