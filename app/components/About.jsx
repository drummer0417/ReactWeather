var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(
//      ...............
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
      <p>You are on a small screen or larger.</p>
      <p className="show-for-medium">You are on a medium screen or larger.</p>
      <p className="show-for-large">You are on a large screen or larger.</p>
      <p className="show-for-small-only">You are <em>definitely</em> on a small screen.</p>
      <p className="show-for-medium-only">You are <em>definitely</em> on a medium screen.</p>
      <p className="show-for-large-only">You are <em>definitely</em> on a large screen.</p>
      <p className="hide">Can't touch this.</p>
      <p className="invisible">Can sort of touch this.</p>
    </div>
  )
}
module.exports = About;
