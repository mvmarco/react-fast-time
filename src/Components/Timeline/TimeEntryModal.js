// react
import { useRef, useEffect, useCallback, useState } from 'react';
// animation spring
import { animated, Transition, useSpring } from 'react-spring';
import { AnimateSharedLayout } from 'framer-motion';
// styled components
import styled from 'styled-components';
// framer motion
import { motion } from 'framer-motion';
// icons
import { MdClose } from 'react-icons/md';
// components
import TemplateItem from './TemplateItem';
import SearchBar from './SearchBar';

const TimeEntryModal = ({ showModal, setShowModal }) => {
  // STATES
   const [selected, setSelected] = useState('');
  const [reportingTemplates, setReportingTemplates] = useState([]);
  // USEREF
  const modalRef = useRef();
  // ANIMATION MODAL
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  // CLOSING MODAL FROM BACKGROUND
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  // CLOSING MODAL WITH ESCAPE BUTTON
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const variants = {
    hidden: {
      y: '-100vh',
    },
    visible: { y: 0, transition: { ease: 'easeInOut', duration: 1 } },
    exit: {
      y: '-100vh',
    },
  };
  const colorsData = [
    '#86d8bda1',
    '#eb472a83',
    '#8fcfe3ad',
    '#db8ddfb0',
    '#e8e46fc0',
    '#e1aa66b2',
    
  ];

  // FETCHES

  useEffect(() => {
    getTemplates();
  }, []);

  const url = 'http://localhost:8080/graphql';

  const getTemplates = async () => {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query {
                    reportingTemplates {
                      name
                      _id
                      colorScheme
                      reportingContext
                    }
                  }`,
        }),
      });
      const data = await res.json();
       const dataWithColors = data.data.reportingTemplates.map((obj, i) => ({...obj, color: colorsData[i]}) )
       setReportingTemplates(dataWithColors);
       setSelected(dataWithColors[0].color)
      console.log('data', dataWithColors);
    } catch (err) {
      console.log('ERROR', err);
    }
  };

  console.log('data state', reportingTemplates)

  return (
    <Background ref={modalRef} onClick={closeModal}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ModalWrapper>
          <ModalContent>
            <Nav>
              <h3>New Entry Tirsdag 2. Sep </h3>
            </Nav>
            <ModalColumns>
              <ColumnOne>
                <TemplatesContainer>
                  <AnimateSharedLayout>
                    <Templates>
                      {reportingTemplates.map((template) => (
                        <TemplateItem
                          key={template.name}
                          color={template.color}
                          title={template.name}
                          isSelected={selected === template.color}
                          onClick={() => setSelected(template.color)}
                        />
                      ))}
                    </Templates>
                  </AnimateSharedLayout>
                </TemplatesContainer>
                <InformationBlock>
                  <h4>Information</h4>
                </InformationBlock>
                <DurationIntervalBlock>
                  <h4>Quantity/Interval</h4>
                </DurationIntervalBlock>
              </ColumnOne>

              <ColumnTwo>
                <SearchBar />
                <Recent>
                  <h4>Recent</h4>
                </Recent>
                <Favourites>
                  <h4>Favourites</h4>
                </Favourites>
              </ColumnTwo>
            </ModalColumns>
          </ModalContent>
          <CloseModalButton
            aria-label="Close Modal"
            onClick={() => setShowModal((prev) => !prev)}
          />
          <Footer>
            <DeleteBlock>
              <p> Delete </p>
            </DeleteBlock>
            <CancelNSaveBlock>
              <Cancel>
                <p> Cancel </p>
              </Cancel>
              <SaveNClose>
                <p> Save and close </p>
              </SaveNClose>
              <SaveNAdd>
                <p> Save and add another </p>
              </SaveNAdd>
            </CancelNSaveBlock>
          </Footer>
        </ModalWrapper>
      </motion.div>
    </Background>
  );
};

// STYLES
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
const ModalWrapper = styled.div`
  width: 1300px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 10px;
`;
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

// MODAL CONTENT
const ModalContent = styled.div`
  padding: 20px;
  position: relative;
`;

// NAV
const Nav = styled.div``;

const ModalColumns = styled.div`
  padding: 10px 0px;
  display: flex;
`;

// COLUMN ONE
const ColumnOne = styled.div`
  width: 50%;
`;
const TemplatesContainer = styled.div``;

const Templates = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: initial;
  justify-content: center;
`;

const InformationBlock = styled.div``;

const DurationIntervalBlock = styled.div``;

// COLUMN TWO
const ColumnTwo = styled.div`
  width: 50%;
`;

const Recent = styled.div`
  background-color: #f6f6f9;
  border: 1px solid #c5c5c5;
  border-radius: 20px;
`;

const Favourites = styled.div`
  background-color: #f6f6f9;
  border: 1px solid #c5c5c5;
  border-radius: 20px;
`;

// FOOTER
const Footer = styled.div`
  display: flex;
  position: fixed;
  padding: 0 20px;
  background-color: black;
  bottom: 10px;
  /* text-align: center; */
 width: 100%;
`;

const DeleteBlock = styled.div`

  color: #fb423a;
`;

const CancelNSaveBlock = styled.div`
  display: flex;
  margin-left: auto;

`;
// const [{name:"cancel", color func: ()=>sdasd }, "sada", "asdasd"]



const Cancel = styled.div`
  color: #02b396;
  margin-right: 40px;
`;
const SaveNClose = styled.div`
  font-weight: bolder;
  color: #02b396;
  margin-right: 40px;
`;
const SaveNAdd = styled.div`
  font-weight: bolder;
  color: #02b396;
`;

export default TimeEntryModal;
