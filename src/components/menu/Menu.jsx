
import { useNavigate } from "react-router-dom"
import "./Menu.css";
import Category from "./Category";

const Menu = () => {
    const navigate = useNavigate();

    //TODO: Make a Category selector

    return(
        <div className="Menu"> 
            <h1>The Thing Knower</h1>

            <button onClick={() => {navigate("/content")}}> Begin Trivia </button>
            
            <div className="Content-Box">
                <h2>Category Selection</h2>
                
                <div className="categories"> 

                    <Category catName="simple-maths" displayName="Simple Maths"/>

                    <Category catName="countryData" displayName="Country Data"/>
                    
                    <button>+ Add New Category</button>
                </div>
            </div>
        </div>
    )
}

export default Menu;