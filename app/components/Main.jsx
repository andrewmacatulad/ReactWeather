var React = require('react');
var Navs = require('Navs');

// var Main = React.createClass(
//   {
//     render: function(){
//       return (
//         <div>
//           <Navs/>
//           <h2>Fuck Main</h2>
//           {this.props.children}
//         </div>
//       );
//     }
//   }
// )

var Main = (props) => {
return(

  <div>
    <Navs/>
    <div className="row">
      <div className="columns medium-6 large-4 small-centered">
        {props.children}
      </div>
    </div>
  </div>
)
}
module.exports = Main;
