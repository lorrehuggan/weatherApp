import React from 'react';

//Styles
import { Wrapper, Slide, Box } from './Slider.styles';

function Slider() {
  return (
    <Wrapper>
      <Box>
        <small>Forecast</small>
      </Box>
      <Box>
        <small>Air Quality</small>
      </Box>
      <Slide />
    </Wrapper>
  );
}

export default Slider;
