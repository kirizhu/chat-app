import React from 'react';
import { connect } from 'react-redux';
import AddUser from './components/AddUser';

class App extends React.Component {
  render() {
    const username = this.props.user.username;
    const addUser = !username ? <AddUser /> : null;

    return <div>{addUser}</div>;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
