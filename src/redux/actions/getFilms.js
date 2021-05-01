import api from "../../services";
export const GET_FILMS = "GET_FILMS";

export const getFilms = () => (dispatch) => {
  
  let token = localStorage.getItem("token")

  let configs = {
      headers:{
        "Authorization": ` Bearer ${token}`
      }
  }
 
  api.get(
    "http://plastestlocal.local:10003/wp-json/api/v1/films",configs)
    .then((res) => {
      console.log(token)
      dispatch(setfilms(res.data))
    }).catch(res => console.log(res))
};

const setfilms = (data) => ({data:data,type: GET_FILMS})