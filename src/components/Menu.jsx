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
            
            <div className="Content-Selection">
                <div className="simple-maths">
                    <p>Simple Maths</p>
                    <input type="range" min={0} max={10} defaultValue={5}/>
                </div>

                <div className="countryData">
                    <p>Country Data</p>
                    <input type="range" min={0} max={10} defaultValue={5}/>
                </div>
            </div>
            
            <button onClick={startTrivia}> Begin </button>
        </div>
    )
}

export default Menu;