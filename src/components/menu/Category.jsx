import { useState } from "react";

const Category = () => {

    const [value,setValue] = useState("5")

    return ( 
        <div className="simple-maths">
            <p>Simple Maths</p>
            <label htmlFor="testRange">{value}</label>

            <input id="testRange"
            type="range" 
            min={0} 
            max={9} 
            value={value}
            onChange={(e) => {setValue(e.target.value)}} />
        </div> 
    );
}
 
export default Category;