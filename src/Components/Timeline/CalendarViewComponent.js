import styled from "styled-components";
import GreenCurrentTimeLine from "./GreenCurrentTimeLine";
import GreyHoursLine from "./GreyHoursLine";
const CalendarViewComponent = ({index, hours, minutes}) => {
  return (
    <LinesQuantityDiv>
      <GreyHoursLine />
      <GreenCurrentTimeLine index={index} hours={hours} minutes={minutes} />
    </LinesQuantityDiv>
  );
};

const LinesQuantityDiv = styled.div`
  width: 100%;
  margin: auto;
  margin-left: 0px;
  position: relative;
  margin-right: 20px;
`;



export default CalendarViewComponent;
