import { Link } from "react-router-dom";
import { useState } from "react";
import { getRandomNumber } from "../Utilities";
import './Content.css'

import Visualiser from "./Visualiser";
import SimpleMaths from "./categories/SimpleMaths/SimpleMaths";
import CountryData from "./categories/CountryData/CountryData";
import Presidents from "./categories/Presidents";


const Content = () => {  
    const [questionCount, setQuestionCount] = useState(1)

    //select and run a random listed category
    const categorySelection = () => {
        const categories = [CountryData,SimpleMaths, Presidents]

        const category = categories[getRandomNumber(categories.length)]

        return category()
    }

    //run selected category, Seperated from above for future expansion
    const {question, answer} = categorySelection()

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
        
        <Visualiser  question={question} answer={answer} nextQuestion={nextQuestion}/>
 
        </div>
     );
}
 
export default Content;