import React, {useState} from 'react';
import Rating from "./components/Rating"
import ThankYou from "./components/ThankYou";

function App() {
    const [isRated, setIsRated] = useState(false);
    const [currentRating, setRating] = useState();

    function submit(rateData) {
        setRating(rateData);
        setIsRated(true);
    }

    return (
        <div className="App">
            {isRated ? <ThankYou rating={currentRating}/> : <Rating onSubmit={submit}/>}
        </div>
    );
}

export default App;
