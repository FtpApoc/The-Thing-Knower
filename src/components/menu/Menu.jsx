
import { useNavigate } from "react-router-dom"
import Category from "./Category";

const Menu = () => {
    const navigate = useNavigate();

    return(
        <div className="Menu"> 
            <h1>The Thing Knower</h1>

            <button onClick={() => {navigate("/content")}}> Begin Trivia </button>
            
            <div className="Content-Box">
                <h2>Category Selection</h2>
                
                <div className="categories"> 
                    <Category />

                    <div className="countryData">
                        <p>Country Data</p>
                        <input type="range" min={0} max={9} defaultValue={5}/>
                    </div>
                    
                    <button>+ Add New Category</button>
                </div>
            </div>
        </div>
    )
}

export default Menu;