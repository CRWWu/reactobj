import React from "react"
import axios from "axios"
import Cell from "../components/cell/Cell"
import "../assets/css/Column.css"
export default class Column extends React.Component{
     state={
         column:[]

     }
     componentDidMount(){
        axios({
            url:"mock/column",
            params:{
                _page:1,
                _limit:8,
            }
        }).then(
            res=>this.setState({column:res.data.data})
        )
     }
    render(){
        console.log(this.state.column)
        return <div className="Column">
            <div className="newsList">
             
                    { this.state.column.map((items)=>(
                        <Cell  key={items.id} item={items} dataName="column" />)
                    )}
                    {/* <li>
                    <a href="javascript:;">
                        <h2>xx</h2>
                        <p>oooo</p>
                    </a>
                    </li> */}
              
                </div>
        </div>
    }
}