import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 1rem;
  position: relative;
`;

export const Weather = styled.div`
  width: 6.5rem;
  height: 5rem;
  margin: 0rem 0.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
