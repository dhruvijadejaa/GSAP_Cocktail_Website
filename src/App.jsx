import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

import NavBar from './components/NavBar';

export default function Animate() {
  return(
    <NavBar />
  )
}

