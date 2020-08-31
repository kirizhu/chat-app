import '../setupTests';
import React from 'react';
import AddUser from './AddUser';
import { shallow, mount } from 'enzyme';
import store from '../store';
import { Provider } from 'react-redux';

describe('AddUser', () => {
  it('should render my component', () => {
    shallow(
      <Provider store={store}>
        <AddUser />
      </Provider>
    );
  });
});
