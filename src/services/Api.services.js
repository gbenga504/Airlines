import * as endpoints from "./Endpoints";

/**
 * This function composes and returns a fetch promise
 *
 * @returns {Promise}
 * @param {object, object} param0
 */
const API = ({ config, endpoint }) => {
  let _config = config || {},
    header = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      ..._config
    };

  return fetch(`${endpoints.api.baseURL}${endpoint}`, header).then(response =>
    response.json()
  );
};

export default API;
