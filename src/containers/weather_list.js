import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Sparklines} from 'react-sparkline';
import {SparklinesLine} from 'react-sparkline';
class WeatherList extends Component{
  renderWeather(cityData){
    const temps = cityData.list.map(weather => weather.main.temp);
    return(
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
      </tr>
    );

  }
  render(){
      return(
        <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempertaure</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
        </table>
      )
  }
}
function mapStateToProps({weather}){
  return( {weather}); // {weather} === {weather: weather} === {state = state.weather}
}
export default connect(mapStateToProps)(WeatherList);
