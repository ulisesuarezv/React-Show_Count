import "./Button.css"

const Button = ({ children, funcion }) => {


    

    return (
        <button className="btn" onClick={funcion}>{children}</button>
        )
}

export default Button;