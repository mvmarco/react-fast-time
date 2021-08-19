import styled from "styled-components";
import CalendarComponent from "./CalendarComponent";
import DayComponent from "./DayComponent";
import { MONTH, DATE, WEEK } from "../../Utils/constantsCalendar";
import { useState } from "react";

export default function CalendarIndex() {
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  return (
    <CalendarContainer>
      <Nav>
        <h1>
          {MONTH[activeMonth]}{" "}
          <Year style={{ color: "white" }}>{DATE.getFullYear()}</Year>
        </h1>{" "}
        <Row>
          {WEEK.map((week, key) => (
            <DayComponent day={week} key={key} />
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

const Year = styled.span`
  font-weight: 100;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  /* border-bottom: 1px solid #c7c7c7; */
  height: 28px;
`;

const Wrapper = styled.div`
  width: 100%;
  overflow: scroll;
  height: 40vh;
  scroll-snap-type: proximity;
  scroll-snap-type: y proximity;
  margin-top: 20px; // problem
`;
;
// STYLES
const Nav = styled.div`
  color: rgba(4, 173, 147, 255);
  width: 100%;
  background-color: rgba(20, 97, 101, 255);
`;

const CalendarContainer = styled.div`
  color: rgb(53 128 131);
  background-color: rgba(20, 97, 101, 255);
`;
