var React = require('react');
var { Link, IndexLink } = require('react-router');

// var Nav = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h2>Nav Component</h2>
//         <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
//         <Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//       </div>
//     )
//   }
// });

// the "Stateless functional component" below does exactly the same as the method below.
// can only be used in case you only have a render method... so no state!

var Nav = (props) => {
  return (
    <div>
      <h2>Nav Component...</h2>
      <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  )
}

module.exports = Nav;
