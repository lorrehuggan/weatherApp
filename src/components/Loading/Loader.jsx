import React from 'react';
import { Container, Dot } from './Loader.styles';

function Loader() {
  //container Variant

  const loadingContainerVariant = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  //Circle  Variant
  const loadingCircleVariants = {
    start: {
      y: '0%',
      opacity: 0,
    },
    end: {
      y: '100%',
      opacity: 1,
    },
  };

  const loadingCircleTransition = {
    duration: 0.3,
    yoyo: Infinity,
    ease: 'easeInOut',
  };
  return (
    <Container variants={loadingContainerVariant} initial="start" animate="end">
      <Dot
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      ></Dot>
      <Dot
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      ></Dot>
      <Dot
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      ></Dot>
    </Container>
  );
}

export default Loader;
