export const incrementCount = (product) => {
    return {
        type: "INCREMENT_COUNT",
        payload: { name: product },
    };
};

export const decrementCount = (product) => {
    return {
        type: "DECREMENT_COUNT",
        payload: { name: product },
    };
};
export const deleteCar = (name) => {
    return {
      type: "DELETE_CAR",
      payload: { name }
    };
  };

  export const clearCart = () => {
    return {
      type: 'CLEAR_CART'
    };
  };