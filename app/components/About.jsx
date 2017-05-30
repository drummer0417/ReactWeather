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
    <div>
        <h1 className="text-center">About</h1>
      <p>This is version 0.1 of HansWeatherApp<br/><br/>
        Can't wait to add some style to make it look less terrible
      </p>
    </div>
  )
}
module.exports = About;
