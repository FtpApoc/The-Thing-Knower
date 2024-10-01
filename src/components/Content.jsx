import { Link } from "react-router-dom";

const submitAnswer = () => {
    console.log("Submitted")
}

const Content = () => {
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
                <input /> 
            <button onAction={submitAnswer}>
                    Submit Answer    
            </button>   
                     
            </div>
          
        </div>
 
        </div>
     );
}
 
export default Content;