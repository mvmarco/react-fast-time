import { DATE, DAYSINMONTH, DAYSINWEEK, MONTHSINYEAR, WEEKSINYEAR } from "./constantsCalendar";

export const checkLeapYear = (year) => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

export const getMonthsDaysInYear = (year) => {
  return [
    31,
    checkLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
};

// Zeller's rule: finding the day of a particular date in the calendar in the history
const calcFirstDayofYear = (y, M = 0, k = 1) => {
  const m = ((M + 10) % 12) + 1;
  const D = (y % 100) - (m > 10 ? 1 : 0);
  const C = Math.floor(y / 100);
  const F =
    k +
    Math.floor((13 * m - 1) / 5) +
    D +
    Math.floor(D / 4) +
    Math.floor(C / 4) -
    2 * C;
  const T = F > 0 ? F : (F - (Math.floor(F) + 2) * 7) % 7;
  return T % 7;
};

export const generateDateGrid = (activeMonth) => {
  // 54 rows, weeks in a year that will be filled by the second function
  const dateGrid = Array.from({ length: WEEKSINYEAR }, (_) =>
    // 7 columns, days in a week
    Array.from({ length: DAYSINWEEK }, (_) => [1, false])
  );

  const startDayOfTheYear = calcFirstDayofYear(DATE.getFullYear())-1;//hint of making start of the week Monday instead of initial Sunday
  console.log(startDayOfTheYear)
  // To populate the first week of the grid
  for (let i = 0; i < startDayOfTheYear; i++) {
    dateGrid[0][i][0] = DAYSINMONTH[11] - (startDayOfTheYear - 1) + i;
  }

  let weekValue = 0,
    k = startDayOfTheYear;

  for(let i = 0; i < MONTHSINYEAR; i++) {
    for(let j = 0; j < DAYSINMONTH[i]; j++) {
      dateGrid[weekValue][k][0] = j+1;
      dateGrid[weekValue][k][1] = i === activeMonth;
      k++;
      if(k === DAYSINWEEK) {
        k = 0;
        weekValue++
      }
    }
  }

  // To populate the last row of the date grid
  for(let i = k; i < DAYSINWEEK; i++) {
    dateGrid[weekValue][i][0] = i - k + 1;
  };
  return dateGrid;

};