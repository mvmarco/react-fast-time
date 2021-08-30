// components
import GreenCurrentTimeLine from "./GreenCurrentTimeLine";
import GreyHoursLine from "./GreyHoursLine";
// styled components
import styled from "styled-components";

const CalendarViewComponent = ({index, hours, minutes}) => {
  return (
    <LinesQuantityDiv>
      <GreyHoursLine />
      <GreenCurrentTimeLine index={index} hours={hours} minutes={minutes} style={{
        
      }} />
    </LinesQuantityDiv>
  );
};

// STYLES
const LinesQuantityDiv = styled.div`
  width: 100%;
  margin: auto;
  margin-left: 0px;
  position: relative;
  margin-right: 20px;
`;



export default CalendarViewComponent;
