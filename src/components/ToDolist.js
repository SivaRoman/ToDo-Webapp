import React from 'react'
import style from './mystyle.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function ToDolist(props){
    const items = props.items;
    const listItems = items.map(item =>{                        //iterating through the items
        return <div  className={style.list} key={item.key}>
            <p >{item.text}
            <span>
                <FontAwesomeIcon className="faicons" icon='trash'
                onClick={()=> props.deleteItem(item.key)}/>
            </span>
            </p>
        </div>
    })

    return(<div>
        {listItems}
    </div>

    )
}
export default ToDolist;