import React, { Component } from 'react'
import styles from './styles/give.css';
import img4 from '../images/backarrow-white.png'
import img5 from '../images/share.png'
import heroimg from '../images/give-img.png'
import BackNav from './backNavbar'
import naira from '../images/naira.png'
import drop from '../images/dropdown.png'




export default class give extends Component {
    constructor(props){
        super(props)
        this.state={
            showData:true
        }
    }
    showdata=()=>{
  
   if (this.state.showData) {
   
    this.setState(
        {
        showData:false}
    )
    
   }
  else{
    this.setState(
        {
        showData:true}
    )
  }
    }
    render() {
        return (
            <div>
                <BackNav color='blue' PageName='Give'/>

               
                <div className={styles.imgheader}>
<h1>Matthew 6:21 - For where your treasure is, there your heart will be also.</h1>
</div>

<label  className={styles.label} >DONATION TYPE</label>
<div style={{display:'flex',justifyContent:'center',alignItems:'center',padding: '0',
    margin:' 0',
    height: '70px'}}>
                 <div class={styles.searchContainer}>
 
  <input className={styles.searchBox} type="search" name="search" />
  <img onClick={this.showdata} style={{width:'15px'}} id={styles.searchIcon} src={drop}/>
  </div>
 
</div>

<div className={styles.wrap}>
<div className={`${this.state.showData?styles.showFild:styles.hidedata}`}>
       <ul>
           <li>OFFERING</li>
           <li>SACRIFICIAL OFFERING</li>
           <li>PROJECT OFFERING</li>
           <li>PROPHET OFFERING</li>
           <li>TRANSPORT OFFERING</li>
           
       </ul>
</div>
   </div>

<label className={styles.label} >AMOUNT</label>
<div style={{display:'flex',justifyContent:'center',alignItems:'center',padding: '0',
    margin:' 0',
    height: '70px'}}>
<div class={styles.searchContainer}>
<img style={{width:'15px'}} id={styles.searchIcon} src={naira}/>
   <input class={styles.searchBox} type="number" />

   </div>

  
 
 
</div>
<div className={styles.paymentType}>
    <span>One Time</span>   <span>Monthly</span>
</div>

<div className={styles.paymentBtn}>
   <button>ADD DONATION</button>
</div>
</div>

         
        )
    }
}
