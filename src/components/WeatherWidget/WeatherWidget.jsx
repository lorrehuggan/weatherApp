import React from 'react';
//Styles
import {
  Wrapper,
  Weather,
  WeatherImage,
  WeatherDetails,
} from './WeatherWidget.styles';

function WeatherWidget({ sunset, sunrise }) {
  return (
    <Wrapper>
      <Weather>
        <WeatherDetails>
          <small>Sunrise</small>
          <p>{sunrise}</p>
        </WeatherDetails>
      </Weather>
      {/* <Weather>
        <WeatherDetails>
          <small>Day 2</small>
          <p>29 c</p>
        </WeatherDetails>
      </Weather> */}
      <Weather>
        <WeatherDetails>
          <small>sunset</small>
          <p>{sunset}</p>
        </WeatherDetails>
      </Weather>
    </Wrapper>
  );
}

export default WeatherWidget;
