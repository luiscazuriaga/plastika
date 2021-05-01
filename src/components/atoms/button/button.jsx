
import "./button.scss"

const StyledButton = ({icon, onSubmit, children}) => {
return(
    <button onClick={() => onSubmit()}>
        <p>{children}</p>
        {icon}
    </button>
)

}

export default StyledButton