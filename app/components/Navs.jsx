var React = require("react");
var {Link, IndexLink} = require('react-router');
var ReactBootstrap = require('react-bootstrap')

  var nav = ReactBootstrap.Nav,
    NavItem  = ReactBootstrap.NavItem;

// var Navs = React.createClass({
//   render: function(){
//     return(
//       // You use Link instead of <a> because you can style it and set an toggleClass on it
//       // And you can add custom style or custom classes on it
//       // IndexLink is for IndexRout so you use indexlink instead of link if it is for indexroute
//       <div className="navbar navbar-inverse">
//       <ul className="nav navbar-nav">
//       <li className="nav-item"><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
//       <li className="nav-item"><Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
//       <li className="nav-item"><Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
//       </ul>
//       </div>
//     )
//   }
// })

var Navs = (props) => {
  return (
    <div className="navbar navbar-inverse">
    <ul className="nav navbar-nav">
    <li className="nav-item"><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
    <li className="nav-item"><Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
    <li className="nav-item"><Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
    </ul>
    </div>
  )
}
module.exports = Navs;
