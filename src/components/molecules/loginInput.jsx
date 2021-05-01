import "./loginInput.scss"

const LoginInput = ({label, type, name ,changeData}) => {
  return (
    <div className="wrapper">
        <div className="input_data">
            <input type={type} onChange={({target})=> changeData({[`${name}`]:target.value})} required/>
            <label>{label}</label>
            <div className="underline"></div>
        </div>
    </div>
  );
};

export default LoginInput;

