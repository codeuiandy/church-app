import React, { Component } from 'react'
import BackNav from './backNavbar'
import styles from './styles/prayerRequest.css';
import {Link} from 'react-router-dom'



export default class testimony extends Component {
    render() {
        return (
            <div className={styles.backgrounImgTestimony
            }>
                 <BackNav color='blue' PageName='TESTIMONY'/>

                <div className={styles.headText}>
                    <article>
                    Matthew 24:14, “And this gospel of the kingdom will be preached in the whole world as a testimony to all nations, and then the end will come.</article>
                </div>

                <div className={styles.inputs}>
                    <form>
                        <label>FULL NAME</label>
                        <div className={styles.wrap}>
                        <input type='text' placeholder="FULL NAME"/>
</div>

                        <label>TESTIMONY SUBJECT</label>
                        <div className={styles.wrap}>
                        <input type='text' placeholder="FULL NAME"/>
</div>
                        <label>SHARE TESTIMONY</label>
                        <div className={styles.wrap}>
                        <input id={styles.textarea} type='text' placeholder="FULL NAME"/>

</div>     
<div className={styles.submitbtn}>
<button>Share Testimony</button>
</div>


 </form>

               </div>


              
               <Link style={{textDecoration:'none',color:'white'}} to="/Prayer"><h1 style={{textAlign:'center', color:'white',fontSize:'17px',paddingBottom: '15px',
    marginBottom:' 0',cursor:'pointer'}}>SUBMIT YOUR PRAYER REQUEST</h1> </Link>
            </div>
        )
    }
}
