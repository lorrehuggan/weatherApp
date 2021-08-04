import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 50.75rem;
  width: 28.4375rem;
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
  border: 2px solid black;
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
  margin-bottom: 1.25rem;
  color: #ffffff;
  font-size: var(--headlineSmall);
  text-transform: capitalize;
`;

export const CityName = styled.p`
  color: #ffffff;
  font-size: var(--fontBig);
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
  position: absolute;
  bottom: 0;
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

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Search = styled.input`
  border: none;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 20px;
  color: #ffffff;
  font-size: 1rem;

  &::placeholder {
    color: #ffffff;
    font-size: 1rem;
  }
`;

export const Submit = styled.button`
  position: absolute;
  color: #ffffff;
  right: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
