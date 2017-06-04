var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    var location = this.refs.location.value;
    if (location && location.length > 0) {
      // console.log('in nav, location:::::::::::::::: ', location);
      var encodedLocation = encodeURIComponent(location);
      this.refs.location.value = '';
      console.log("encodedLocation:", encodedLocation);
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function() {
    return (
      <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">Hans Weather App</li>
              <li>
                <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
              </li>
              <li>
                <Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
              </li>
              <li>
                <Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
              </li>
            </ul>
          </div>
          <div className='top-bar-right'>
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input ref="location" type="search" placeholder="Your location" />
                </li>
                <li>
                  <input type="submit" className="button" value="Get Weather"/>
                </li>
              </ul>
            </form>
          </div>
      </div>
    )
  }
});

module.exports = Nav;
