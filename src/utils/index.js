const MONTH = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};

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

/**
 * returns the full date with seconds, minute and hours
 *
 * @return {string}
 * @param {string} date
 */
export const getFullDate = timestamp => {
  let date = timestamp * 1000;

  return `${MONTH[new Date(date).getMonth()]} ${new Date(
    date
  ).getDate()} ${new Date(date).getFullYear()} at ${new Date(
    date
  ).getHours()}:${new Date(date).getMinutes()}:${new Date(date).getSeconds()}`;
};
