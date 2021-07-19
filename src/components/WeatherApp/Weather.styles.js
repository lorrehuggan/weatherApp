import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 50.75rem;
  width: 23.4375rem;
  background: rgb(39, 42, 105);
  background: radial-gradient(
    circle,
    rgba(55, 126, 138, 1) 0%,
    rgba(39, 74, 105, 1) 8%,
    rgba(21, 24, 80, 1) 24%,
    rgba(6, 7, 36, 1) 50%,
    rgba(6, 7, 36, 1) 100%
  );
  border-radius: 4rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border: 4px solid black;
`;

export const Header = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Location = styled.h3`
  margin-bottom: 1.75rem;
  color: #ffffff;
  font-size: var(--headlineSmall);
`;

export const Date = styled.p`
  color: #ffffff;
  font-size: var(--fontMedium);
`;

export const ImageWrapper = styled.img`
  height: 18rem;
  width: 18rem;
  margin-top: 5.5rem;
  margin-bottom: 2rem;
  object-fit: contain;
`;

export const WeatherDetailsWrapper = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const WeatherDetails = styled.div`
  width: 33%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WeatherDetailsHeader = styled.small`
  color: #ffffff;
  margin-bottom: 0.25rem;
`;

export const WeatherDetailsMetric = styled.p`
  color: #ffffff;
  font-size: var(--headlineSmall);
  font-weight: 900;
`;
