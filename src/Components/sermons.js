import React, { Component } from 'react'
import styles from './styles/sermons.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import PopularSermons from './popularSermons'
import Series from './series'
import RecentSermons from './recentSermons'
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
 <a style={{textDecoration: "none", cursor: "pointer"}} >
  <div class={styles.lattestsermon}>
      <h1>  Ghosted</h1>
      <h2>Latest Sermon</h2>
  </div>
</a>
</div>


<PopularSermons/>
<Series/>
<RecentSermons/>

            </div>
        )
    }
}
