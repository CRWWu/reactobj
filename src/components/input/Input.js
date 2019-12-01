
import React from "react"
import "./Input.css"
import propsTypes from "prop-types"
class Input extends React.Component{
    render(){
        let {type,label,value,onChange,name}=this.props
        return (
            <div className="lifirst">
                <input type={type} name={name} value={value}onChange={onChange}/>
                <span>{label}</span>
            </div>
        )
    }
};
Input.defaultValue={
    type:"text",
    label:"",
    value:"",
    defaultValue:"",
    name:"",
    onChange:()=>{}
};
Input.propsTypes={
    type:propsTypes.string,
    label:propsTypes.string ,
    name:propsTypes.string ,
    value:propsTypes.string ,
    defaultValue:propsTypes.string ,
    onChange:propsTypes.func,
};
export default Input;