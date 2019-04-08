import React from 'react';
import { Link } from 'react-router-dom';

export default class AddFriend extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.match);
        this.state = {
            friend: (this.props.updateFriend ? {...this.props.selectedFriend} : {
                name: '',
                age: '',
                email: ''
            }),
        }
    }

    componentDidMount(){
        console.log(this.props.selectedFriend);
        if(this.props.update) {
            this.setState({friend: this.props.selectedFriend})
        }
    }


    componentDidUpdate(prevProps){
        if(this.props.selectedFriend && prevProps.selectedFriend !== this.props.selectedFriend){
            this.setState({
                friend: this.props.selectedFriend
            });
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

    handleSubmit = e => {
        if(this.props.selectedFriend) {
            this.props.update(e, this.state.friend);
        } else {
            this.props.addFriend(e, this.state.friend);
        }
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        });
    }

    render() {
        return(
            <div className="add-friend-form">
                <form onSubmit={this.handleSubmit}>
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