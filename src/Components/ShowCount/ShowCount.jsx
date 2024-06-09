import { useState } from "react"
import "./ShowCount.css"
import Button from "../Button/Button"


const ShowCount = () => {
    const [count, setCount] = useState(0)

    const notNegative = () => {
        if (count > 0) {
            setCount(count -1)
        }
    }

    return (
        <div id='container'>
            <p>You clicked here: {count}</p>
            <Button funcion={notNegative}>Restar</Button>
            <Button funcion={() => setCount(count + 1)}>Sumar</Button>
        </div>
        )
}

export default ShowCount;