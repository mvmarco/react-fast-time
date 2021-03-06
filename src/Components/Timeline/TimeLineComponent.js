// styled components
import { useState } from "react";
import styled from "styled-components";
// components
import CalendarViewComponent from "./CalendarViewComponent";
import QuantityComponent from "./QuantityComponent";

const TimeLineComponent = (props) => {
  return (
    <TimeBlock>
      <Container style={{ marginRight: "10px" }}>
        <Times>{props.hour}</Times>
        <QuantityComponent
          hours={props.hours}
          minutes={props.minutes}
          index={props.index}
          showDot={true}
        />
      </Container>
      <Container>
        <CalendarViewComponent
          hours={props.hours}
          minutes={props.minutes}
          index={props.index}
          showDot={false}
        />
      </Container>
    </TimeBlock>
  );
};

//STYLES
const TimeBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Times = styled.div`
  text-align: center;
  color: #939393;
  padding: 20px;
  font-size: 12px;
`;

const Container = styled.div`
  display: flex;
  width: 48%;
`;

export default TimeLineComponent;
