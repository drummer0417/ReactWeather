var React = require('react');

// var WeatherText = React.createClass({
//
//   render: function() {
//
//     var { temp, location, country } = this.props;
//     var text = 'In ' + location + ' it\'s ' + temp + ' degrees';
//     return (
//       <div>
//         <p>
//           It's {temp} degrees in {location}, {country}
//         </p>
//       </div>
//     )
//   }
// });

// the "Stateless functional component" below does exactly the same as the method below.
// can only be used in case you only have a render method... so no state!

var WeatherText = (props) => {
  var { temp, location, country } = props;

  return (
    <div>
      <p>
        It's {temp} degrees (celcius) in {location}, {country}
      </p>
    </div>
  )
}


module.exports = WeatherText;
