import "./styles.css";
import header from './header';
import weather from './weather';

const app = () => {
    const content = document.getElementById('container');
    content.append(header(), weather());
  
   
    
  };
  
  
  app();