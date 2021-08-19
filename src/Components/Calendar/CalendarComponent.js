import { DAYSINWEEK, WEEKSINYEAR } from "../../Utils/constantsCalendar";
import { generateDateGrid } from "../../Utils/dateutils";
import DateComponent from "./DateComponent";
import MonthComponent from "./MonthComponent";
import styled from "styled-components";
import { useEffect, useState } from "react";

const CalendarComponent = ({ setActiveMonth, activeMonth }) => {
  // const [monthInViewport, setMonthInViewport] = useState(2);
  // setActiveMonth(monthInViewport);
  const [monthRowFunction, setMonthRowFunction] = useState([]);
  useEffect(() => {
    const dateGrid = generateDateGrid(activeMonth);

    const firstDayInMonth = [];
    const weekRowValue = [];

    //from 0 to 54
    console.log(dateGrid);
    for (let weekIndex = 0; weekIndex < WEEKSINYEAR; weekIndex++) {
      let weekRow = [];
      // from 0 to 7
      for (let dayIndex = 0; dayIndex < DAYSINWEEK; dayIndex++) {
        if (dateGrid[weekIndex][dayIndex][0] === 1) {
          firstDayInMonth.push(weekIndex);
        }
        weekRow.push(
          <DateComponent
            key={dayIndex + "" + firstDayInMonth.length}
            value={dateGrid[weekIndex][dayIndex][0]}
            day={dayIndex}
            month={firstDayInMonth.length}
            active={dateGrid[weekIndex][dayIndex][1]}
          />
        );
      }
      weekRowValue.push(<Week key={weekIndex}>{weekRow}</Week>);
    }

    let currentMonth = 1,
      monthRow = [];

    const newMonthRowFunction = Array(WEEKSINYEAR)
      .fill(1)
      .map((val, index) => {
        if (index && index === firstDayInMonth[currentMonth]) {
          const monthValue = (
            <MonthComponent
              key={index}
              mid={currentMonth - 1}
              onVisible={setActiveMonth}
              activeMonth={activeMonth}
            >
              {monthRow}
            </MonthComponent>
          );
          currentMonth++;
          monthRow = [weekRowValue[index]];
          return monthValue;
        } else {
          monthRow.push(weekRowValue[index]);
        }
      });
    setMonthRowFunction(newMonthRowFunction);
  }, []);

  return monthRowFunction;
};

// STYLES
const Week = styled.div`
  display: flex;
  scroll-snap-align: start;
`;

export default CalendarComponent;
