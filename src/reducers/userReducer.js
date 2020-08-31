import { ADD_USERNAME } from '../actions';
export default function reducer(
  state = {
    username: null,
  },
  action
) {
  switch (action.type) {
    case ADD_USERNAME: {
      return {
        ...state,
        username: action.payload,
      };
    }
    default:
      return state;
  }
}
