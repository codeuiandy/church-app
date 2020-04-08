import React, { Component } from 'react'
import BackNav from './backNavbar'
import styles from './styles/prayerRequest.css';
import {Link} from 'react-router-dom'

export default class prayerRequest extends Component {
    render() {
        return (
            <div className={styles.backgrounImg}>
                 <BackNav color='blue' PageName='Prayer Request'/>

                <div className={styles.headText}>
                    <article>
                    Proverbs 3:5-6, “Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge Him, and He shall direct thy paths
                    </article>
                </div>

                <div className={styles.inputs}>
                    <form>
                        <label>FULL NAME</label>
                        <div className={styles.wrap}>
                        <input type='text' placeholder="FULL NAME"/>
</div>

                        <label>PRAYER SUBJECT</label>
                        <div className={styles.wrap}>
                        <input type='text' placeholder="FULL NAME"/>
</div>
                        <label>PRAYER REQUEST</label>
                        <div className={styles.wrap}>
                        <input id={styles.textarea} type='text' placeholder="FULL NAME"/>

</div>     
<div className={styles.submitbtn}>
<button>Submit</button>
</div>


 </form>

               </div>


               <Link style={{textDecoration:'none',color:'white'}} to="/Testimony"><h1 style={{textAlign:'center', color:'white',fontSize:'17px',paddingBottom: '15px',
    marginBottom:' 0',cursor:'pointer'}}>SHARE YOUR TESTIMONY >>></h1> </Link>
            </div>
        )
    }
}
