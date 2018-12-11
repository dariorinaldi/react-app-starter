const initialState = {
  isLoading: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'LOADING_REQUEST_SUCCESS':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default appReducer;
