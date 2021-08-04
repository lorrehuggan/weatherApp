import React, { useState } from 'react';

//Styles
import { Wrapper, Slide, Box } from './Slider.styles';

function Slider({ setSelect }) {
  const [slide, setSlide] = useState('0rem');

  const onClickHandler = () => {
    if (slide === '0rem') {
      setSlide('6rem');
      setSelect(false);
    } else {
      setSlide('0rem');
      setSelect(true);
    }
  };
  return (
    <Wrapper onClick={onClickHandler}>
      <Box>
        <small>Forecast</small>
      </Box>
      <Box>
        <small>Air Quality</small>
      </Box>
      <Slide select={slide} />
    </Wrapper>
  );
}

export default Slider;
