import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Menu = () => {
    const navigate = useNavigate();
    const [value,setValue] = useState("5")

    return(
        <div className="Menu"> 
            <h1>The Thing Knower</h1>

            <button onClick={() => {navigate("/content")}}> Begin Trivia </button>
            
            <div className="Content-Selection">
                <h2>Category Selection</h2>

                <div className="simple-maths">
                    <p>Simple Maths</p>
                    <label htmlFor="testRange">{value}</label>

                    <input id="testRange"
                    type="range" 
                    min={0} 
                    max={10} 
                    value={value}
                    onChange={(e) => {setValue(e.target.value)}} />
                </div>

                <div className="countryData">
                    <p>Country Data</p>
                    <input type="range" min={0} max={10} defaultValue={5}/>
                </div>
            </div>
            
         
        </div>
    )
}

export default Menu;