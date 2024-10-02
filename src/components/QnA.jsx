import { useState } from 'react';

const QnA = () => {
    const [correct,setCorrect] = useState(null);
    

    const submitAnswer = () => {
        
    
        const uAnswer = document.getElementById("testInput")
        
        if (uAnswer.value == "2"){
            setCorrect(true)
        } else {
            setCorrect(false)
        }
    }
    
    return ( 
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
     );
}
 
export default QnA;