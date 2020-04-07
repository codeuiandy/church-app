import React, { Component } from 'react'
import Styles from './AppContents.css';
import Tabs from './Components/tabpage'
import  {Link} from 'react-router-dom'

export default class AppData extends Component {
    render() {
        return (
          
      <div className={Styles.appcontainer}>
<div className={Styles.navbar}>
    <ul>
        <li><i style={{fontSize: '24px'}} className="fas fa-bars"></i></li>
      <li><h1>MOBILE CHURCH</h1></li>
        <li><i style={{fontSize: '24px',paddingRight:'20px'}} className="fas fa-cog"></i></li>
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
    <a>
    <div className={Styles.homepagegridchild2}>
        <h1><Link style={{color:'white',textDecoration:'none'}} to="/Tabs" >Sermons</Link></h1>
    </div>

    </a>
    <div className={Styles.homepagegridchild3}>
        <h1><Link style={{color:'white',textDecoration:'none'}} to="/Give" >Give</Link></h1>
    </div>
    <div className={Styles.homepagegridchild4}>
        <h1>Events</h1>
    </div>
    <div className={Styles.homepagegridchild5}>
        <h1> Blog</h1>
    </div>
    <div className={Styles.homepagegridchild6}>
        <h1>Prayer<br/> Request</h1>
    </div>
</div>
</div>

           
        )
    }
}
