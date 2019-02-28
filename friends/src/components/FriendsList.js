import React from 'react';

export default class FriendsList extends React.Component {
    render() {
        return(
            <div className="friends">
                {this.props.friends.map(friend => (
                    <div key={friend.id} className="friend">
                        <p>{`Name: ${friend.name}`}</p>
                        <p>{`Age: ${friend.age}`}</p>
                        <p>{`Email: ${friend.email}`}</p>
                    </div>
                ))}
            </div>
        );
    }
}