import axios from "axios";

const API_KEY = "4e16ef0a542510b5a1bb95481e799b2d";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// this is made into a const to have consistency between our action creators and reducers
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  // when this runs redux-promise dispatches a payload then when the get request
  // runs it dispatches another action with the actual payload
  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
