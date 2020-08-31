import '../setupTests';
import React from 'react';
import Messages from './Messages';
import { shallow, mount } from 'enzyme';
import store from '../store';
import { Provider } from 'react-redux';

describe('Chat', () => {
  it('should render my component', () => {
    shallow(
      <Provider store={store}>
        <Messages />
      </Provider>
    );
  });
});
