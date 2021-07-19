import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  margin-top: 1rem;
`;

export const Weather = styled.div`
  width: 8rem;
  height: 5rem;
  margin: 0rem 0.5rem;
  background-color: rgba(28, 28, 28, 0.35);
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  padding: 0rem 0.25rem;
`;

export const WeatherImage = styled.img`
  height: 5rem;
  width: 4rem;
  object-fit: contain;
`;

export const WeatherDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  small {
    color: #ffffff;
    margin-bottom: auto.25rem;
  }
  p {
    color: #ffffff;
    font-size: var(--fontBig);
  }
`;
