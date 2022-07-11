export const filterDayWeather = (dayList) => {
  return dayList?.filter((_, index) => index % 8 === 0);
};
