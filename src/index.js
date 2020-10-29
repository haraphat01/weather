import './styles.css';
import header from './header';
import weather from './weather';
import app from './app';

const apps = () => {
  const content = document.getElementById('container');
  content.append(header(), weather());

  app();
};


apps();