import React, { Component } from 'react'
import styles from './styles/account.css';
import jesusIcon from '../images/JesusIcon.png'
import {Link} from 'react-router-dom'

export default class account extends Component {
    render() {
        return (
            <div className={styles.container}>
                <img src={jesusIcon}/>
                
                <Link to="/CreateAccount">
                <button>REGISTER</button>
                </Link>
                <Link to="/Login">
                <button>LOGIN</button>
                </Link>
                
            </div>
        )
    }
}
