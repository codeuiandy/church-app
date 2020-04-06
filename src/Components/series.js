import React from 'react'
import styles from './styles/sermons.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import serm from '../images/serm.png'

export default function popularSermons() {
    return (
        <div>
            <h1 className={styles.series}>  Popular Series</h1>
<OwlCarousel
dots={false}
    className="owl-theme"
    items="2"
    margin={200}
    responsiveClass={true}
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
