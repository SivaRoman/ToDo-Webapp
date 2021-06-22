import React from 'react'
import style from './mystyle.module.css'
import ToDolist from './ToDolist';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:"",
                key:""
            }
        }
        this.handleInput=this.handleInput.bind(this);
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }
    handleInput(e){                                 //handling the inputs
        this.setState({
            currentItem:{
                text:e.target.value,
                key:Date.now()
            }
        })
    }
    addItem(e){                                     //adding items .
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text!==""){
            const newItems=[...this.state.items,newItem]
            this.setState({
                items:newItems,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }

    }

deleteItem(key){                                        //deleting the items from the list
    const filteredItems= this.state.items.filter(item=>item.key!==key);
    this.setState({
        items:filteredItems
    })
}
    render(){
        return (
        <div className={style.App}>
        <header>
            <form onSubmit={this.addItem}>
            <input className={style.input} type="text" placeholder="Enter your List"
             value={this.state.currentItem.text}
             onChange={this.handleInput}/>
            <button className={style.button} type="submit">Add</button>
            </form>
        </header>
        <ToDolist items = {this.state.items}
        deleteItem = {this.deleteItem}
        />
        </div>);
    }
}

export default Header;