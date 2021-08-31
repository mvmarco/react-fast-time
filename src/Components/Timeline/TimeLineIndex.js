// react
import { useEffect, useState } from "react";
// components
import TimeLineComponent from "./TimeLineComponent";
// utils
import { HOURS } from "../../Utils/constantsHours";
import { DATE, MONTH } from "../../Utils/constantsCalendar";
// styled components
import styled from "styled-components";
// CSS
import "./Switch.css";

// framer motion
import { motion } from "framer-motion";
// icons
import { FaCheckCircle } from "react-icons/fa";
import { BsPlay } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

export default function TimeLineIndex() {
 
  // states
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  const [minutes, setMinutes] = useState(DATE.getMinutes());
  const [hours, setHours] = useState(DATE.getHours());
  const [isOn, setIsOn] = useState(false); // framer motion

  useEffect(() => {
    setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
    }, 1000);
  }, []);

  const toggleSwitch = () => setIsOn(!isOn);
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
          <IconsAndSwitchsContainer>
            <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
              <motion.div className="handle" layout transition={spring} />
            </div>
            <MenuDayWeek>
              <li className="day">
                <p style={{ color: "#02B396" }}>Dag</p>
              </li>
              <span
                style={{ fontSize: "20px", padding: "10px", color: "#d8d8d8" }}
              >
                {"|"}
              </span>

              <li className="week">
                <p>Uge</p>
              </li>
            </MenuDayWeek>

            {/* <BsPlay
              style={{
                color: "#02B396",
                fontSize: "2.9em",
              }}
            /> */}
            <FiPlusSquare
              style={{ color: "#02B396", fontSize: "2em", margin: "0px 6px" }}
            />
            <BsThreeDots style={{ color: "#02B396", fontSize: "2em" }} />
          </IconsAndSwitchsContainer>
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


 // consts framer motion
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

// STYLES
// MAIN DIV
const TimeLineIndexContainer = styled.div`
  height: 97.6vh;
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

// ICONS AND BUTTONS
const DateAndIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconsAndSwitchsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const MenuDayWeek = styled.ul`
  display: flex;
  align-items: center;
  margin: 0px 12px;
  li {
    float: left;
    list-style-type: none;
    p {
      font-weight: bolder;
      color: #c5c5c5;
    }
  }
`;


// TIMELINE
const MainTimeLineLine = styled.div`
  text-align: center;
  background-color: #c8c8c8;
  height: 1px;
  width: 100%;
  padding: 0px 20px;
  line-height: 20px;
  font-family: "Arial", sans-serif;
  font-size: 14px;
  text-decoration: none;
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
