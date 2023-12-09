const defaultState = {
    carList: [],
  };
  
  const findIndexByName = (arr, name) => {
    return arr.findIndex((item) => item.name === name);
  };
  
  export const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_CAR":
        const foundIndex = findIndexByName(state.carList, action.payload.name);
        if (foundIndex === -1) {
          return { ...state, carList: [...state.carList, action.payload] };
        } else {
          const updatedCarArr = [...state.carList];
          updatedCarArr[foundIndex] = {
            ...updatedCarArr[foundIndex],
            count: updatedCarArr[foundIndex].count + 1,
          };
          return { ...state, carList: updatedCarArr };
        }
  
      case "INCREMENT_COUNT":
        return {
          ...state,
          carList: state.carList.map((product) => {
            if (product.name === action.payload.name) {
              return { ...product, count: product.count + 1 };
            }
            return product;
          }),
        };
  
        case "DELETE_CAR":
          const updatedCarList = state.carList.filter((product) => product.name !== action.payload.name);
          return { ...state, carList: updatedCarList };
  
      case "DECREMENT_COUNT":
        return {
          ...state,
          carList: state.carList.map((product) => {
            if (product.name === action.payload.name && product.count > 0) {
              return { ...product, count: product.count - 1 };
            }
            return product;
          }),
        };
  
      default:
        return state;
    }
  };
  