import React, { Component } from 'react'
import Styles from './AppContents.css';
import Tabs from './Components/tabpage'
import  {Link} from 'react-router-dom'
import harm from './images/harm.png'
import x from './images/x.png'
import setting from './images/setting.png'

export default class AppData extends Component {
    constructor(props){
        super(props)
        this.state={
            showData:true,
            sidebar:'sidebar'
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
          
      <div className={Styles.appcontainer}>
<div className={Styles.navbar}>
    <ul>
        <li onClick={this.showdata}><img src={`${this.state.showData ? harm : x}`}/></li>
      <li><h1>MOBILE CHURCH</h1></li>
        <li><img  style={{marginRight:'20px'}} src={setting}/></li>
    </ul>


  
</div>
{/* <!-- 🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌 CODEUIANDY🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌 --> */}

  {/* <!-- grid section are you here to copy code or learn🤞🤞😂 --> */}

  <div class={Styles.gridcontainer}>
    <div class={Styles.homepagegridchild1}>
                           <h1>Save Today</h1>
                           <h5>Proverbs 13:16 A wise man thinks ahead; </h5>
                           <p>a fool doesn’t, and even brags about it!</p>
    </div>
  
  <Link style={{color:'white',textDecoration:'none'}} to="/Tabs">
    <div className={Styles.homepagegridchild2}>
        <h1>Sermons</h1>
    </div>
    </Link>



    <Link style={{color:'white',textDecoration:'none'}} to="/Give">
    <div className={Styles.homepagegridchild3}>
        <h1>Give</h1>
    </div>
    </Link>
    <div className={Styles.homepagegridchild4}>
        <h1>Events</h1>
    </div>
    
    <Link style={{color:'white',textDecoration:'none'}} to="/Blog"><div className={Styles.homepagegridchild5}>
        <h1>Blog</h1>
    </div></Link>
    <Link style={{color:'white',textDecoration:'none'}} to="/Prayer"><div className={Styles.homepagegridchild6}>
        <h1>Prayer<br/> Request</h1>
    </div></Link>
</div>

<div className={Styles.ani}> 
<div className={`${this.state.showData ? Styles.hidedata : Styles.sidebar}`}>
   <ul className={Styles.navdata}>
       <li>PROFILE</li>
       <li>SERMON</li>
       <li>GIVE</li>
       <li>SAVE</li>
       <li>EXPENSE TRACKER</li>
       <li>EVENTS</li>
       <li>CONNECT CARD</li>
       <li>BLOG</li>
       <li>PRAYER REQUEST </li>
   </ul>

    
    </div>
</div>
</div>

           
        )
    }
}
