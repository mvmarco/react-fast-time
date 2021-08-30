// components
import CalendarIndex from "./Components/Calendar/CalendarIndex";
import OverviewIndex from "./Components/Overview/OverviewIndex";
import TimeLineIndex from "./Components/Timeline/TimeLineIndex";
// global style
import GlobalStyle from "./Styles/GlobalStyle";
// styled components
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <GlobalWrapper>
        <BoxOne>
          <CalendarIndex />
          <OverviewIndex />
        </BoxOne>
        <BoxTwo>
          <TimeLineIndex />
        </BoxTwo>
      </GlobalWrapper>
    </div>
  );
}

// STYLES
const GlobalWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: rgba(234, 234, 239, 255);
  padding: 10px; // issue
`;
const BoxOne = styled.div`
  width: 40%;
  height: 97.5vh;
`;

const BoxTwo = styled.div`
  width: 60%;
`;

export default App;
