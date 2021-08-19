import styled from "styled-components";

const DayComponent = (props) => {
  return(
    <Day>
      <Title>
        {props.day}
      </Title>
      
    </Day>
  )
};

// STYLES
const Day = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  padding-right: 10px;
`;

const Title = styled.div`
  color: white;
`;

export default DayComponent;