import { useState } from 'react';


const QnA = ({answer,question,nextQuestion}) => {
    const [userAns,setUserAns] = useState("")
    const [resolved,setResolved] = useState(null);
    const [feedback, setFeedback] = useState(null);
    let correct = null

    const submitAnswer = (event) => {
        event.preventDefault()
        const uAnswer = document.getElementById("testInput")
        
        if (uAnswer.value == String(answer)){
            correct = true
            handleResolved() 
        } else if (uAnswer.value == "idk"){
            handleResolved()
        } else {
            setResolved(false)
        }
        
    }

    const handleResolved = () => {
        setResolved(true)
        setFeedback(
            correct 
            ? <h2 className="feedback" style={{color:'green'}}>That Is Correct!</h2>
            : <h2 className="feedback" style={{color:'red'}}>The Answer was {answer}</h2>
        )
        

        setTimeout(() => {
            setResolved(false)
            setUserAns("");
            nextQuestion();
        },6000) // 6000 instead of 1200
    }
    
    return ( 
        <div className="notHeader">
            <div className="QnA"> 
                <div className="question-div">
                    <h1>{question}</h1>
                </div>
                <div className="answer-div">

                    <button onClick={handleResolved}>Show Answer</button>

                    <form onSubmit={(e) => {submitAnswer(e)}}>
                        

                        <input 
                        type='text'
                        id="testInput"
                        autoComplete="off"
                        
                        value={userAns} 
                        onChange={(e) => {setUserAns(e.target.value)}}
                        /> 

                        <input type='submit' value={"Submit Answer"} />  
                        
                    </form>
                    
                </div>
                
            </div>
        {resolved && feedback}
        </div>
     );
}
 
export default QnA;