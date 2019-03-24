import * as Types from "../types";

const initialState = {
  loading: false,
  error: null,
  data: []
};

export const flights = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_FLIGHTS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
        data: state.data || []
      };
    case Types.FETCH_FLIGHTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        data: state.data || []
      };
    case Types.FETCH_FLIGHTS_FULFILLED:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.flights
      };
    default:
      return state;
  }
};
