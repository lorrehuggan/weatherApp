import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  height: 50.75rem;
  width: 38.4375rem;
  background: rgb(39, 42, 105);
  background: linear-gradient(
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
  box-shadow: 0 3.1px 2.9px -28px rgba(0, 0, 0, 0.095),
    0 6.9px 6.4px -28px rgba(0, 0, 0, 0.14),
    0 11.6px 10.7px -28px rgba(0, 0, 0, 0.172),
    0 17.5px 16.2px -28px rgba(0, 0, 0, 0.2),
    0 25.2px 23.3px -28px rgba(0, 0, 0, 0.225),
    0 35.6px 33px -28px rgba(0, 0, 0, 0.25),
    0 50.5px 46.7px -28px rgba(0, 0, 0, 0.278),
    0 73.4px 67.9px -28px rgba(0, 0, 0, 0.31),
    0 113.1px 104.6px -28px rgba(0, 0, 0, 0.355),
    0 201px 186px -28px rgba(0, 0, 0, 0.45);
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

export const Image = styled(motion.img)`
  height: 18rem;
  width: 18rem;
  object-fit: contain;
`;

export const ImageWrapper = styled(motion.div)`
  height: 18rem;
  width: 18rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const WeatherDetailsWrapper = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 1rem;
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
  text-transform: uppercase;
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

export const Compass = styled.div`
  color: #fff;
  transform-origin: 50% 50%;
  transform: rotateZ(${({ deg }) => (deg ? deg : '0')}deg);
  transition: transform 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Info = styled.div`
  margin-top: 2rem;
  height: 5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
