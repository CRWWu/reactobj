import React from "react"
import style from '../assets/css/User.module.css';
export default class User extends React.Component{
  
    render(){
      let {data}= this.props;
        return <div className={style.content}>
        <div className={style.header}>
          <h2><img src={data.icon} alt=""/></h2>
          <div className={style["user-box"]}>
          <a href="#">{data.nikename}}</a>
            <a href="#">注册</a>
          </div>
          <ul className={style.clear}>
            <li>
             <span>{data.follow}</span>
              <p>关注</p>
            </li>
            <li>
            <span>{data.fans}</span>
              <p className={style.end}>粉丝</p>
            </li>
          </ul>
        </div>
        <div className={style.docList}>
          <ul>
            <li className={style["gk-text"]}>
              <i></i>
              <p>公开博文</p>
              <b></b>
              <span>0</span>
            </li>
            <li className={style["mm-text"]}>
              <i></i>
              <p>秘密博文</p>
              <b></b>
              <span>0</span>
            </li>
            <li className={style["cg-text"]}>
              <i></i>
              <p>草稿箱</p>
              <b></b>
              <span>0</span>
            </li>
            <li className={style["cg-text"]}>
              <i></i>
              <p>收藏夹</p>
              <b></b>
              <span>0</span>
            </li>
            <li className={style["my_cz"]}>
              <i></i>
              <p>收藏夹</p>
            </li>
          </ul>
        </div>
      </div>
    }
}