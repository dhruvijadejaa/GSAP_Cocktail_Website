import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
import { Nav } from './styled';
import '../App.css';
import { navLinks } from '../../constants/index';

const NavBar = () => {
  useGSAP(() => {
  const navTween = gsap.timeline({
    scrollTrigger: {
      trigger: 'nav',
      start: 'bottom up'
    }
  });

  navTween.fromTo('.nav', {backgroundColor: 'transparent'} , {
    backgroundColor: '#00000050',
    backgroundFilter: 'blur(10px)',
    duration: 1,
    ease: 'power1.inOut'
  })
})
  return (
   <Nav>
        <a href="#home" className='navlogo'>
          <img src="./images/logo.png" alt="#" />
          <p>Velvet Pour</p>
        </a>

          
            <div className="navlist">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </div>
         
   </Nav>
    
  )
}

export default NavBar;