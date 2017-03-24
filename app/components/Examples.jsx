var React = require("react");
var {Link} = require('react-router')

// var Examples = React.createClass({
//   render: function(){
//     return (
//       <h3>Fuck Examples</h3>
//     )
//   }
// })

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples!!!!</h1>
      <p>Welcome to Example Page</p>
      <ol>
        <li>
            <Link to="/?location=Caloocan">Caloocan, CA</Link>
        </li>
        <li>
            <Link to="/?location=Manila">Manila, MNL</Link>
        </li>
      </ol>
    </div>
  )
}
module.exports = Examples;
