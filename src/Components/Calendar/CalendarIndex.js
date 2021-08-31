import styled from "styled-components";
import CalendarComponent from "./CalendarComponent";
import DaysOfTheWeekComponent from "./DaysOfTheWeekComponent";
import { MONTH, DATE, WEEK } from "../../Utils/constantsCalendar";
import { useState } from "react";

export default function CalendarIndex() {
  // FROM 0 TO 11, CURRENT MONTH
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  return (
    <CalendarContainer>
      <Nav>
        <h1>
          {MONTH[activeMonth]}{" "}
          <Year style={{ color: "white" }}>{DATE.getFullYear()}</Year>
        </h1>{" "}
        <Row>
          {WEEK.map((dayOfTheWeek, key) => (
            <DaysOfTheWeekComponent dayOfTheWeek={dayOfTheWeek} key={key} />
          ))}
        </Row>
      </Nav>

      <Wrapper>
        <CalendarComponent
          setActiveMonth={setActiveMonth}
          activeMonth={activeMonth}
        />
      </Wrapper>
    </CalendarContainer>
  );
}

// STYLES

// NAV SECTION
const CalendarContainer = styled.div`
  color: rgb(53 128 131);
  background-color: rgba(20, 97, 101, 255);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  height: 50%;
`;
const Nav = styled.div`
  color: rgba(4, 173, 147, 255);
  width: 100%;
  background-color: rgba(20, 97, 101, 255);
  height: 20%;
`;

const Year = styled.span`
  font-weight: 100;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  /* border-bottom: 1px solid #c7c7c7; */
  height: 28px;
`;

// CALENDAR ITSELF
const Wrapper = styled.div`
  width: 100%;
  overflow: scroll;
  height: calc(80% - 20px);
  scroll-snap-type: proximity;
  scroll-snap-type: y proximity;
  margin-top: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
