const initialState = {
  amount: "",
};

const mainReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "AMOUNT":
      return { amount: action.amount };
    default:
      return state;
  }
};

export default mainReducer;
