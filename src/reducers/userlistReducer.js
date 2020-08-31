import { ADD_USERLIST } from '../actions';
export default function reducer(
  state = {
    userlist: [],
  },
  action
) {
  switch (action.type) {
    case ADD_USERLIST: {
      return {
        ...state,
        userlist: action.payload,
      };
    }
    default:
      return state;
  }
}
