import React, { Component } from 'react'
import styles from './styles/login.css';
import arrow from '../images/backarrow-white.png'
export default class Login extends Component {
    render() {
        return (
            <div>
            <div className={styles.form}>
              <form >
                  <div style={{marginTop:'25px',marginBottom:'25px'}}>
                      <span onClick={()=>{
                          window.history.back()
                      }} className={styles.back} style={{fontWeight:'800',color:'white',fontSize:'20px'}}>Back</span>
                  </div>
                  <h1>LOGIN</h1>

                  <div className={styles.email}>
                      <label>EMAIL</label>
                      <input type="email"/>

                  </div>


                  <div className={styles.password}>
                      <label>PASSWORD</label>
                      <input type="password"/>

                     

                  </div>

                  <div className={styles.button}>
                          <button>LOGIN</button>
                      </div>

                      <div className={styles.lostDetails}>
                          <span className={styles.span1}>Can’t Login?</span><span className={styles.span2}> Forget Password</span>
                      </div>
                      
              </form>
              
            </div>
   
            <div className={styles.register}>
            <span className={styles.span1}>Don’t have an account? </span><span className={styles.span2}> Register</span>
        </div>
        </div>
        )
    }
}
