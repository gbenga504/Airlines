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

export const fetchCities = () => dispatch => {
  dispatch(fetchCitiesPending());

  API({ endpoint: api.cities })
    .then(data => {
      dispatch(fetchCitiesFulfilled(data));
    })
    .catch(error => dispatch(fetchCitiesError(error)));
};
