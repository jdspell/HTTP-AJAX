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

  addFriend = (e, friend) => {
    e.preventDefault();
    
    let newId = this.state.friends.length+1;
    
    const newFriend = {
      ...friend,
      id: newId
    }

    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => {
        this.setState({
          ...this.state,
          friends: response.data
        })
      })
      .catch(error => {
        console.log("Could not add new friend.")
      })
  }

  deleteFriend = (e, id) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(error => {
        console.log("Could not delete friend.")
      })
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={ props => <FriendsList {...props} friends={this.state.friends} deleteFriend={this.deleteFriend} />} />
        <Route path="/friend-form" render={ props => <AddFriend {...props} addFriend={this.addFriend} /> } />
      </div>
    );
  }
}

export default App;
