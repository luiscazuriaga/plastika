import { BsArrowRight } from "react-icons/bs"
import StyledButton from "../../atoms/button/button"
import "./homeFooter.scss"

const HomeFooter = () => {
    return(
     <div className="footer_container">
     <h1>Filtre por qualificação do portal</h1>
     <div className="buttons_box">
        <StyledButton linkTo="/" icon={<BsArrowRight/>}>
            ABAIXO DA MÉDIA
        </StyledButton>
        <StyledButton linkTo="/" icon={<BsArrowRight/>}>
            ACIMA DA MÉDIA
        </StyledButton>
     </div>
     </div>
    )
}

export default HomeFooter
