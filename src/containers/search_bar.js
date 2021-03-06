import React,{Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ""};
  }

  onInputChange = (event) => {
    this.setState({term: event.target.value});
  }

  onFormSubmit = (event) => {
    // always prent defualt on a form tag
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ""});

  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        placeholder="Get a five-day forecast in your favorite cities"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}
function mapDispatchToProps(dispatch){
  // this causes the action creator to flow into the reducers
  return bindActionCreators({fetchWeather}, dispatch);
}
// by binding the action and dispatching to props it gives access to this.props.fetchWeather
export default connect(null, mapDispatchToProps)(SearchBar);
