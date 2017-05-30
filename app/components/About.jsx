var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(
//       <h3>About Component</h3>
//     );
//   }
// });

// the "Stateless functional component" below does exactly the same as the method below.
// can only be used in case you only have a render method... so no state!

var About = (props) => {
  return (
    <h3>About React Weather 0.1</h3>
  )
}
module.exports = About;
