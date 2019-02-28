import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
        .then(response => {
          this.setState({
            friends: response.data
          });
        })
        .catch(error => {
          console.log("Unable to get data.");
        })
  }

  handleSubmit = (e, name, age, email) => {
    e.preventDefault();
    
    let newId = this.state.friends.length+1;
    
    const newFriend = {
      name,
      age,
      email,
      id: newId
    }

    axios
      .post('http://localhost:5000/friends', newFriend)
        .then(response => {
          console.log("Added new friend.")
        })
        .catch(error => {
          console.log("Could not add new friend.")
        })
        
    this.setState({
      ...this.state,
      friends: [...this.state.friends, newFriend]
    });
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={ props => <FriendsList {...props} friends={this.state.friends} />} />
        <Route path="/" render={ props => <AddFriend {...props} handleSubmit={this.handleSubmit} />} />
      </div>
    );
  }
}

export default App;
