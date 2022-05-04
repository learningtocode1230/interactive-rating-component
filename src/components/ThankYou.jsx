import React from "react";

export default function ThankYou(props) {
    return (
        <div className="container thank-you">
            <img src="./images/illustration-thank-you.svg" alt="thank-you"/>
            <button type="button" name="button">You selected {props.rating} out of 5</button>
            <h2>Thank you!</h2>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to <br/>get in touch!</p>
        </div>
    );
}
