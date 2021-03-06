var React = require('react');
var ReactDOM = require('react-dom');


var WeatherForm = React.createClass({
  onFormSubmit: function(e){
  e.preventDefault();
  var location = this.refs.location.value;

  if(location.length > 0){
    this.refs.location.value = '';
    this.props.onhandleNewData(location);
  }
},
  render: function(){
    return(
      <div>
      <form  onSubmit={this.onFormSubmit}>
        <input type="search" placeholder="Search by City" ref="location"></input>
        <button className="hollow button expanded">Get Weather</button>
      </form>
      </div>
    )
  }
})

module.exports = WeatherForm;
