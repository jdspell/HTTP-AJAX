import React from 'react';
import { Link } from 'react-router-dom';

export default class AddFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            },
        }
    }

    handleChange = e => {
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [e.target.name]: e.target.value,
            }
        }));
    }

    render() {
        return(
            <div className="add-friend-form">
                <form onSubmit={e => this.props.addFriend(e, this.state.friend)}>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter name here."
                        value={this.state.friend.name} 
                        onChange={e => this.handleChange(e)}
                    />

                    <input 
                        type="text"
                        name="age"
                        placeholder="Enter age here."
                        value={this.state.friend.age}
                        onChange={e => this.handleChange(e)}
                    />

                    <input 
                        type="text"
                        name="email"
                        placeholder="Enter email here."
                        value={this.state.friend.email}
                        onChange={e => this.handleChange(e)}
                    />
                    <button type="submit" >Submit</button>
                </form>
                <Link to="/">Go back to friends list.</Link>
            </div>
        );
    }
}