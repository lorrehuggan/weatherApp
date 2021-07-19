import React from 'react';

//Components
import Slider from '../Slider/Slider';
import WeatherWidget from '../WeatherWidget/WeatherWidget';

//Images
import Cloudy from '../../img/3d weather icons/cloud/7.png';

//Styles
import {
  Wrapper,
  Header,
  Location,
  Date,
  ImageWrapper,
  WeatherDetailsWrapper,
  WeatherDetails,
  WeatherDetailsHeader,
  WeatherDetailsMetric,
} from './Weather.styles';

function WeatherApp() {
  return (
    <Wrapper>
      <Header>
        <Location>Los Angeles</Location>
        <Date>Date</Date>
      </Header>
      <Slider />
      <ImageWrapper src={Cloudy} />
      <WeatherDetailsWrapper>
        <WeatherDetails>
          <WeatherDetailsHeader>Temp</WeatherDetailsHeader>
          <WeatherDetailsMetric>12c</WeatherDetailsMetric>
        </WeatherDetails>
        <WeatherDetails>
          <WeatherDetailsHeader>Wind</WeatherDetailsHeader>
          <WeatherDetailsMetric>9 Mph</WeatherDetailsMetric>
        </WeatherDetails>
        <WeatherDetails>
          <WeatherDetailsHeader>Humidity</WeatherDetailsHeader>
          <WeatherDetailsMetric>40%</WeatherDetailsMetric>
        </WeatherDetails>
      </WeatherDetailsWrapper>
      <WeatherWidget />
    </Wrapper>
  );
}

export default WeatherApp;
