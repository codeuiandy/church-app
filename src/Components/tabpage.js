import React, { Component } from 'react'
import styles from './styles/tab.css'
import Sermons from './sermons'
import LiveStream from './liveStreams'

export default class tabpage extends Component {
    constructor(props){
        super(props)
        this.state={
            showtabs:true
        }

    }
    tabswap=()=>{
this.setState({
    showtabs:true
})
    }

    tabswaptwo=()=>{
        this.setState({
            showtabs:false
        })
            }

    render() {
        return (
            <div>
                <div className={styles.tabs}>
    <div onClick={this.tabswap} className={styles.tab1}>SERMONS
    <div className={`${this.state.showtabs? styles.activetab1 : null}`}></div>
    </div>
    <div  onClick={this.tabswaptwo} className={styles.tab2}>LIVE
    <div className={`${this.state.showtabs? null : styles.activetab2}`}></div>
    </div>
  </div>

                {this.state.showtabs ? <Sermons/> : <LiveStream/>}
                
            </div>
        )
    }
}
