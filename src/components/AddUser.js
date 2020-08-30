import React from 'react';
import { connect } from 'react-redux';
import { receiveUsername } from '../actions/userAction';
import './styles/AddUser.css';
//TODO: functional component
class AddUser extends React.Component {
  //TODO: use hooks
  constructor() {
    super();
    this.state = {};
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    //TODO: use useDispatch
    this.props.dispatch(receiveUsername(this.state.username));
  }

  render() {
    return (
      <form
        className='addUser-form'
        onSubmit={(event) => this.handleClick(event)}
      >
        <p className='addUser-title'>Username</p>

        <input
          className='addUser-input'
          name='username'
          type='text'
          placeholder='Pick a username'
          value={this.state.username}
          //TODO: fix this
          onChange={this.handleChange.bind(this)}
          autoFocus
        />

        <button type='submit' className='btn btn-primary addUser-button'>
          Join chat
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(AddUser);
