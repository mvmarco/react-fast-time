import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const OverviewIndex = () => {
  // STATE
  const [selectedIndex, setselectedIndex] = useState(0);
  // DATA
  const tabsData = [
    {
      text: "All",
    },
    {
      text: "Overview",
    },
    {
      text: "Work Plan",
    },
  ];
  // FUNCTIONS
  const handleIndexSelection = (index) => {
    setselectedIndex(index);
  };
     
  return (
    <OverviewContainer>
        <TabsContainer>
          <Indicator
            style={{
              left: `${selectedIndex * 35}%`,
            }}
          />
          {tabsData.map((tab, index) => {
            return (
              <Tab
                style={{
                  color:
                    selectedIndex === index
                      ? "rgba(242,241,243,255)"
                      : "rgba(2,179,150,255)",
                }}
                onClick={() => handleIndexSelection(index)}
                key={tab.text}
              >
                <p style={{ zIndex: 100 }}>{tab.text}</p>
              </Tab>
            );
          })}
        </TabsContainer>
    </OverviewContainer>
  );
};

const OverviewContainer = styled.div`
  background-color: white;
  padding: 20px;
  margin-top: 10px;
  border-radius: 10px;
  height: 50%;
`;
const Indicator = styled.div`
  width: 30%;
  background-color: rgba(2, 179, 150, 255);
  position: absolute;
  /* z-index: -1; */
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
`;
const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`;

const Tab = styled.div`
  display: flex;
  width: 35%;
  background-color: rgba(242, 241, 243, 255);
  padding: 10px;
  justify-content: center;
  cursor: pointer;
`;
export default OverviewIndex;
