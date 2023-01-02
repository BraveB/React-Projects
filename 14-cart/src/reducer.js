const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };
    case "DECREASE":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, amount: item.amount - 1 }
              : item
          )
          .filter((item) => item.amount !== 0),
      };
    case "GET_TOTALS":
      const { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.amount += amount;
          cartTotal.total += price * amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      return { ...state, total: total.toFixed(2), amount };
    case "LOADING":
      return { ...state, loading: true };
    case "DISPLAY":
      return { ...state, loading: false, cart: action.payload };
    case "TOGGLE_AMOUNT":
      return {
        ...state,
        cart: state.cart
          .map((item) => {
            if (item.id === action.payload.id) {
              return action.payload.type === "inc"
                ? { ...item, amount: item.amount + 1 }
                : { ...item, amount: item.amount - 1 };
            }
            return item;
          })
          .filter((item) => item.amount !== 0),
      };
    default:
      return state;
  }
};
export default reducer;
