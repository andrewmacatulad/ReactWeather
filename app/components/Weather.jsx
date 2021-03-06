var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap');
var ReactBootstrap = require('react-bootstrap');
var ErrorModal = require('ErrorModal');



var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
        });

    });
  },
  // you call any methods you like just like handleSearch
  componentDidMount: function(){
    // the last location can change depends on the query string name
    var location = this.props.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      // this will reset the link to the homepage
      window.location.hash = "#/";
    }
  },
  // this is built in and will automatically change/update props of the weather.jsx when the url changes
  componentWillReceiveProps: function(newProps){
    // this is just like the things you add in the componentDidMount but you use the newProps unlike the this.props
    var location = newProps.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = "#/";
    }
  },
  render: function(){
    var {location, temp, isLoading, errorMessage} = this.state;

    function renderMessage (){
      if(isLoading){
        return <h3 className="text-center">Fetching Weather</h3>
      } else if (temp && location){
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError (){
        if(typeof errorMessage === 'string'){
          return(
            <ErrorModal message={errorMessage}/>
          )
        }
    }
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
          <WeatherForm onhandleNewData={this.handleSearch}/>
          {renderMessage()}
          {renderError()}
      </div>
    )
  }
})

module.exports = Weather;
//
// var React = require('react');
// var WeatherForm = require('WeatherForm');
// var WeatherMessage = require('WeatherMessage');
// var openWeatherMap = require('OpenWeatherMap');
//
// var Weather = React.createClass({
//   getInitialState: function () {
//     return {
//         location: 'Miami',
//         temp: 88
//     }
//   },
//   handleSearch: function (location) {
//     var that = this;
//
//     openWeatherMap.getTemp(location).then(function (temp) {
//       that.setState({
//         location: location,
//         temp: temp
//       });
//     }, function (errorMessage) {
//         alert(errorMessage);
//     });
//   },
//   render: function () {
//     var {temp, location} = this.state;
//
//     return (
//       <div>
//         <h3>Weather Component</h3>
//         <WeatherForm onhandleNewData={this.handleSearch}/>
//         <WeatherMessage temp={temp} location={location}/>
//       </div>
//     )
//   }
// });
//
// module.exports = Weather;
