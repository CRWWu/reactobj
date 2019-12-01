import React from "react"
import axios from "axios"
import "../assets/css/Login.css"
import {Link} from "react-router-dom"
import Input from "../components/input/Input"
import Button from "../components/button/Button"
export default class Login extends React.Component{
  state={
      username:"",
      password:"",
       mess:""
  }
  changeipt=(ev)=>{
    this.setState({
        [ev.target.name]:ev.target.value
      })
  };
  login=()=>{
   axios({
       url:"/mock/login",
       params:{
           username:this.state.username,
           password:this.state.password
       }
   }).then(
       res=>{
           if(res.data.err===1){
               this.setState({mess:res.data.msg})
           }else{
               alert("登录成功")
               this.props.history.push("/user")
           }
       }
   )
  };
    render(){
        return <div className="Login">
            <div className="content">
            <p className="fhbtn"><a onClick={()=>{this.props.history.go(-1)}}></a></p>
            <h1 id="h1"></h1>
            <div className="login-box">
                <p className="lsolid"></p>
                <div className="login">
                <Link to="/login">登录</Link>
                <span></span>
                <Link to="/reg">注册</Link>
                </div>
                <p className="rsolid"></p>
            </div>
            <ul>
               <Input type="text"
                name="username" 
                label="账号"
                value={this.state.username}
                onChange={this.changeipt}/>
               <Input
               type="password"
               name="password"
               label="密码"
               value={this.state.password}
               onChange={this.changeipt}/>
               <li>{this.state.mess}</li>
               
            </ul>
            <div className="footbox">
               <Button value="登录" clickHandle={this.login}/>
                <a href="#" className="tishi">忘记密码？</a>
            </div>
            </div>
        </div>
    }
}