export function addMessage(data) {
  return {
    type: 'MESSAGE_ADD',
    payload: data,
  };
}
export function addUsername(data) {
  return {
    type: 'USERNAME_ADD',
    payload: data,
  };
}
export function addUsers(data) {
  return {
    type: 'USERLIST_ADD',
    payload: data,
  };
}
