import React, {Component} from 'react';
import './App.css';
import users from './data';
import Slides from './Slides';
import Buttons from './Buttons';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      users: users,
    }
  }

  render() {
    return (
      <div className="main">
        <div className="header">HOME</div>
        <div className="content">
          <Slides users={this.state.users} />
          <Buttons />
        </div>
      </div>

    )
  }
}

export default App;
