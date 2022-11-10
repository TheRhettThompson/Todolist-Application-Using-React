import React from "react";

export const DeleteTab = (props) => {

    //const removeItem = () => {
        //write function to remove item from 'list' array}

    return (
        <div className="deleteTab">

            <p>{props.input}</p>
            <button 
                //when user clicks button, the 'removeItem' funtion is called, and the item is removed from the array
                onClick={() => {removeItem()}}>
                delete
            </button>
        </div>

    );

};