import FilmShowcase from "../../components/organisms/filmShowcase/filmShowcase"
import "./homePage.scss"

import film from "../../assets/img/film.jpg"
import HomeFooter from "../../components/organisms/homeFooter/homeFooter"
import { useDispatch, useSelector } from "react-redux"
import { useCallback, useEffect } from "react"
import { getFilms } from "../../redux/actions/getFilms"

const HomePage = () => {
    const dispatch = useDispatch()
    const films = useSelector((state) => state.dataFilms)
    useEffect(()=> {
        if(films.length < 1){
        dispatch(getFilms())
        console.log(films)
    }
    },[dispatch,films])
    

    return(
        <div className="home_container">
          <div className="content">
              {films.map(elem => 
              <FilmShowcase {...elem}/>
              )}
          </div>
          <HomeFooter/>
        </div>
    )
}

export default HomePage
