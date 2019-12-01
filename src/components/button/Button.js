import React from "react"
import "./Button.css"
import propTypes from "prop-types"
//类型检查 props value ,按钮的值是不同的  还有点击事件，clickHandle
export default class Button extends React.Component{
   //定义默认类型和值
   static defaultProps={
       value:"按钮",
       clickHandle:()=>{}

   };
   static propTypes={
       value:propTypes.string,
       clickHandle:propTypes.func,
   }

   
    render(){
        return (
            <input type="button" value={this.props.value} 
            className="login-btn"
            onClick={this.props.clickHandle}/>
        )
    }
}