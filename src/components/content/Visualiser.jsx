import { useState } from 'react';


const QnA = ({answer,question,nextQuestion}) => {
    const [userAns,setUserAns] = useState("")
    const [resolved,setResolved] = useState(null);
    const [resolutionMessage, setResolutionMessage] = useState(null);
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
        setResolutionMessage(
            correct 
            ? <h2 className="resMes" style={{color:'green'}}>That Is Correct!</h2>
            : <h2 className="resMes" style={{color:'red'}}>The Answer was {answer}</h2>
        )
        

        setTimeout(() => {
            setResolved(false)
            setUserAns("");
            nextQuestion();
        },12000) //Extra 0 here to give more time to poke around the CSS
    }
    
    return ( 
        <div className="content">
            <div className="QnA"> 
                <div className="question-div">
                    <h1>{question}</h1>
                </div>
                <div className="answer-div">

                    <button onClick={handleResolved}>Show Answer</button>

                    <form onSubmit={(e) => {submitAnswer(e)}}>
                        

                        <input 
                        id="testInput"
                        value={userAns} 
                        onChange={(e) => {setUserAns(e.target.value)}}
                        /> 

                        <input type='submit' value={"Submit Answer"} />  
                        
                    </form>
                </div>
            </div>
            {resolved && resolutionMessage}
        </div>
     );
}
 
export default QnA;