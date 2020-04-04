import React from 'react';
import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import AppData from './AppData'
import  {Link} from 'react-router-dom'


function App() {
 
  return (
   
    <div className="app">
      <div className="skip">
      <span><Link className="linkTo"  to="/AppData">SKIP</Link></span>
    </div>
   <OwlCarousel
    className="owl-theme"
    items="1"
    loop
    margin={10}
  
>
  <div className="slideone">
    
    
    <h1>Happy Birthday Dear, wishing you greater and blessed years ahead</h1>
    <div class="item res">
    <img src={img1}/>
    </div>
    </div>
    <div className="slideone">
    
    
    <h1>Happy Birthday Dear, wishing you greater and blessed years ahead</h1>
    <div class="item res">
    <img src={img2}/>
    </div>
    </div>


    <div className="slideone">
    
    
    <h1>Happy Birthday Dear, wishing you greater and blessed years ahead</h1>
    <div class="item res">
    <img src={img3}/>
    </div>
    </div>

</OwlCarousel>


    </div>
   
  );
}

export default App;
