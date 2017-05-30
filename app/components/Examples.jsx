var React = require('react');

// var Examples = React.createClass({
//   render: function(){
//     return(
//       <h3>Examples Component</h3>
//     );
//   }
// });

// the "Stateless functional component" below does exactly the same as the method below.
// can only be used in case you only have a render method... so no state!
var Examples = (props) => {
  return (
    <div>
      <h3>Examples</h3>
      <p>Welcome to the examples page</p>
    </div>
  )
}

module.exports = Examples;
