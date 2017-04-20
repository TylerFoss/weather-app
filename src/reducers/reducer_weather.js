import FETCH_WEATHER from "../actions/index";
export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATHER:
    return [action.payload.data, ...state]; //this = [city,city,city]
  }
  return state;
}
// dont mutate state inside of a reducer
