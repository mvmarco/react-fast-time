import { getMonthsDaysInYear } from "./dateUtils";

export const DATE = new Date();
export const WEEK = ["M", "T", "O", "T", "F", "L", "S"];
export const MONTH = [
  "Januar",
  "Februar",
  "Marts",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "December",
];

export const WEEKSINYEAR = 54;
export const MONTHSINYEAR = 12;
export const DAYSINWEEK = 7;
export const DAYSINMONTH = getMonthsDaysInYear(DATE.getFullYear);
console.log("DAYS IN MONTH:", DAYSINMONTH);