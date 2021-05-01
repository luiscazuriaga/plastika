import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import LoginBox from "../../components/organisms/loginBox/loginBox"
import { login } from "../../redux/actions/login"
import "./loginPage.scss"

const LoginPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [data,setData] = useState({username:"",password:""})
    
    const changeData = (object) => {
        setData((prevState) => ({...prevState, ...object}))
        console.log(data)
    }
    
    const onSubmit = () =>{
        dispatch(login(data))
        history.push("/home")
    }


    return(
        <div className="login_container"> 
            <LoginBox changeData={changeData} onSubmit={onSubmit}/>
        </div>
    )
}

export default LoginPage
