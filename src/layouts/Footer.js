import React from "react"
import {NavLink} from "react-router-dom"
import style from "../assets/css/Footer.module.css"
export default class Footer extends React.Component{

    render (){
        return <div className={style["foot-btn"]} >
        <ul>
          <li className={style.home}><NavLink  to="/home"></NavLink></li>
          <li className={style.write}><NavLink  to="/login"></NavLink></li>
          <li className={style.my}><NavLink  to="/user"></NavLink></li>
        </ul>
      </div>
        
     
    }
}