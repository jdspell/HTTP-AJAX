import React from 'react';

export default class AddFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return(
            <form onSubmit={e => this.props.handleSubmit(e, this.state.name, this.state.age, this.state.email)}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Enter name here."
                    value={this.state.name} 
                    onChange={e => this.handleChange(e)}
                />

                <input 
                    type="text"
                    name="age"
                    placeholder="Enter age here."
                    value={this.state.age}
                    onChange={e => this.handleChange(e)}
                />

                <input 
                    type="text"
                    name="email"
                    placeholder="Enter email here."
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
                />
                <button type="submit" >Submit</button>
            </form>
        );
    }
}