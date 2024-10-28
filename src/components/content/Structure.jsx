import { Link } from "react-router-dom";
import { useState } from "react";
import { getRandomNumber } from "../Utilities";
import './Content.css'

import Visualiser from "./Visualiser";
import SimpleMaths from "./categories/SimpleMaths/SimpleMaths";
import CountryData from "./categories/CountryData/CountryData";


const Content = () => {  
    const [questionCount, setQuestionCount] = useState(1)

    //select and run a random listed category
    const categorySelection = () => {
        const categories = [CountryData,SimpleMaths]

        const category = categories[getRandomNumber(categories.length)]

        return category()
    }

    //run selected category, Seperated from above for future expansion
    const {answer,question} = categorySelection()

    //passed callback prop given to the visualiser component
    const nextQuestion = () => {
        setQuestionCount(questionCount + 1)  
    }
 
    return ( 
        <div className="content"> 
            <div className="Header">
                <Link to={'/'}>Menu</Link>
                <h1>The Thing Knower</h1>
                <p>{questionCount}</p>
            </div>
        
        <Visualiser answer={answer} question={question} nextQuestion={nextQuestion}/>
 
        </div>
     );
}
 
export default Content;