import { useNavigate } from "react-router-dom"

const Menu = () => {
    const navigate = useNavigate();

    const startTrivia = () => {
        console.log("Trivia Start Button")
        navigate("/Content")
    }

    return(
        <div className="Menu"> 
            <h1>The Thing Knower</h1>

            <button onClick={startTrivia}> Begin Trivia </button>
            
            <div className="Content-Selection">
                <h2>Category Selection</h2>

                <div className="simple-maths">
                    <p>Simple Maths</p>
                    <input type="range" min={0} max={10} defaultValue={5}/>
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