import React from 'react';

//Components
import WeatherApp from '../../components/WeatherApp/WeatherApp.jsx';

//Style
import { Wrapper } from './Home.styles.js';

function Home() {
  return (
    <Wrapper
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <WeatherApp />
    </Wrapper>
  );
}

export default Home;
