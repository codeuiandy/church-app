import React, { Component } from 'react'
import './styles/sermons.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'

export default class sermons extends Component {
    render() {
        return (
            <div>
                 <div class="app-container">

{/* <!-- 🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌 CODEUIANDY🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌 --> */}

  {/* <!-- 👦👦👦 Header Tabs👦👦👩👲 --> */}
  <div className="tabs">
    <div className="tab1">SERMONS</div>
    <div className="tab2">LIVE</div>
  </div>

  {/* <!-- 🤚🤚🤚🤚🤚🤚 TAB SESCTION END🤚🤚🤚🤚🤚🤚🤚🤚 --> */}


  {/* <!-- 👨‍👩‍👦‍👦👨‍👩‍👦‍👦👨‍👩‍👦‍👦👨‍👩‍👦 lattest-sermon SECTION👨‍👩‍👦👨‍👩‍👦👩‍👩‍👦👩‍👩‍👧‍👦 --> */}
 <a style={{textDecoration: "none", cursor: "pointer"}} href="/selected-semon.html">
  <div class="lattest-sermon">
      <h1>  Ghosted</h1>
      <h2>Latest Sermon</h2>
  </div>
</a>
</div>

<OwlCarousel
    className="owl-theme"
    // center
    items="2"
    margin={10}
    responsiveClass
    stagePadding={100}
  
>
  <div className="slideone">
    
    
    <h1>Happy Birthday Dear, wishing you greater and blessed years ahead</h1>
    <div class="item res">
    <img style={{width:"100px !important"}} src={img1}/>
    </div>
    </div>
    <div className="slideone">
    
    
    <h1>Happy Birthday Dear, wishing you greater and blessed years ahead</h1>
    <div class="item res">
    <img style={{width:"100px !important"}} src={img2}/>
    </div>
    </div>


    <div className="slideone">
    
    
    <h1>Happy Birthday Dear, wishing you greater and blessed years ahead</h1>
    <div class="item res">
    <img style={{width:"100px !important"}} src={img3}/>
    </div>
    </div>

</OwlCarousel>
            </div>
        )
    }
}
