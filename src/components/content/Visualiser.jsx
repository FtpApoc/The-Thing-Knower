import { useState } from 'react';


const QnA = ({question, answer, alternate, nextQuestion}) => {
    const [userAns,setUserAns] = useState("")
    const [resolved,setResolved] = useState(null);
    const [feedback, setFeedback] = useState(null);
    let correct = null

    const submitAnswer = (event) => {
        //stop page reloads
        event.preventDefault()
        const uAnswer = document.getElementById("answerInput").value
        
        //check answerInput, alternates and lowercase alternates
        if (uAnswer == String(answer) 
            || alternate.includes(uAnswer)
            || alternate.includes(uAnswer.toLowerCase())){
            correct = true
            feedbackAndNextQ() 
        } else if (uAnswer== "idk"){
            feedbackAndNextQ()
        } else {
            setResolved(false)
        }
        
    }

    //handle 
    const feedbackAndNextQ = () => {
        setResolved(true)
        setFeedback(
            correct 
            ? <h2 className="feedback" style={{color:'green'}}>That Is Correct!</h2>
            : <h2 className="feedback" style={{color:'red'}}>The Answer was {answer}</h2>
        )
        
        //wait 1.2 seconds after feedback to set up next question
        setTimeout(() => {
            setResolved(false)
            setUserAns("");
            nextQuestion();
        },2000)
    }
    
    return ( 
        <div className="QnA"> 

            <div className="question-div">
                <h1>{question}</h1>
            </div>

            <div className="answer-div">

                <button onClick={feedbackAndNextQ}>Show Answer</button>

                <form onSubmit={(e) => {submitAnswer(e)}}>
                    
                    <input 
                    type='text'
                    id="answerInput"
                    autoComplete="off"
                    value={userAns} 
                    onChange={(e) => {setUserAns(e.target.value)}}
                    /> 

                    <input type='submit' value={"Submit Answer"} />  
                    
                </form>
                
            </div>
            {resolved && feedback}
        </div>
        
     );
}
 
export default QnA;