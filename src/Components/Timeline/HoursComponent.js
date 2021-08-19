import styled from "styled-components";
import CalendarViewComponent from "./CalendarViewComponent";
import QuantityComponent from "./QuantityComponent";
const HoursComponent = (props) => {
  return (
    <TimeBlock>
      <Container style={{ marginRight: "10px" }}>
        <Times>{props.hour}</Times>
        <QuantityComponent />
      </Container>
      <Container>
        <CalendarViewComponent />
      </Container>
    </TimeBlock>
  );
};

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

export default HoursComponent;
