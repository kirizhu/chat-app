import { ADD_MESSAGE } from '../actions';
export default function reducer(
  state = {
    messages: [],
  },
  action
) {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        messages: [...state.messages, action.payload],
      };
    }
    default:
      return state;
  }
}
