import { useState } from "react";
import { MdSettings, MdOutlineClear } from "react-icons/md";

const Category = ({catName,displayName}) => {

    const [value,setValue] = useState("5")

    return ( 
        <div className={catName}>
            <p>{displayName}</p>
            <label htmlFor="range">{value}</label>

            <input id="range"
            type="range" 
            min={0} 
            max={10} 
            value={value}
            onChange={(e) => {setValue(e.target.value)}} />

            <MdSettings className="icon" size="25"/>
            <MdOutlineClear className="icon" size="30" />
        </div> 
    );
}
 
export default Category;