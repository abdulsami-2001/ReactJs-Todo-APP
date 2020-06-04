import React, { Component } from 'react'
import './ListItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ListItem extends Component {


    render() {

        const items = this.props.items // [{text:"123", key: "28965" }]
        const listItems = items.map((item)=>{

            return(
                
                <div className="list" key={item.key} >

                    <p>

                        <input type="text" value={item.text} key={item.key} onChange={(e)=>{this.props.changeItem(e,item.key)}} />

                        <span><FontAwesomeIcon className="faicons" icon="trash" 
                        onClick={()=> this.props.delete(item.key)} />
                        
                        
                        </span>

                    </p>

                </div>

            );

        })
        return (

            <div>{listItems}</div>
            
        )
    }
}
