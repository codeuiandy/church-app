import React, { Component } from 'react'
import './AppContents.css';
import Sermons from './Components/sermons'
import  {Link} from 'react-router-dom'

export default class AppData extends Component {
    render() {
        return (
          
      <div className="app-container">
<div className="navbar">
    <ul>
        <li><i style={{fontSize: '24px'}} className="fas fa-bars"></i></li>
      <li><h1>MOBILE CHURCH</h1></li>
        <li><i style={{fontSize: '24px',paddingRight:'20px'}} className="fas fa-cog"></i></li>
    </ul>


  
</div>
{/* <!-- 🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌 CODEUIANDY🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌 --> */}

  {/* <!-- grid section are you here to copy code or learn🤞🤞😂 --> */}

  <div class="grid-container">
    <div class="homepage-grid-child1">
                           <h1>Save Today</h1>
                           <h5>Proverbs 13:16 A wise man thinks ahead; </h5>
                           <p>a fool doesn’t, and even brags about it!</p>
    </div>
    <a>
    <div className="homepage-grid-child2">
        <h1><Link to="/sermons" >Sermons</Link></h1>
    </div>

    </a>
    <div className="homepage-grid-child3">
        <h1>Give</h1>
    </div>
    <div className="homepage-grid-child4">
        <h1>Events</h1>
    </div>
    <div className="homepage-grid-child5">
        <h1> Blog</h1>
    </div>
    <div className="homepage-grid-child6">
        <h1>Prayer<br/> Request</h1>
    </div>
</div>
</div>

           
        )
    }
}
