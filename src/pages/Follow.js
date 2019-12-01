import React from "react"
import axios from "axios"
import "../assets/css/Follow.css"
import Cell from "../components/cell/Cell"
export default class Follow extends React.Component{
  state={
      list:[]
    // follow中的数组用来存储请求回来的数据
  };
 async componentDidMount(){
      let res =await axios({
          url:"/mock/follow",
        //   method:"post",
          params:{
              _page:1,
              _limit:8
          }
      });
      this.setState({
          list:res.data.data
      })
  }
    render(){
        return (<div className="Follow">
                {this.state.list.map(item=>(
                    <Cell key={item.id} item={item} dataName="follow"/>
                ))}
        </div>)
    }
}