import React, { Component } from 'react'
import styles from './styles/give.css';
import img4 from '../images/backarrow-white.png'
import img5 from '../images/share.png'

export default class give extends Component {
    render() {
        return (
            <div>
                 <div class={styles.searchContainer}>
  <i id={styles.searchIcon} class="fa fa-search"></i>
  <input class={styles.searchBox} type="search" name="search" placeholder="Search..."/>
  
 
</div>

<div class={styles.searchContainer}>
   <input class={styles.searchBox} type="search" name="search" placeholder="Search..."/>
   <i id={styles.searchIcon} class="fa fa-search"></i>
 
 
</div>
</div>

         
        )
    }
}
