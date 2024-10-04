import { Link } from "react-router-dom";
import Visualiser from "./Visualiser";

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
        <Visualiser a={aVal} b={bVal} ans={ansVal}/>
 
        </div>
     );
}
 
export default Content;