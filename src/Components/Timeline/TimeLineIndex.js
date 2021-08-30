// react
import { useEffect, useState } from "react";
// components
import TimeLineComponent from "./TimeLineComponent";
// utils
import { HOURS } from "../../Utils/constantsHours";
import { DATE, MONTH } from "../../Utils/constantsCalendar";
// styled components
import styled from "styled-components";
// icons
import { FaCheckCircle } from "react-icons/fa";
import { BsPlay } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

export default function TimeLineIndex() {
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  const [minutes, setMinutes] = useState(DATE.getMinutes());
  const [hours, setHours] = useState(DATE.getHours());

  useEffect(() => {
    setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
    }, 1000);
  }, []);

  return (
    <TimeLineIndexContainer>
      <Nav>
        <DateAndIcons>
          <DateContainer>
            <FaCheckCircle style={{ color: "#02B396", fontSize: "1.9em" }} />
            <h1>
              {` ${DATE.getUTCDate()} ${
                MONTH[activeMonth]
              } ${DATE.getFullYear()}`}
            </h1>
          </DateContainer>
          <IconsContainer>
            <BsPlay
              style={{
                color: "#02B396",
                fontSize: "2.9em",
              }}
            />
            <FiPlusSquare
              style={{ color: "#02B396", fontSize: "2em", marginRight: "13px" }}
            />
            <p
              style={{
                fontSize: "2em",
                fontWeight: "lighter",
                color: "#d5d5d5",
              }}
            >
              {" "}
              | 
            </p>
            <BsThreeDots style={{ color: "#02B396", fontSize: "2em" }} />
          </IconsContainer>
        </DateAndIcons>
        <MainTimeLineLine></MainTimeLineLine>
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
          <TimeLineComponent
            hours={hours}
            minutes={minutes}
            hour={hour}
            index={key}
            key={key}
          />
        ))}
      </TimeLineContainer>
    </TimeLineIndexContainer>
  );
}

// STYLES
// MAIN DIV
const TimeLineIndexContainer = styled.div`
  height: 97.6vh;
  margin-left: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

// FIRST SECTION NAV
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

const DateContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MainTimeLineLine = styled.div`
  text-align: center;
  background-color: #c8c8c8;
  height: 1px;
  width: 100%;
`;

// CARDS
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 20px 20px;
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

// TIMELINE CONTAINER
const TimeLineContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 82vh;
  overflow: scroll;
  scroll-snap-type: proximity;
  scroll-snap-type: y proximity;
  flex: 1;
  position: relative;
  padding-bottom: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
