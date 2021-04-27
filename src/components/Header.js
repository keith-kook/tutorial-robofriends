const { Component } = require("react");

class Header extends Component {
  render() {
    console.log("Header");
    return <h1 className='f1'>RoboFriends</h1>;
  }
}

export default Header;
