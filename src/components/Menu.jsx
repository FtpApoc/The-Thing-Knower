import { useNavigate } from "react-router-dom"

const Menu = () => {
    const navigate = useNavigate();

    const startTrivia = () => {
        console.log("Trivia Start Button")
        navigate("/Example")
    }

    return(
        <div className="Menu"> 
            <h1>The Thing Knower</h1>
            
            <div className="Content-Selection">
                <div className="simple-maths">
                <p>Simple Maths</p>
                <p>Side By Side</p>
                </div>
            </div>
            
            <button onClick={startTrivia}> Begin </button>
        </div>
    )
}

export default Menu;