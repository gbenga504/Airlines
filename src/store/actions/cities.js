import * as Types from "../types";
import API from "../../services/Api.services";
import { api } from "../../services/Endpoints";

export const fetchCitiesPending = () => ({
  type: Types.FETCH_CITIES_PENDING
});

export const fetchCitiesFulfilled = cities => ({
  type: Types.FETCH_CITIES_FULFILLED,
  cities
});

export const fetchCitiesError = error => ({
  type: Types.FETCH_CITIES_ERROR,
  error
});

export const fetchCities = backgroundUpdate => dispatch => {
  !backgroundUpdate && dispatch(fetchCitiesPending());

  //this assumes that we are a day ahead and tries to get the flights based on an hour before
  //the end time
  let end = Math.round(new Date().getTime() / 1000) - 24 * 3600,
    begin = end - 60 * 60;

  API({
    endpoint: `${api.allFlights}?begin=${begin}&end=${end}`
  })
    .then(data => {
      dispatch(fetchCitiesFulfilled(data));
    })
    .catch(error => dispatch(fetchCitiesError(error)));
};
