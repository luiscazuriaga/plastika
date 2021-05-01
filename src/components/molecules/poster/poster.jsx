import "./poster.scss"



const Poster = ({poster,name}) => {
    return(
        <div className="image">
            <img src={poster} alt=""/>
            <h2>{name}</h2>
        </div>
    )
}

export default Poster