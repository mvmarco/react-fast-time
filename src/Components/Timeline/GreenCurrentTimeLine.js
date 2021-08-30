import styled from "styled-components";

const GreenCurrentTimeLine = ({ index, hours, minutes }) => {
  // consts
  const ratio = minutes / 60; 
  const topValue = 54 * ratio; // 54 in the height of the GreenLine Div
  return (
    <>
      {index === hours && (
        <GreenLine
          index={index}
          hours={hours}
          minutes={minutes}
          style={{
            top: `${topValue}px`,
          }}
        ></GreenLine>
      )}
    </>
  );
};
const GreenLine = styled.div`
  background-color: #02b396;
  height: 2px;
  width: 100%;
  position: absolute;
  top: 54px;
  z-index: 99;
`;
export default GreenCurrentTimeLine;
