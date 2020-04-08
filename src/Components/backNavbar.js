import React from 'react'
import style from './styles/selectedSermon.css';
import arrow from '../images/back-arrow.png'
import arrowWhite from '../images/backarrow-white.png'

export default function backNavbar(props) {
    let back=()=>{
        window.history.back()}
    return (
        <div>
            <div className={`${props.color==='blue'? style.blueBackground: style.previospagenav}`}>
    <div className={style.PreviousPage} >
        <img onClick={back}  src={`${props.color==='blue'? arrowWhite: arrow}`} alt=""/>
    </div>
    <div  className={style.sermonhead387}>{props.PageName}</div>
</div>
        </div>
    )
}
