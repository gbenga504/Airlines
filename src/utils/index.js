/**
 * returns the time
 *
 * @return {string}
 * @param {string} date
 */
export const getDate = timestamp => {
  let date = timestamp * 1000;

  return `${new Date(date).getHours()}:${new Date(
    date
  ).getMinutes()}:${new Date(date).getSeconds()}`;
};
