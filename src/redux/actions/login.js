import api from "../../services";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (data) => (dispatch) => {

  api.post(
    "http://plastestlocal.local:10003/wp-json/jwt-auth/v1/token",
     {
       ...data
     })
    .then((res) => {
      console.log("actions",res.data)

      localStorage.setItem("token",`${res.data.token}`)
      dispatch({data:res.data,type:LOGIN})

    }).catch(res => console.log(res))
};

export const logOutUser = () => (dispatch) => {
  localStorage.clear();

  return dispatch({
    type: LOGOUT,
  });
};
