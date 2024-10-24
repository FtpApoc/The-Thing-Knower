import { useState } from 'react';


const QnA = ({answer,question,nextQuestion}) => {
    const [userAns,setUserAns] = useState("")
    const [correct,setCorrect] = useState(null);

    const submitAnswer = (event) => {
        event.preventDefault()
        const uAnswer = document.getElementById("testInput")
        
        if (uAnswer.value == String(answer)){
            setCorrect(true)
            setTimeout(() => {
                handleCorrect();
                setCorrect(false);
                setUserAns("");
                nextQuestion();
            },1200)
        } else if (uAnswer.value == "idk"){
            setUserAns("");
            nextQuestion();
        } else{
            setCorrect(false)
        }
        
    }

    const handleCorrect = () => {
        console.log("Correct")
    }

    const handleIncorrect = () => {
        console.log("Incorrect")
    }

    
    return ( 
        <div className="QnA"> 
            <div className="question-div">
                <h1>{question}</h1>
            </div>
            <div className="answer-div">
                <form onSubmit={(e) => {submitAnswer(e)}}>
                    <input 
                    id="testInput"
                    value={userAns} 
                    onChange={(e) => {setUserAns(e.target.value)}}
                    /> 

                    <input type='submit' value={"Submit Answer"} />  
                     
                </form>

                <button onClick={handleIncorrect}>Show Answer</button>

            </div>

            {correct && <h2>That Is Correct!</h2>}
        </div>
     );
}
 
export default QnA;