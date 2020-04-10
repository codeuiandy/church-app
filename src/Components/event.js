import React from 'react'
import style from './styles/events.css';
import bell from '../images/bell.png'
import shareE from '../images/ShareE.png'
import love from '../images/Love.png'
import img5 from '../images/blogimg.png'

export default function event() {
    return (
        <div>
         <div className={style.eventHeader}>

             <div className={style.title}>
                 <h1>EVENTS</h1>
                 <img src={bell}/>

             </div>

             <h1 className={style.date}>Coming Up...</h1>


         </div>
         <div style={{height:'0'}}>
         <div className={style.event}>
                 <div>
                 <img src={shareE}/>
                 <img src={love}/>
                 </div>
                 </div>
             </div>
             <div className={style.about}>
                 <h1>BREAKING: Believers Summit</h1>
                
                 <h3>Church Auditorium</h3>
             </div>

             <div>

<div className={style.eventupdate}>
<img src={img5}/>

    <div>
    <span>
    <h1>BREAKING: After 8years Break From Music, Grace Jerry Is Back </h1>
    </span>

    <span className={style.eventDate}>Mon, feb 24 - Fri, Feb 28. 8:30</span>
    </div>

   

</div>



       </div>

     




       <div>

<div className={style.eventupdate}>
<img src={img5}/>

    <div>
    <span>
    <h1>BREAKING: After 8years Break From Music, Grace Jerry Is Back </h1>
    
    </span>

    <span className={style.eventDate}>Mon, feb 24 - Fri, Feb 28. 8:30</span>
    </div>

   

</div>



       </div>

     
        </div>
    )
}
