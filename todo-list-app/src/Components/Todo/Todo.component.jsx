import React, {Component} from "react"
import './Todo.css'
import ListItem from "../List Item/ListItem.component"
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {library} from '@fortawesome/fontawesome-svg-core'

library.add(faTrash)

export default class Todo extends Component{

    constructor(props){
        super(props)

        // State Initialization! 

        this.state = {

            items : [], // [{text:"123",key:"1234757"}]
            currentItem: {

                text: "",       
                key: "",       
            }
        }
        
        // Binding Functions! to "this object"

        this.handleInput = this.handleInput.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.changeItem = this.changeItem.bind(this)



    }

    
    handleInput(e){

    
        this.setState({
            
            currentItem:{
        
                text: e.target.value,
                key: Date.now()
        
            }    

        })
        
    }


    addItem(e){

        e.preventDefault();

        const newItem = this.state.currentItem;
        if(newItem.text !== ""){

            const newItems = [...this.state.items, newItem]; 
            this.setState({


                items: newItems, // [{text: "123", key: "8790"}]
                currentItem: {

                    text: "", 
                    key: "",

                }
            })
        }
    }

    
    deleteItem(key){

        const deletedItem = this.state.items.filter(item=>{ 

            return(

                key!==item.key

            );

        })


        this.setState({

            items: deletedItem,
            
        })

    }


    changeItem(e,key){

        
        const nameChange = this.state.items
    
        for(let data of nameChange){

            if(data.key === key){

                data.text = e.target.value

                this.setState({

                    items: nameChange

                })


            }

        }

    }




    render(){


        return(

            <div className="App">

                <header>
                    <form id="to-do-form" onSubmit={this.addItem}>

                        <input type="text" placeholder="Enter Your Todo" id="aa" value={this.state.currentItem.text} onChange={this.handleInput} />
                        <button type="submit">Add</button>

                    </form>
                </header>

                <ListItem items={this.state.items} delete={this.deleteItem} changeItem={this.changeItem} />

            </div>

        );

    }


}