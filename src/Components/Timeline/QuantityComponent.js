// react
import { useEffect, useState } from "react";
// styled components
import styled from "styled-components";
import GreenCurrentTimeLine from "./GreenCurrentTimeLine";
// components
import GreyHoursLine from "./GreyHoursLine";

const QuantityComponent = ({ index, hours, minutes }) => {
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
`;

export default QuantityComponent;
