import React, {useState} from "react";
import Button from "./RatingButton";
import ThankYou from "./ThankYou";

export default function Rating(props) {
    const [selection, setSelection] = useState(""); // so that the state of each component is relative to each other, instead of each component having its own individual state

    function selectButton(event) {
        setSelection(event.target.value);
    }

    return (
        <div className="container">
            <button className="star-button" type="button"><img src="./images/icon-star.svg" alt="star"/></button>

            <h2>How did we do?</h2>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

            <div class="rating-container">
                <Button onClick={selectButton} selected={selection === "1"} className="rating-left" type="button" value="1"/>
                <Button onClick={selectButton} selected={selection === "2"} className="rating" type="button" value="2"/>
                <Button onClick={selectButton} selected={selection === "3"} className="rating" type="button" value="3"/>
                <Button onClick={selectButton} selected={selection === "4"} className="rating" type="button" value="4"/>
                <Button onClick={selectButton} selected={selection === "5"} className="rating-right" type="button" value="5"/>
            </div>
            <button onClick={() => {props.onSubmit(selection)}} className="submit" type="button" name="submit">SUBMIT</button>
        </div>
    )
}
