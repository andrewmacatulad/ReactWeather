var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server')

var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return {
      title: "Error"
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    var {title, message} = this.props;
    var modalMarkup = (
      <div className="reveal small text-center" id="error-modal" data-reveal="">
        <h3>{title}</h3>
        <p>{message}</p>
        <p>
          <button className="button hallow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    // it takes the component which is this and returns the DOM node with the component list
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){


    return(
      <div>
      </div>
    )

  }
})

module.exports = ErrorModal;
