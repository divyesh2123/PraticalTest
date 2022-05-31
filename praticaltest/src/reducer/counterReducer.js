import { INCREMENT, DECREMENT,RESET } from "../constans";

export default  (state = 0, { type, payload }) => {
  switch (type) {

  case INCREMENT:
    return state+1;
   case DECREMENT:
        return state-1;
    case RESET:
            return 0;

  default:
    return state
  }
}
