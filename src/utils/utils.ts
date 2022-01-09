import moment from "moment";

export function sortByCategory(array: []) {}
export const isUserLoggedIn = () => {
  return false;
};

export const numberOfNights = (date1: any, date2: any) => {
  // let timeDiff = Math.abs(date2.getTime() - date1.getTime());
  // let numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
  let d1 = moment(date1);
  let d2 = moment(date2);
  // return numberOfNights;
  return Math.floor(moment.duration(d2.diff(d1)).asDays());
};
