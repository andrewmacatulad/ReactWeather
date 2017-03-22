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
    <h3>About!!</h3>
    <p>Welcome to About Page!!</p>
    </div>
  )
}
module.exports = About;
