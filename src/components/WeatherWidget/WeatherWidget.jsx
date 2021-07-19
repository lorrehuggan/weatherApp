import React from 'react';
//Styles
import {
  Wrapper,
  Weather,
  WeatherImage,
  WeatherDetails,
} from './WeatherWidget.styles';

//Images
import Cloudy from '../../img/3d weather icons/cloud/23.png';
import Rainy from '../../img/3d weather icons/rain/39.png';
import Sunny from '../../img/3d weather icons/sun/4.png';
function WeatherWidget() {
  return (
    <Wrapper>
      <Weather>
        <WeatherImage src={Sunny} />
        <WeatherDetails>
          <small>14:00</small>
          <p>29 c</p>
        </WeatherDetails>
      </Weather>
      <Weather>
        <WeatherImage src={Cloudy} />
        <WeatherDetails>
          <small>14:00</small>
          <p>29 c</p>
        </WeatherDetails>
      </Weather>
      <Weather>
        <WeatherImage src={Rainy} />
        <WeatherDetails>
          <small>14:00</small>
          <p>29 c</p>
        </WeatherDetails>
      </Weather>
    </Wrapper>
  );
}

export default WeatherWidget;
