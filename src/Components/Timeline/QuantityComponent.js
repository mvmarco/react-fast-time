import { printIntrospectionSchema } from "graphql";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { DATE } from "../../Utils/constantsCalendar";

const QuantityComponent = ({ index,hours,minutes }) => {
 
  console.log("INDEXXXXXXXXX",index);
  console.log("MINUTESSSSSSS", minutes);
  const ratio = minutes / 60;
  const topValue = 54 * ratio;
  
  return (
    <LineQuantityDiv>
      <hr></hr>
      {index === hours && (
        <GreenLine
          style={{
            top: `${topValue}px`,
          }}
        ></GreenLine>
      )}
    </LineQuantityDiv>
  );
};

const LineQuantityDiv = styled.div`
  width: 100%;
  margin: auto;
  margin-left: 0px;
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
  top: 54px;
  z-index: 99;
`;

export default QuantityComponent;
