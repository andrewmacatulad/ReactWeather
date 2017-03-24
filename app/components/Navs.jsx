var React = require("react");
var {Link, IndexLink} = require('react-router');
var ReactBootstrap = require('react-bootstrap')


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

// Nav Example
// var Navs = (props) => {
//   return (
    // <div className="navbar navbar-inverse">
    // <ul className="nav navbar-nav">
    // <li className="nav-item"><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
    // <li className="nav-item"><Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
    // <li className="nav-item"><Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
    // </ul>
    // </div>
//   )
// }

var Navs = React.createClass({
  // create a onSearch function to be used in the Search toolbar
  onSearch: function(e){
    e.preventDefault();
    alert("Wala pa to")
  },
  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
            <li><Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
            <li><Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search by City"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = Navs;
