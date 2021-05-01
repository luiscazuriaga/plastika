import LoginInput from "../../molecules/loginInput"
import {BsArrowRight} from "react-icons/bs"

import "./loginBox.scss"
import StyledButton from "../../atoms/button/button"
import { useState } from "react"


const LoginBox = ({changeData, onSubmit}) => {
    return(
        <div id="login_box">
            <h2>Login</h2>
            <LoginInput label="EMAIL" type="text" name="username" changeData={changeData}/>
            <LoginInput label="SENHA" type="password" name="password" changeData={changeData}/>
            <StyledButton onSubmit={onSubmit} icon={<BsArrowRight/>}>
                ACESSAR
            </StyledButton>
        </div>
    )
}

export default LoginBox
