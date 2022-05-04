import React, {useState} from "react";

export default function RatingButton(props) {
    var selected = props.selected;

    return (
        <button
            onClick={props.onClick} // so that onClick is activated in the parent component 
            style = {
                {
                    backgroundColor: selected ? "hsl(217, 12%, 63%)" : "",
                    color: selected ? "white" : ""
                }
            }
            className={props.className}
            type={"button-" + props.number}
            value={props.value}
        >
            {props.value}
        </button>
    )
}
