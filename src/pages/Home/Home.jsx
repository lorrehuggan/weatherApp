import React from 'react';

//Components
import WeatherApp from '../../components/WeatherApp/WeatherApp.jsx';

//Style
import { Wrapper } from './Home.styles.js';

function Home() {
  return (
    <Wrapper>
      <WeatherApp />
    </Wrapper>
  );
}

export default Home;
