import React, { useState } from 'react';
import { BASE_URL } from '../../utils/api';

//Components
import Slider from '../Slider/Slider';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import Loader from '../Loading/Loader';

//Images
import Cloudy from '../../img/3d weather icons/cloud/7.png';
import Rain from '../../img/3d weather icons/cloud/7.png';
import Sunny from '../../img/3d weather icons/cloud/7.png';
import Storm from '../../img/3d weather icons/cloud/7.png';
import Snow from '../../img/3d weather icons/cloud/7.png';

//Styles
import {
  Wrapper,
  Header,
  Location,
  CityName,
  ImageWrapper,
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
  });
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather(query);
    setQuery('');
  };

  const getWeather = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}&city=${query}&key=a80a713553294ea2851f3f783e9b89cb`
      );
      if (response.status === 200) {
        setLoading(false);
      }
      const data = await response.json();
      setWeather({
        temp: data.data[0].temp,
        sunrise: data.data[0].sunrise,
        sunset: data.data[0].sunset,
        wind: Math.floor(data.data[0].wind_spd),
        windDir: data.data[0].wind_dir,
        code: data.data[0].weather.code,
        cityName: data.data[0].city_name,
        humidity: Math.floor(data.data[0].rh),
        vis: data.data[0].vis,
        clouds: data.data[0].clouds,
      });
      console.log(data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value.trim());
  };

  return (
    <Wrapper>
      <Header>
        <Location>{query ? query : 'Hugg Weather App'}</Location>
        <CityName>{weather.cityName}</CityName>
      </Header>

      <Form onSubmit={handleSubmit}>
        <Search
          placeholder="Search"
          type="text"
          name="search"
          // value={query}
          onChange={handleChange}
        />
        <Submit type="submit">
          <BiSearchAlt />
        </Submit>
      </Form>

      {loading ? <Loader /> : <ImageWrapper src={Cloudy} />}
      <Slider setSelect={setSelect} />

      <WeatherDetailsWrapper>
        <WeatherDetails>
          <WeatherDetailsHeader>
            {select ? 'Temp' : 'Humidity'}
          </WeatherDetailsHeader>
          <WeatherDetailsMetric>
            {select ? weather.temp + 'c' : weather.humidity + '%'}
          </WeatherDetailsMetric>
        </WeatherDetails>
        <WeatherDetails>
          <WeatherDetailsHeader>
            {select ? 'Wind' : 'Visibility'}
          </WeatherDetailsHeader>
          <WeatherDetailsMetric>
            {select ? weather.wind + 'm/s' : weather.vis + 'km'}
          </WeatherDetailsMetric>
        </WeatherDetails>
        <WeatherDetails>
          <WeatherDetailsHeader>
            {select ? 'Wind Direction' : 'Cloud Coverage'}
          </WeatherDetailsHeader>
          <WeatherDetailsMetric>
            {select ? weather.windDir + 'deg' : weather.clouds + '%'}
          </WeatherDetailsMetric>
        </WeatherDetails>
      </WeatherDetailsWrapper>
      {/* <WeatherWidget sunrise={weather.sunrise} sunset={weather.sunset} /> */}
    </Wrapper>
  );
}

export default WeatherApp;
