import React from "react"
import {Switch,Route,Redirect,} from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Follow from "../pages/Follow"
import Column from "../pages/Column"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Reg from "../pages/Reg"
import User from "../pages/User"
import ErrorPage from "../pages/Errorpage"
import Detail from "../pages/Detail"
import Auth from "../guard/AuthUser"
import Loading from "../components/loading/Loading"
import pubsub from "pubsub-js"
 export default class App extends  React.Component{
   state={
    bNav:true,
    bFooter:true,
    bLoding:false
   };
   constructor(props){
    super();

    //订阅
    pubsub.subscribe('UPDATE_LOADING',(mess,data)=>{

      // data==true/false
      this.setState({bLoading:data});

    });

  }
   static getDerivedStateFromProps(nextProps,nextState){
    let path = nextProps.location.pathname;

    if (/home|follow|column/.test(path)){
      return {bNav:true,bFooter:true}
    }
    if (/detail|login|reg/.test(path)){
      return {bNav:false,bFooter:false}
    }
    if (/user/.test(path)){
      return {bNav:false,bFooter:true}
    }
  
   }
    render(){
        let {bNav,bFooter,bLoading} =this.state;
      return <div className="App">
         {bNav && <Header/>}
         {bLoading && <Loading/>}
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/follow" component={Follow}/>
                <Route path="/column" component={Column}/>
                <Route path="/login" component={Login}/>
                <Route path="/reg" component={Reg}/>
                <Auth path="/user" component={User}/>
                <Route path="/detail/:id" component={Detail} />
                <Route path="/home" component={Home}/>
                <Redirect exact from ="/" to="/home"/>
                <Route component={ErrorPage}/>
            </Switch>
         {bFooter && <Footer/>}
      </div>
  }
 }