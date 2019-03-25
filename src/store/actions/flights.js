import * as Types from "../types";
import API from "../../services/Api.services";
import { api } from "../../services/Endpoints";

export const fetchFlightsPending = () => ({
  type: Types.FETCH_FLIGHTS_PENDING
});

export const fetchFlightsFulfilled = flights => ({
  type: Types.FETCH_FLIGHTS_FULFILLED,
  flights
});

export const fetchFlightsError = error => ({
  type: Types.FETCH_FLIGHTS_ERROR,
  error
});

export const fetchFlights = (airport, isArrival, minutes) => dispatch => {
  dispatch(fetchFlightsPending());

  let end = Math.round(new Date().getTime() / 1000) - 24 * 3600,
    begin = end - Number(minutes) * 60;

  API({
    endpoint: `${
      isArrival ? api.arrivingFlights : api.departingFlights
    }?airport=${airport}&begin=${begin}&end=${end}`
  })
    .then(data => {
      dispatch(fetchFlightsFulfilled(data));
    })
    .catch(error => {
      dispatch(fetchFlightsError(error));
    });
};
