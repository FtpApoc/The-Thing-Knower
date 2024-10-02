import { Link } from "react-router-dom";
import QnA from "./QnA";

const Content = () => {    
    return ( 
        <div className="content"> 
            <div className="Header">
                <h1> The Thing Knower </h1>
                <Link to={'/'}>Menu</Link>
            </div>
        <QnA />
 
        </div>
     );
}
 
export default Content;