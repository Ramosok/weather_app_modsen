import moment from "moment";

export const mapingDayforWeek = (dayIndex) => {
  return moment().add([dayIndex], "days").calendar().split(" ")[0];
};
