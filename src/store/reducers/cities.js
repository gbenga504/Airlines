import * as Types from "../types";

const initialState = {
  loading: false,
  error: null,
  data: {}
};

export const cities = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_CITIES_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
        data: state.data || {}
      };
    case Types.FETCH_CITIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        data: state.data || {}
      };
    case Types.FETCH_CITIES_FULFILLED:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.cities
      };
    default:
      return state;
  }
};
