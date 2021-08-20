import styled from "styled-components";
const CardComponentAll = (props) => {
  return (
    <CardBlock>
      <TypeAndStatus>
        <Type>
          <p>{props.text}</p>
        </Type>
        <Status>
          <p>{props.status}</p>
        </Status>
      </TypeAndStatus>
      <InfoHours>
        <p>{props.info}</p>
      </InfoHours>
    </CardBlock>
  );
};
const CardBlock = styled.div`
  margin-top: 10px;
  background: repeating-linear-gradient(
    45deg,
    white,
    white 13px,
    #f6f7f9 13px,
    #f6f7f9 25px
  );
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`;

const TypeAndStatus = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const InfoHours = styled.div`
  float: right;
  padding: 10px 20px;
`;

const Type = styled.div``;
const Status = styled.div``;
export default CardComponentAll;
