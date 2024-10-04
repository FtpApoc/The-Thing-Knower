import { Link } from "react-router-dom";
import Visualiser from "./Visualiser";
import SimpleMaths from "./SimpleMaths";

const Content = () => {   
    const {answer,question} = SimpleMaths()
 
    return ( 
        <div className="content"> 
            <div className="Header">
                <h1> The Thing Knower </h1>
                <Link to={'/'}>Menu</Link>
            </div>
        <Visualiser answer={answer} question={question}/>
 
        </div>
     );
}
 
export default Content;