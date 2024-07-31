export const initialState = { count: 0, color: "black", background: "white" };

export const COUNT_TYPES = {
  increment: "INCREMENT",
  decrement: "DECREMENT",
  reset: "RESET",
  changeColor: "CHANGE_COLOR",
  changeBackground: "CHANGE_BACKGROUND",
};

export default function reducer(state, action) {
  const payload = action.payload !== undefined ? action.payload : 1;
  
  switch (action.type) {
    case COUNT_TYPES.increment:
      return { ...state, count: state.count + payload };
    case COUNT_TYPES.decrement:
      return { ...state, count: state.count - payload };
    case COUNT_TYPES.reset:
      return { ...state, count: 0 };
    case COUNT_TYPES.changeColor:
      return { ...state, color: action.payload };
    case COUNT_TYPES.changeBackground:
      return { ...state, background: action.payload };
    default:
      return state;
  }
}
