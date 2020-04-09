import React, { Component } from 'react'
import styles from './styles/blog.css';
import img5 from '../images/blogimg.png'
export default class blog extends Component {
    render() {
        return (
            <div>
            <div className={styles.heroImg}>
           <div className={styles.con}>
               <span className={styles.date}>TODAY</span><span className={styles.searchImg}><i class="fas fa-search"></i></span>
           </div>
           <div className={styles.line}>
               <span></span>
           </div>

           <div className={styles.blogtext}>

               <h1>Bishop Oyedepo Was At NO TIME Denied US Entry Visa – Living Faith Church</h1>

           </div>

           <div className={styles.extra}>

<span><i class="far fa-bookmark"></i></span><span><i class="fas fa-share-alt"></i></span><span>2 hours ago</span>


</div>
</div>




<div>

    <div className={styles.blogupdates}>

        <div>
        <span>
        <h1>BREAKING: After 8years Break From Music, Grace Jerry Is Back </h1>
        </span>

        <span><span><i class="far fa-bookmark"></i></span><span><i class="fas fa-share-alt"></i></span><span className={styles.dat}>2 hours ago</span>
</span>
        </div>

       
<img src={img5}/>
</div>



           </div>

           <div className={styles.lineBlack}>
               <span></span>
           </div>



           <div>

<div className={styles.blogupdates}>

    <div>
    <span>
    <h1>BREAKING: After 8years Break From Music, Grace Jerry Is Back </h1>
    </span>

    <span><span><i class="far fa-bookmark"></i></span><span><i class="fas fa-share-alt"></i></span><span className={styles.dat}>2 hours ago</span>
</span>
    </div>

   
<img src={img5}/>
</div>



       </div>

       <div className={styles.lineBlack}>
           <span></span>
       </div>




       <div>

<div className={styles.blogupdates}>

    <div>
    <span>
    <h1>BREAKING: After 8years Break From Music, Grace Jerry Is Back </h1>
    </span>

    <span><span><i class="far fa-bookmark"></i></span><span><i class="fas fa-share-alt"></i></span><span className={styles.dat}>2 hours ago</span>
</span>
    </div>

   
<img src={img5}/>
</div>



       </div>

       <div className={styles.lineBlack}>
           <span></span>
       </div>


           
           </div>
        )
    }
}
