var React = require('react');
var { Link } = require('react-router');

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
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to='/?=location=Eindhoven'>Eindhoven</Link>
        </li>
        <li>
          <Link to='/?=location=Texel'>Texel</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples;
