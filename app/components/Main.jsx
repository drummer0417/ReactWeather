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
      <h2>Main component</h2>
      {props.children}
    </div>
  )
}
module.exports = Main;
