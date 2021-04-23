import React, {Component} from 'react';
import './App.css';
import users from './data';
import Slides from './Slides';
import Buttons from './Buttons';
import PageCounter from './PageCounter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users,
      currentUser: 0,
    }
    this.nextUser = this.nextUser.bind(this);
    this.prevUser = this.prevUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('UPDATED')
  }


  nextUser() {
    if (this.state.currentUser < this.state.users.length - 1) {
      this.setState({currentUser: this.state.currentUser + 1});
    } else if (this.state.currentUser === this.state.users.length - 1) {
      this.setState({currentUser: 0});
    }
    console.log(this.state.currentUser);
  }

  prevUser() {
    if (this.state.currentUser > 0) { 
      this.setState({currentUser: this.state.currentUser -1}); 
    } else if (this.state.currentUser === 0) {
      this.setState({currentUser: this.state.users.length - 1});
    }
    console.log(this.state.users.length);
  }

  deleteUser() {
    let usersCopy = [...this.state.users];
    if (this.state.users.length > 1) {
      usersCopy.splice(this.state.currentUser, 1);
      this.setState({users: usersCopy});
      if (this.state.currentUser !== 0) {
        this.setState({currentUser: this.state.currentUser - 1});
      }
    } else {
      alert('Oh no, your rolodex would be empty!')
    }

  }

  render() {
    return (
      <div className="main">
        <div className="header"><div className="homebutton">Home</div></div>
        <div className="content">
          <PageCounter userArr={this.state.users} currentUser={this.state.currentUser}/>
          <Slides user={this.state.users[this.state.currentUser]} />
          <Buttons 
          currentUser={this.state.currentUser} 
          nextUserFn={this.nextUser} 
          prevUserFn={this.prevUser} 
          deleteUserFn={this.deleteUser}/>
        </div>
      </div>

    )
  }
}

export default App;
