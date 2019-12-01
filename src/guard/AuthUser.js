import React from "react";
import {Route,Redirect} from "react-router-dom"
import axios from "axios"


export default class Auth extends React.Component{
     state={
         hasAuth:false,// 请求是否发出过
         err:1,//是否通过
        data:{} //预载数据
     };
     componentDidMount(){
        axios(
          `/mock/user`
          ).then(
            res=>this.setState({hasAuth:true, err:res.data.err,data:res.data.data})
          )
     }
    render(){
        console.log(this.state.err)
        console.log("this.props中的数据",this.props)
        // 拿到上面传递的组件,结构对象本身
        let {component:Component ,...rest}= this.props;
        //component==组件本身==变量
        //Component==组件名==字面量
        //...rest 对象中其余的内容
        //判断条件
         if(!this.state.hasAuth) return null;
        // if(this.state.auth){
        //     return <Route component={component}/>
        // }else{
        //     return <Redirect to="/login"/>
        // }
      return <Route 
       render={(props)=>
            this.state.err===0?
            <Component {...rest} {...props} data={this.state.data}/>:<Redirect to="/login"/>
       }
      
      />

      
    }
}