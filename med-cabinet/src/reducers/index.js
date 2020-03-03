//test reducer to initialize store

const initialState = {
    isLoading: false,
    smurf: null,
    error: ""
  };
  
  export const reducer = (state = initialState, action) => {
    // switch (action.type) {
    //   case "FETCHING_SMURF_START":
    //     return {
    //       ...state,
    //       isLoading: true
    //     };
    //   case "FETCHING_SMURF_SUCCESS":
    //     return {
    //       ...state,
    //       isLoading: false,
    //       smurf: action.payload
    //     };
    //   case "FETCHING_SMURF_FAILED":
    //     return {
    //       ...state,
    //       isLoading: false,
    //       error: action.payload
    //     };
    //   default:
    //     return state;
    // }
  };