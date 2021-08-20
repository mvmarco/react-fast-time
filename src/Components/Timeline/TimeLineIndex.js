import HoursComponent from "./HoursComponent";
import styled from "styled-components";
import { HOURS } from "../../Utils/constantsHours";
import { useState } from "react";
import { DATE, MONTH } from "../../Utils/constantsCalendar";

export default function TimeLineIndex() {
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());

  return (
    <TimeLineIndexContainer>
      <Nav>
        <DateAndIcons>
          <h1>
            
            {` ${DATE.getUTCDate()} ${
              MONTH[activeMonth]
            } ${DATE.getFullYear()}`}
          </h1>
          <h1> X X {" | "} X</h1>
        </DateAndIcons>
        <MainTimeLineLine>
          <hr></hr>
        </MainTimeLineLine>
      </Nav>
      <Cards>
        <TimeEntry>
          <div className="title">
            <h4 style={{ color: "black", fontWeight: "normal" }}>Time Entry</h4>
          </div>
          <div className="intervalQuantity">
            <h4>Interval/Quantity</h4>
          </div>
        </TimeEntry>
        <Calendar>
          <div className="calendarOption">
            <h4>Calendar</h4>
          </div>
          <div className="suggestions">
            <h4>Mærkedagskalender</h4>
          </div>
        </Calendar>
      </Cards>
      <TimeLineContainer>
        {HOURS.map((hour, key) => (
          <HoursComponent hour={hour} key={key} />
        ))}
      </TimeLineContainer>
    </TimeLineIndexContainer>
  );
}
// STYLES

const TimeLineIndexContainer = styled.div`
  height: 98vh;
  margin-left: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;
const Nav = styled.div`
  background-color: white;
  width: 100%;
  color: #20b295;
  /* background-color: #196262; */
  color: black;
  padding: 0px 20px;
`;
const DateAndIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MainTimeLineLine = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  font-size: 12px;
  &.hr {
    border: -1.9px solid;
  }
`;

const TimeLineContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 81vh;
  overflow: scroll;
  scroll-snap-type: proximity;
  scroll-snap-type: y proximity;
  flex: 1;
`;

///////////////////////////////////////
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-left: 0px;
  background-color: white;
`;
const TimeEntry = styled.div`
  display: flex;
  justify-content: space-between;
  width: 49%;
  padding: 20px;
  background-color: #f2f1f3;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  color: #20b295;
`;
const Calendar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 48%;
  padding: 20px;
  background-color: #f2f1f3;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  color: #20b295;
`;
