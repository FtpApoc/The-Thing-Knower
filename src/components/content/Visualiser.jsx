import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const QnA = ({answer,question,nextQuestion}) => {
    const navigate = useNavigate()
    const [userAns,setUserAns] = useState("")
    const [correct,setCorrect] = useState(null);

    const submitAnswer = () => {
        const uAnswer = document.getElementById("testInput")
        
        if (uAnswer.value == String(answer)){
            setCorrect(true)
            setTimeout(() => {
                setCorrect(false);
                setUserAns("");
                nextQuestion();
            },1200)
            
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

                <input 
                id="testInput"
                value={userAns} 
                onChange={(e) => {setUserAns(e.target.value)}}
                /> 

                <button onClick={submitAnswer}>
                        Submit Answer    
                </button>   
                     
            </div>

            {correct && <h2>That Is Correct!</h2>}
        </div>
     );
}
 
export default QnA;