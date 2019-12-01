import React from "react"
import axios from "axios"
import Swiper from "../components/swipe/Swiper"
import Cell from "../components/cell/Cell"
export default class Home extends React.Component{
    state={
        list:[]
    };
    constructor(props){
      super();
      axios({
          url:"/mock/home",
        //   method:"post",
          params:{
              _page:1,
              _limit:5,  
          }
      }).then(
          res=>this.setState({list:res.data.data})
      )
    };
   
    render(){
        let {list}=this.state;
        console.log(list);
        return <div className="Home">
            <Swiper/>
          
            {
          list.map(item=>(
            <Cell key={item.id} item={item} dataName="home"/>
          ))
        }
        </div>
    }
}