import React, { Component } from 'react'
import styles from './styles/sermons.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import PopularSermons from './popularSermons'
import Series from './series'
import RecentSermons from './recentSermons'
import  {Link} from 'react-router-dom'
// import Live from './liveStreams'

export default class sermons extends Component {
    render() {
        return (
            <div>
                 <div>

{/* <!-- 🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌 CODEUIANDY🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌 --> */}

  {/* <!-- 👦👦👦 Header Tabs👦👦👩👲 --> */}
 

  {/* <!-- 🤚🤚🤚🤚🤚🤚 TAB SESCTION END🤚🤚🤚🤚🤚🤚🤚🤚 --> */}


  {/* <!-- 👨‍👩‍👦‍👦👨‍👩‍👦‍👦👨‍👩‍👦‍👦👨‍👩‍👦 lattest-sermon SECTION👨‍👩‍👦👨‍👩‍👦👩‍👩‍👦👩‍👩‍👧‍👦 --> */}
 <Link style={{color:"white",textDecoration:"none"}} to="/SelectedSermon">
  <div class={styles.lattestsermon}>
      <h1>  Ghosted</h1>
      <h2>Latest Sermon</h2>
  </div>
</Link>
</div>


<PopularSermons/>
<Series/>
<RecentSermons/>

            </div>
        )
    }
}
