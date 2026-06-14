import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import NavBar from './components/NavBar';
import Hero from './components/Hero'
gsap.registerPlugin(useGSAP);


import { Container, Main } from './components/styled';

export default function Animate() {
  return(
  
        <Main>
          <Container>
            <NavBar />
             <Hero />
          </Container>
        </Main>
  )
}




