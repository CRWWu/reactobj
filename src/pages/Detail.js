import React from "react"
import "../assets/css/Detail.css"
import xing from '../assets/img/xing.png'
import fx from '../assets/img/fx.png'
import querystring from "query-string"
import axios from "axios"
export default class Detail extends React.Component{
      state={
        detail:{}
      };
      goback=()=>{
        this.props.history.go(-1);
      }
      componentDidMount(){
        let id=this.props.match.params.id;
        let dataname=querystring.parse(this.props.location.search).dataName
        axios({
          url:`/mock/${dataname}/${id}`
        }).then(
          res=>this.setState({detail:res.data.data})
        )
      }
    render(){
      let {detail}=this.state;
      let  el=null;
      if(detail.detail){
       el=(<div className="detail">
        <div className="nav">
    <ul>
      <li className="l-btn"
       onClick={this.goback}
      >       
      </li>
    </ul>
  </div>
  <div className="content">
    <div className="header clear"><h2><img src={detail.detail.auth_icon} alt=""/></h2><p>作者名字</p></div>
    <div className="cont">
      <h3>{detail.title}</h3>
      <div className="time"><p>{detail.title} 20:35:58 <span><img src={require('../assets/img/zan.png')}/></span></p></div>
      <div className="text-box"
      dangerouslySetInnerHTML={{__html: detail.detail.content}}
      >
      </div>
    </div>
  </div>
  <div className="foot-btn">
    <ul>
      <li className="say"><a href="#">
        <i></i><span>0</span>
      </a></li>
      <li className="zan"><a href="#">
        <i></i><span>0</span>
      </a></li>
      <li className="xing"><a href="#">
        <i><img src={xing} alt=""/></i>
      </a></li>
      <li className="fx"><a href="#">
        <i><img src={fx} alt=""/></i>
      </a></li>
    </ul>
  </div>
  
    </div>)
      }else{
        el=<div>股价平</div>
      }
        return el;
    }
}