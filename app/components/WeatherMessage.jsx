var React = require('react')
var ReactDOM = require('react-dom');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var {temp, location} = this.props;
//     return (
//       <div>
//         <h2>It is {temp} degrees in {location}</h2>
//         </div>
//     )
//   }
// })

// Transform it to Arrow function
// var WeatherMessage = (props) => {
//   var {temp, location} = props;
//   return (
//     <div>
//       <h2>It is {temp} degrees in {location}</h2>
//       </div>
//   )
// }

// You can also do it like this
// So instead of using var you just create the destructuring in the parameters directly
var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h2>It is {temp} degrees in {location}</h2>
      </div>
  )
}

module.exports = WeatherMessage;
