import '../setupTests';
import React from 'react';
import Chat from './Chat';
import { shallow, mount } from 'enzyme';
import store from '../store';
import { Provider } from 'react-redux';

describe('Chat', () => {
  it('should render my component', () => {
    shallow(
      <Provider store={store}>
        <Chat />
      </Provider>
    );
  });
});
