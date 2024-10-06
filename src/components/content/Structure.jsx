import { Link } from "react-router-dom";
import { useState } from "react";

import Visualiser from "./Visualiser";
import SimpleMaths from "./categories/SimpleMaths";
import CountryData from "./categories/CountryData";

const Content = () => {   
    const [questionCount, setQuestionCount] = useState(1)
    const {answer,question} = SimpleMaths()
    const {capitals} = CountryData()


    console.log(capitals[0])

    const nextQuestion = () => {
        setQuestionCount(questionCount + 1)  
    }
 
    return ( 
        <div className="content"> 
            <div className="Header">
                <Link to={'/'}>Menu</Link>
                <h1> The Thing Knower </h1>
                <p>{questionCount}</p>
            </div>
        <Visualiser answer={answer} question={question} nextQuestion={nextQuestion}/>
 
        </div>
     );
}
 
export default Content;