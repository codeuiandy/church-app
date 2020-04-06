import React from 'react'
import styles from './styles/liveStream.css';
import liveVideo from '../images/livevideo.png'
export default function liveStreams() {
    return (
        <div>
            <div className={styles.watchlive}>
    <h1>Watch Live</h1>

  </div>
             <div className={styles.videocontainer}>
    <img src={liveVideo} alt=""/>
  </div>
  <div className={styles.upcomingstream} >
  <h1>Upcoming Broadcasts</h1>
        

        <div className={styles.upcomingstreamlivestreams} >
          <div className={styles.livestreamdate} >
            <div className={styles.d} >6</div>
            <div className={styles.m} >feb</div>
          </div>
          <div className={styles.livestreamdateauth} >
            <div className={styles.fulldate} >Thursday at 1:00AM</div>
            <div className={styles.autho} >Elevation Midweek</div>
          </div>
          <div className={styles.livestreamicon} ><i style={{fontSize:
           '21px',color: 'red',cursor: 'pointer'}} class="fas fa-plus-circle"></i></div>
        </div>
      </div>


        <div className={styles.upcomingstream} >
            
        

          <div className={styles.upcomingstreamlivestreams} >
            <div className={styles.livestreamdate} >
              <div className={styles.d} >6</div>
              <div className={styles.m} >feb</div>
            </div>
            <div className={styles.livestreamdateauth} >
              <div className={styles.fulldate} >Thursday at 1:00AM</div>
              <div className={styles.autho} >Elevation Midweek</div>
            </div>
            <div className={styles.livestreamicon} ><i style={{fontSize:
             '21px',color: 'red',cursor: 'pointer'}} class="fas fa-plus-circle"></i></div>
          </div>
        </div>


        <div className={styles.upcomingstream} >
        

          <div className={styles.upcomingstreamlivestreams} >
            <div className={styles.livestreamdate} >
              <div className={styles.d} >6</div>
              <div className={styles.m} >feb</div>
            </div>
            <div className={styles.livestreamdateauth} >
              <div className={styles.fulldate} >Thursday at 1:00AM</div>
              <div className={styles.autho} >Elevation Midweek</div>
            </div>
            <div className={styles.livestreamicon} ><i style={{fontSize:
             '21px',color: 'red',cursor: 'pointer'}} class="fas fa-plus-circle"></i></div>
          </div>
        </div>

        <div className={styles.upcomingstream} >
        

        <div className={styles.upcomingstreamlivestreams} >
          <div className={styles.livestreamdate} >
            <div className={styles.d} >6</div>
            <div className={styles.m} >feb</div>
          </div>
          <div className={styles.livestreamdateauth} >
            <div className={styles.fulldate} >Thursday at 1:00AM</div>
            <div className={styles.autho} >Elevation Midweek</div>
          </div>
          <div className={styles.livestreamicon} ><i style={{fontSize:
           '21px',color: 'red',cursor: 'pointer'}} class="fas fa-plus-circle"></i></div>
        </div>
      </div>

      <div className={styles.upcomingstream} >
        

        <div className={styles.upcomingstreamlivestreams} >
          <div className={styles.livestreamdate} >
            <div className={styles.d} >6</div>
            <div className={styles.m} >feb</div>
          </div>
          <div className={styles.livestreamdateauth} >
            <div className={styles.fulldate} >Thursday at 1:00AM</div>
            <div className={styles.autho} >Elevation Midweek</div>
          </div>
          <div className={styles.livestreamicon} ><i style={{fontSize:
           '21px',color: 'red',cursor: 'pointer'}} class="fas fa-plus-circle"></i></div>
        </div>
      </div>
        </div>
    )
}
