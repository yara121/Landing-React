import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import WithSubnavigation from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <WithSubnavigation />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
