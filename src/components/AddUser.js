import React from 'react';
import { connect } from 'react-redux';
import { receiveUsername } from '../actions/userActions';
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
      <form style={styles.form} onSubmit={(event) => this.handleClick(event)}>
        <p style={styles.title}>Username</p>

        <input
          style={styles.input}
          name='username'
          type='text'
          placeholder='Pick a username'
          value={this.state.username}
          //TODO: fix this
          onChange={this.handleChange.bind(this)}
          autoFocus
        />

        <button style={styles.button} type='submit' className='btn btn-primary'>
          Join chat
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(AddUser);
