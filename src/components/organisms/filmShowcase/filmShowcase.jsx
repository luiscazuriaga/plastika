import {BsArrowRight} from "react-icons/bs"

import "./filmShowcase.scss"
import StyledButton from "../../atoms/button/button"
import RatingSquare from "../../atoms/ratingSquare/ratingSquare"
import Poster from "../../molecules/poster/poster"

const FilmShowcase = ({title,images,rate,description,categories,redirect_link}) => {
    return(
        <div className="showcase_box">
            <Poster poster={images && images[0]?.src} name={title}/>
            <RatingSquare>{rate}/5</RatingSquare>
            <p>{description}</p>
            <h5>Categoria indicada: {categories}.</h5>
            <StyledButton linkTo="/" icon={<BsArrowRight/>}>
                BUSCAR PLATAFORMA
            </StyledButton>

        </div>
    )
}

export default FilmShowcase
