import React from 'react';
import { Link } from 'react-router-dom';

export default class FriendsList extends React.Component {
    render() {
        return(
            <div className="friends">
                {this.props.friends.map(friend => (
                    <div key={friend.id} className="friend">
                        <p>{`Name: ${friend.name}`}</p>
                        <p>{`Age: ${friend.age}`}</p>
                        <p>{`Email: ${friend.email}`}</p>
                        <button onClick={e => this.props.deleteFriend(e, friend.id)}>Delete</button>
                    </div>
                ))}
                <Link to="/friend-form">Add a friend!</Link>
            </div>
        );
    }
}