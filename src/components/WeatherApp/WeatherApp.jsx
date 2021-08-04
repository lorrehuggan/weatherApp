import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../utils/api';

//Components
import Slider from '../Slider/Slider';

import Loader from '../Loading/Loader';

//Icons
import { CgArrowUpO } from 'react-icons/cg';
//Styles
import {
  Compass,
  Info,
  Wrapper,
  Header,
  Location,
  CityName,
  ImageWrapper,
  Image,
  Form,
  Submit,
  Search,
  WeatherDetailsWrapper,
  WeatherDetails,
  WeatherDetailsHeader,
  WeatherDetailsMetric,
} from './Weather.styles';

//Icons
import { BiSearchAlt } from 'react-icons/bi';

//Animation
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

function WeatherApp() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({
    temp: '',
    sunrise: '',
    sunset: '',
    wind: '',
    windDir: '',
    code: '',
    cityName: '',
    humidity: '',
    vis: '',
    clouds: '',
    icon: 'a01d',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState(true);
  const [weatherMessage, setWeatherMessage] = useState('');

  //Get search value and set to query

  const handleChange = (event) => {
    setQuery(event.target.value.trim());
  };

  // On submit run get weather function and passing query into it

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather(query);
    setQuery('');
  };

  // Request data from api using query input

  const getWeather = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}&city=${query}&key=${process.env.REACT_APP_API_KEY}`
      );
      if (response.status === 200) {
        setLoading(false);
      }
      const data = await response.json();
      setWeather({
        temp: data.data[0].temp + 'c',
        sunrise: data.data[0].sunrise,
        sunset: data.data[0].sunset,
        wind: Math.floor(data.data[0].wind_spd) + 'm/s',
        windDir: Math.floor(data.data[0].wind_dir),
        code: data.data[0].weather.code + '%',
        cityName: data.data[0].city_name,
        humidity: Math.floor(data.data[0].rh) + '%',
        vis: data.data[0].vis + 'km',
        clouds: data.data[0].clouds,
        icon: data.data[0].weather.icon,
        description: data.data[0].weather.description,
      });
      console.log(data.data[0]);

      //set city Message

      if (data.data[0].temp < 10) {
        setWeatherMessage(
          `Warm clothes needed ${data.data[0].city_name}'s cold`
        );
      } else if (data.data[0].temp < 20) {
        setWeatherMessage(`Its pretty mild in ${data.data[0].city_name} `);
      } else if (data.data[0].temp < 30) {
        setWeatherMessage(`Hot day in ${data.data[0].city_name}`);
      } else if (data.data[0].temp < 40) {
        setWeatherMessage(`Smoking hot in ${data.data[0].city_name}`);
      } else {
        setWeatherMessage('unknown');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Header>
        <Location>{query ? query : 'Hugg Weather ☀'}</Location>
        <CityName>{weatherMessage}</CityName>
      </Header>

      <Form onSubmit={handleSubmit}>
        <Search
          placeholder="Enter City Name"
          type="text"
          name="search"
          // value={query}
          onChange={handleChange}
        />
        <Submit type="submit">
          <BiSearchAlt />
        </Submit>
      </Form>

      {!weather.temp ? (
        <ImageWrapper>
          <Loader />
        </ImageWrapper>
      ) : (
        <ImageWrapper>
          <Image
            alt={weather.description}
            src={require(`../../img/weather/${weather.icon}.png`).default}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </ImageWrapper>
      )}
      <Slider setSelect={setSelect} />

      <Info>
        <WeatherDetails>
          <WeatherDetailsHeader>Sunrise</WeatherDetailsHeader>
          <WeatherDetailsMetric>{weather.sunrise}</WeatherDetailsMetric>
        </WeatherDetails>
        <WeatherDetails>
          <WeatherDetailsHeader>Weather</WeatherDetailsHeader>
          <WeatherDetailsMetric>{weather.description}</WeatherDetailsMetric>
        </WeatherDetails>
        <WeatherDetails>
          <WeatherDetailsHeader>Sunset</WeatherDetailsHeader>
          <WeatherDetailsMetric>{weather.sunset}</WeatherDetailsMetric>
        </WeatherDetails>
      </Info>

      <WeatherDetailsWrapper>
        <WeatherDetails>
          <WeatherDetailsHeader>
            {select ? 'Temp' : 'Humidity'}
          </WeatherDetailsHeader>
          <WeatherDetailsMetric>
            {select ? weather.temp : weather.humidity}
          </WeatherDetailsMetric>
        </WeatherDetails>
        <WeatherDetails>
          <WeatherDetailsHeader>
            {select ? 'Wind Speed' : 'Visibility'}
          </WeatherDetailsHeader>
          <WeatherDetailsMetric>
            {select ? weather.wind : weather.vis}
          </WeatherDetailsMetric>
        </WeatherDetails>
        <WeatherDetails>
          <WeatherDetailsHeader>
            {select ? 'Wind Direction' : 'Cloud Coverage'}
          </WeatherDetailsHeader>
          <WeatherDetailsMetric>
            {select ? (
              <Compass deg={weather.windDir}>
                {weather.temp && <CgArrowUpO />}
              </Compass>
            ) : (
              weather.clouds
            )}
          </WeatherDetailsMetric>
        </WeatherDetails>
      </WeatherDetailsWrapper>
    </Wrapper>
  );
}

export default WeatherApp;
