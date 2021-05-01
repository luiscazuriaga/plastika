import { GET_FILMS } from "../actions/getFilms";

const defaultState = [];
const dataFilms = (state = defaultState, action) => {
  switch (action.type) {
    case GET_FILMS:
      const newState = [...action.data]
      console.log("Reduce DATAFILMS",newState)
      return newState
      
    default: 
        return state;
    }
}
export default dataFilms;