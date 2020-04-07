import React from 'react'
import styles from './styles/sermons.css';
import style from './styles/selectedSermon.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import serm from '../images/serm.png'
import arrow from '../images/back-arrow.png'
import img3 from '../images/img22.png'
import img4 from '../images/listen.png'
import img5 from '../images/share.png'
export default function selectedSermon() {
    let back=()=>{
       window.history.back()}
    return (
   
        <div>
<div className={style.previospagenav}>
    <div className={style.PreviousPage} >
        <img onClick={back}  src={arrow} alt=""/>
    </div>
    <div className={style.sermonhead387}>SERMONS</div>
</div>

<img  className={style.blogimg309} src={img3} alt="blog-img"/>

<div className={style.sermondetails}>
    <h1>Ghosted</h1>
    <h3>Pastor Opeyemi Emmanuel</h3>
    <h4>January 25, 2020</h4>

    <div>
        <h1>From the series: Kingdom Clout</h1>
    </div>
    
    <div className={style.sharecontent9}>
       

        <div className={style.fontp}>
        <i id={style.fontAwsome} class="fas fa-podcast"></i>
            <span className={style.attr6}>Listen</span>
        </div>

        <div className={style.fontp}>
        <i id={style.fontAwsome} class="fas fa-share-alt"></i>
            <span className={style.attr6}>Share</span>
        </div>
      
        <button>Subscribe</button>
    </div>


</div>








            <h1 className={style.poplarSermonHeader}>Popular Sermons</h1>
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
