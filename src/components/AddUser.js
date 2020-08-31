import React from 'react';
import { connect } from 'react-redux';
import { addUsername } from '../actions';
import './styles/AddUser.css';

class AddUser extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    this.props.dispatch(addUsername(this.state.username));
  }

  render() {
    return (
      <div>
        <form
          className='addUser-form'
          onSubmit={(event) => this.handleClick(event)}
        >
          <img
            src={require('../pngegg.png')}
            class='img-fluid'
            alt='Responsive image'
          ></img>

          <input
            className='addUser-input'
            name='username'
            type='text'
            placeholder='Pick a username'
            value={this.state.username}
            onChange={this.handleChange.bind(this)}
            autoFocus
          />

          <button type='submit' className='btn btn-primary addUser-button'>
            Join chat
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(AddUser);
