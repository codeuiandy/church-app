import React, { Component } from 'react'
import styles from './styles/sermons.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import serm from '../images/serm.png'

export default class sermons extends Component {
    render() {
        return (
            <div>
                 <div>

{/* <!-- 🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌 CODEUIANDY🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌 --> */}

  {/* <!-- 👦👦👦 Header Tabs👦👦👩👲 --> */}
  <div className={styles.tabs}>
    <div className={styles.tab1}>SERMONS</div>
    <div className={styles.tab2}>LIVE</div>
  </div>

  {/* <!-- 🤚🤚🤚🤚🤚🤚 TAB SESCTION END🤚🤚🤚🤚🤚🤚🤚🤚 --> */}


  {/* <!-- 👨‍👩‍👦‍👦👨‍👩‍👦‍👦👨‍👩‍👦‍👦👨‍👩‍👦 lattest-sermon SECTION👨‍👩‍👦👨‍👩‍👦👩‍👩‍👦👩‍👩‍👧‍👦 --> */}
 <a style={{textDecoration: "none", cursor: "pointer"}} >
  <div class={styles.lattestsermon}>
      <h1>  Ghosted</h1>
      <h2>Latest Sermon</h2>
  </div>
</a>
</div>


<h1 className={styles.poplarSermonHeader}>Popular Sermons</h1>
<OwlCarousel
    className="owl-theme"
   
    // center
    items="2"
    margin={200}
    responsiveClass="true"
    loop
  
   
  
>
  

    <div className={styles.PopularSermons}>
  
        <img className={styles.postimg} src={serm} alt="site popular post slide"/>
        <p className={styles.posttitl}>The Battle Is Over</p>
        <p className={styles.postauto}>Pastor Tb Corona</p>

      </div>

      <div className={styles.PopularSermons}>
        <img className={styles.postimg} src={serm} alt="site popular post slide"/>
        <p className={styles.posttitl}>The Battle Is Over</p>
        <p className={styles.postauto}>Pastor Tb Corona</p>

      </div>

      <div className={styles.PopularSermons}>
        <img className={styles.postimg} src={serm} alt="site popular post slide"/>
        <p className={styles.posttitl}>The Battle Is Over</p>
        <p className={styles.postauto}>Pastor Tb Corona</p>

      </div>


      <div className={styles.PopularSermons}>
        <img className={styles.postimg} src={serm} alt="site popular post slide"/>
        <p className={styles.posttitl}>The Battle Is Over</p>
        <p className={styles.postauto}>Pastor Tb Corona</p>

      </div>
    
</OwlCarousel>
            </div>
        )
    }
}
