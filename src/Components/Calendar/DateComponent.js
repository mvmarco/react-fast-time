import styled from "styled-components";
import { DATE, MONTH } from "../../Utils/constantsCalendar";

const DateComponent = ({ value, day, month, active }) => {
  //STATES

  // FUNCTIONS
  function checkActive() {
    if (value === DATE.getDate() && month > 0) {
      if (month - 1 === DATE.getMonth()) {
        //0-11
        console.log({ value, day, month, active, DATE: DATE.getDate() });
        return true;
      }
    }
    return false;
  }

  function switchToActive(e) {
    console.log(e.currentTarget)
  }
  console.log('check active:', active );
  return (
    <Date
      className={`${day === 6 ? "sunday" : ""} ${active ? "active-month" : ""}`}
    >
      <DateBox>
        <Text onClick={switchToActive} className={checkActive() ? "active" : ""}>{value}</Text>
        {value === 1 ? (
          <Month
            className={DATE.getMonth() === month - 1 ? "month-active" : ""}
          >
            {MONTH[month - 1] && MONTH[month - 1].substr(0, 0)}
          </Month>
        ) : null}
      </DateBox>
    </Date>
  );
};
// STYLES 820: active and sunday need to work, error in console
const Date = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 80px;
  // borders around days of the month
  /* border-right: 1px solid #e6e5e6;
  border-bottom: 1px solid #e6e5e6; */
  padding: 0px 10px 0px 0px;
  box-sizing: border-box;
  background-color: #196262;
  &:last-child {
    border-right: 0;
  }
  &.sunday {
    /* background-color: #217373;  */
  }
  &.active-month {
    transition: color 0.3s ease-in;
    color: rgba(136, 174, 180, 255);
  }
`;

const DateBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  height: 28px;
  width: 28px;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 20px;

  &.active {
    background-color: rgba(2, 179, 150, 255);
    text-align: center;
    border-radius: 16px;
    color: rgba(163, 228, 218, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
`;

const Month = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
`;
/* .month-active {
    padding: 0 4px;
  }; */

export default DateComponent;
