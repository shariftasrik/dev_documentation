import React from "react";

function ToDoItem(props){

    return (
        <div onClick={()=>{
            props.onChecked(props.id);
        }}>
        <li>
            {props.text}
        </li> {/*Stateless property*/}
        </div>
    );
}   

export default ToDoItem;