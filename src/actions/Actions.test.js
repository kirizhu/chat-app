import React from 'react';

import {
  ADD_MESSAGE,
  ADD_USERLIST,
  ADD_USERNAME,
  addMessage,
  addUsername,
  addUsers,
} from '.';

describe('actions', () => {
  it('should create an action to add a Username', () => {
    const payload = 'Eddy';
    const expectedAction = {
      type: ADD_USERNAME,
      payload,
    };
    expect(addUsername(payload)).toEqual(expectedAction);
  });
});
describe('actions', () => {
  it('should create an action to add to the UserList', () => {
    const payload = ['Eddy', 'Sussi'];
    const expectedAction = {
      type: ADD_USERLIST,
      payload,
    };
    expect(addUsers(payload)).toEqual(expectedAction);
  });
});
describe('actions', () => {
  it('should create an action to add a Username', () => {
    const payload = 'Message';
    const expectedAction = {
      type: ADD_MESSAGE,
      payload,
    };
    expect(addMessage(payload)).toEqual(expectedAction);
  });
});
