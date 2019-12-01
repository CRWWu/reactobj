import React from "react"
import "./Cell.css"
import {withRouter}  from "react-router-dom"
  class Cell extends React.Component{
    goDetail = (id,datName) => {
        this.props.history.push({pathname:'/detail/'+id,search:'dataName='+datName})
      };
    render(){
        let {item,dataName}=this.props;
        return <div className={"Cell"} 
        onClick={()=>{this.goDetail(item.id,dataName)}} >
          <h2>{item.id}.{item.title}</h2>
          <p>{item.des}</p>
        </div>
        
    }
};
export default withRouter(Cell)