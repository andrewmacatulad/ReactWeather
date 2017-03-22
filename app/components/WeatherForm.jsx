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
      <form  onSubmit={this.onFormSubmit} className="form-group">
        <input type="text" className="form-control" placeholder="Enter City Name" ref="location"></input>
        <button className="btn btn-primary form-control">Get Weather</button>
      </form>
      </div>
    )
  }
})

module.exports = WeatherForm;
