import { useState } from "react";
import styled from "styled-components";
import CardComponentAll from "./CardComponentAll";
import CardComponentOverview from "./CardComponentOverview";
import CardComponentWorkPlan from "./CardComponentWorkPlan";

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

  const cardsData = [
    {
      title: "All",
      text: "New Entry",
      status: "Draft",
      info: "Some date",
    },
    {
      title: "Overview",
      statusOne: "INVALID",
      statusTwo: "DRAFT",
      statusThree: "AWAITING APPROVAL",
    },
    {
      title: "Work Plan",
      hours: "Information not available yet",
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
      {cardsData.map((card, index) => {
        if (card.title === tabsData[0].text && selectedIndex === 0) {
          return (
            <CardComponentAll
              key={card.title}
              info={card.info}
              status={card.status}
              text={card.text}
            />
          );
        } else if (card.title === tabsData[1].text && selectedIndex === 1) {
          return (
            <CardComponentOverview
              key={card.title}
              statusOne={card.statusOne}
              statusTwo={card.statusTwo}
              statusThree={card.statusThree}
            />
          );
        } else if (card.title === tabsData[2].text && selectedIndex === 2) {
          return <CardComponentWorkPlan key={card.title} hours={card.hours} />;
        }
      })}
    </OverviewContainer>
  );
};

// STYLES
const OverviewContainer = styled.div`
  background-color: white;
  padding: 20px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  height: 49%;
`;
const Indicator = styled.div`
  width: 33%;
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

/////////////////////////////////////
const CardsContainer = styled.div`
  background-color: red;
  padding: 20px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  height: 25%;
`;

export default OverviewIndex;
