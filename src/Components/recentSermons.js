import React from 'react'
import recent from '../images/recents.png'
import styles from './styles/sermons.css';

export default function recentSermons() {
    return (
        <div>
          <h1 className={styles.recentsheader}>Recent Sermons</h1>
             <div className={styles.recents}>
               <img className={styles.rimg} src={recent} alt=""/>
               <div className={styles.textzs}>
                 <h1>When The Battle Chooses Your Family.</h1>
                 <h2>Pastor Opeyemi Noel</h2>
                
               </div>
             </div>

             <hr/>

             <div className={styles.recents}>
             <img className={styles.rimg} src={recent} alt=""/>
               <div className={styles.textzs}>
                <h1>When The Battle Chooses Your Family.</h1>
                <h2>Pastor Opeyemi Noel</h2>
               
              </div>
            </div>

            <hr/>

            <div className={styles.recents}>
            <img className={styles.rimg} src={recent} alt=""/>
               <div className={styles.textzs}>
                <h1>When The Battle Chooses Your Family.</h1>
                <h2>Pastor Opeyemi Noel</h2>
               
              </div>
            </div>
        </div>
    )
}
