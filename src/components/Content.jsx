import { Link } from "react-router-dom";
import QnA from "./QnA";

const Content = () => {   
    const aVal = Math.floor(Math.random() * 10)
    const bVal = Math.floor(Math.random() * 10)
    const ansVal = aVal + bVal
 
    return ( 
        <div className="content"> 
            <div className="Header">
                <h1> The Thing Knower </h1>
                <Link to={'/'}>Menu</Link>
            </div>
        <QnA a={aVal} b={bVal} ans={ansVal}/>
 
        </div>
     );
}
 
export default Content;