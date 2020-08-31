export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_USERNAME = 'ADD_USERNAME';
export const ADD_USERLIST = 'ADD_USERLIST';

export function addMessage(data) {
  return {
    type: ADD_MESSAGE,
    payload: data,
  };
}
export function addUsername(data) {
  return {
    type: ADD_USERNAME,
    payload: data,
  };
}
export function addUsers(data) {
  return {
    type: ADD_USERLIST,
    payload: data,
  };
}
