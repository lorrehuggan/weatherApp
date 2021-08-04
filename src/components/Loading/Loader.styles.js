import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 4rem;
  height: 4rem;
`;

export const Dot = styled(motion.div)`
  border-radius: 50%;
  background-color: #fff;
  height: 1rem;
  width: 1rem;
`;
