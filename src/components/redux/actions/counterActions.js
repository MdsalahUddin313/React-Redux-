import { INCREMENT, DECREMENT, RESET } from "../constants/counterconstants";
export const incremetCounter = () => {
  return {
    type: INCREMENT,
  };
};
export const decremetCounter = () => {
  return {
    type: DECREMENT,
  };
};
export const resetCounter = () => {
  return {
    type: RESET,
  };
};
