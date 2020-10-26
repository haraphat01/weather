const header = () => {
    const head = document.createElement('div');
    head.classList.add('header');
    const headP = document.createElement('p');
    headP.innerHTML = 'Weather App';
    head.appendChild(headP);
    return head;
  };
  export default header;