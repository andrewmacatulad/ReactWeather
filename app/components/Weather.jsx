var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap');
var ReactBootstrap = require('react-bootstrap');

var Jumbotron = ReactBootstrap.Jumbotron;



var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;
    
    this.setState({isLoading: true})
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
        that.setState({isLoading: false});
        alert(errorMessage);

    });
  },
  render: function(){
    var {location, temp, isLoading} = this.state;

    function renderMessage (){
      if(isLoading){
        return <h3>Fetching Weather</h3>
      } else if (temp && location){
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }
    return (
      <div className="container">
      <Jumbotron>
        <center>
        <h1>Get Weather</h1>
          <WeatherForm onhandleNewData={this.handleSearch}/>
          {renderMessage()}

        </center>
      </Jumbotron>
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
