import styled from "styled-components";
const CalendarViewComponent = (props) => {
  return (
    <LineQuantityDiv>
      <hr></hr>
      {/* <GreenLine></GreenLine> */}
    </LineQuantityDiv>
  );
};

const LineQuantityDiv = styled.div`
  width: 100%;
  margin: auto;
  margin-right: 20px;
  text-align: center;
  color: #939393;
  font-size: 12px;
  &.hr {
    border: -1.9px solid;
  }
  position: relative;
`;

// GREENLINE
const GreenLine = styled.div`
 background-color: #31ee66;
 height: 2px;
 width: 100%;
 position: absolute;
 top: 2.5%;
`;

export default CalendarViewComponent;
