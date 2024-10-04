import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const QnA = ({answer,question}) => {
    const navigate = useNavigate()
    const [correct,setCorrect] = useState(null);

    const submitAnswer = () => {
        const uAnswer = document.getElementById("testInput")
        
        if (uAnswer.value == String(answer)){
            setCorrect(true)
            setTimeout(() => {navigate(0)},1000)
        } else {
            setCorrect(false)
        }
        
    }

    
    return ( 
        <div className="QnA"> 
            <div className="question-div">
                <h1>{question}</h1>
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