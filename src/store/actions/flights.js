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
  let time = new Date(),
    end = time.getTime() / 1000,
    begin = end - Number(minutes) * 60,
    _airport = isArrival ? airport : airport.toUpperCase();

  API({
    endpoint: `${
      isArrival ? api.arrivingFlights : api.departingFlights
    }?airport=${_airport}&begin=${parseInt(begin)}&end=${parseInt(end)}`
  })
    .then(data => {
      dispatch(fetchFlightsFulfilled(data));
    })
    .catch(error => {
      dispatch(fetchFlightsError(error));
    });
};
