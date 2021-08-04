import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 12rem;
  height: 2.5rem;
  background-color: #ffffff;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  outline: 2px solid black;
  cursor: pointer;
`;

export const Box = styled.div`
  width: 6rem;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 2;
  small {
    font-weight: 900;
  }
`;

export const Slide = styled.div`
  width: 50%;
  height: 2.5rem;
  background-color: #24ace8;
  border-radius: 1rem;
  position: absolute;
  left: ${(props) => props.select};
  transition: left 0.3s ease;
`;
