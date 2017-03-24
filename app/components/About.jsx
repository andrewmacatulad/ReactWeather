var React = require("react");


// var About = React.createClass({
//   render: function(){
//     return (
//       <h3>Fuck About</h3>
//     )
//   }
// })


// You can use this stateless function instead of a React Component that is only Presentational component
var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About!!</h1>
      <p>Welcome to About Page!!</p>
      <p>Tools used in this page</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the Javascrip Framework used
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Use to get Weather data
        </li>
        <li>
          <a href="http://foundation.zurb.com/">Foundation</a> - Used Framework for this site
        </li>
      </ul>
    </div>
  )
}
module.exports = About;
