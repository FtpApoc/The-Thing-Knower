import { useEffect, useState } from 'react';
// import Math from 'math';


const QnA = () => {
    const [correct,setCorrect] = useState(null);

    const a = Math.floor(Math.random() * 10)
    const b = Math.floor(Math.random() * 10)
    const ans = a + b

    const submitAnswer = (e) => {
        e.preventDefault()
        const uAnswer = document.getElementById("testInput")
        
        if (uAnswer.value == String(ans)){
            setCorrect(true)
            console.log("We Got Here! 18")
        } else {
            setCorrect(false)
        }
    }

    
    return ( 
        <div className="QnA"> 
            <div className="question-div">
                <h1>What is {a}+{b}?</h1>
            </div>
            <div className="answer-div">
                <input id="testInput"/> 
                <button onClick={(e) => {submitAnswer(e)}}>
                        Submit Answer    
                </button>   
                     
            </div>

            {correct && <h2>That Is Correct!</h2>}
        </div>
     );
}
 
export default QnA;