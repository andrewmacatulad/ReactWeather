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
    <h2>Fuck Main!</h2>
    {props.children}
  </div>
)
}
module.exports = Main;
