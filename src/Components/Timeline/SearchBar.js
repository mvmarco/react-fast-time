// react
import { useState, useEffect, useRef } from "react";
// styled components
import styled from "styled-components";
// framer motion
import { motion, AnimatePresence } from "framer-motion";
// moon loader, spinner
import MoonLoader from "react-spinners/MoonLoader";
// isOutisideClick
import { useClickOutside } from "react-click-outside-hook";
// icons
import { IoSearch, IoClose } from "react-icons/io5";

const SearchBar = () => {
  // CONSTS
  const containerVariants = {
    expanded: {
      height: "30em",
    },
    collapsed: {
      height: "3.8em", // same as the default in SearchBarContainer
    },
  };

  const containerTransition = { type: "spring", damping: 22, stiffnes: 150 };
  // STATES
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside(); // if you click outside of the ref isClickedOutside becomes true
  const inputRef = useRef();
  // FUNCTIONS
  const expandContainer = () => {
    setExpanded(true);
  };
  const collapseContainer = () => {
    setExpanded(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);

  return (
    <SearchBarContainer
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={containerVariants}
      ref={parentRef}
      transition={containerTransition}
    >
      <SearchInputContainer>
        <SearchIcon>
          <IoSearch />
        </SearchIcon>
        <SearchInput
          placeholder="Search"
          onFocus={expandContainer}
          ref={inputRef}
        />
        <AnimatePresence>
          {isExpanded && (
            <CloseIcon
              onClick={collapseContainer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              key="close-icon"
            >
              <IoClose />
            </CloseIcon>
          )}
        </AnimatePresence>
      </SearchInputContainer>
      {isExpanded && <LineSeparator />}
      <SearchContent>
        
        <LoadingWrapper>
          <MoonLoader loading color="#000" size={20}></MoonLoader>
        </LoadingWrapper>
      </SearchContent>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 39em;
  height: 3.8em;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
`;
const SearchInputContainer = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: hidden;
  border: none;
  font-size: 21px;
  color: black;
  border-radius: 20px;
  background-color: transparent;
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

const SearchIcon = styled.span`
  color: grey;
  font-size: 27px;
  margin-right: 10px;
  margin-top: 6px;
  vertical-align: middle;
`;

const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 23px;
  margin-right: 10px;
  margin-top: 6px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #dfdfdf;
  }
`;

const LineSeparator = styled.span`
  display: flex;
  min-width: 100%;
  min-height: 2px;
  background-color: #d8d8d878;
`;

const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  overflow-y: auto;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SearchBar;
