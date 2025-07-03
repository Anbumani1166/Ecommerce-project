import { useContext } from "react"
import { userContext } from "../App"
function Header(){
    const {user:{name}}=useContext(userContext)
    
    return (
        <header>
            <h1>Todo list</h1>
            <p style={{background:"black",width:"30px",height:"30px",textAlign:"center",borderRadius:"50%"}}>{name.slice(0,1)}</p>
        </header>
    )
}
export default Header