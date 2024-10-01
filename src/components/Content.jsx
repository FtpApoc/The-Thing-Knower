import { Link } from "react-router-dom";
import { useState } from 'react';

const Content = () => {
    const [correct,setCorrect] = useState(null);
    

    const submitAnswer = () => {
        
    
        const uAnswer = document.getElementById("testInput")
        console.log(uAnswer.value)
        
        if (uAnswer.value == "2"){
            setCorrect(true)
        } else {
            setCorrect(false)
        }

        console.log(correct)
    }
    
    return ( 
        <div className="content"> 
            <div className="Header">
                <h1> The Thing Knower </h1>
                <Link to={'/'}>Menu</Link>
            </div>
        <div className="QnA"> 
            <div className="question-div">
                <h1>What is 1+1?</h1>
            </div>
            <div className="answer-div">
                <input id="testInput"/> 
                <button onClick={submitAnswer}>
                        Submit Answer    
                </button>   
                     
            </div>
            
            {correct && <h2>That Is Correct!</h2>}
        </div>
 
        </div>
     );
}
 
export default Content;