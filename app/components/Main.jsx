var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render: function(){
//     return (
//       <div>
//         <Nav />
//         <h2>Main component</h2>
//         {this.props.children}
//       </div>
//     )
//   }
// })

// the "Stateless functional component" below does exactly the same as the method below.
// can only be used in case you only have a render method... so no state!

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="row">
          <div className="columns medium-8 large-6 small-centered">
            {props.children}
          </div>
      </div>
    </div>
  )
}
module.exports = Main;
