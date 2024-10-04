import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Math from 'math';


const QnA = ({a,b,ans}) => {
    const navigate = useNavigate()
    const [correct,setCorrect] = useState(null);

    const submitAnswer = () => {
        const uAnswer = document.getElementById("testInput")
        
        if (uAnswer.value == String(ans)){
            setCorrect(true)
            setTimeout(() => {navigate(0)},1000)
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
                <button onClick={submitAnswer}>
                        Submit Answer    
                </button>   
                     
            </div>

            {correct && <h2>That Is Correct!</h2>}
        </div>
     );
}
 
export default QnA;