import React from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText);
import { useRef } from "react";


function Hero (){
  const title = useRef();
  useGSAP(() => {
    const heroSplit = new SplitText('.title', { type: 'chars, words'});
    const heroSubtitleSplit = new SplitText('.subtitle', {type: 'lines'})

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.05
    }),
    gsap.from(heroSubtitleSplit.lines, {
      yPercent: 100,
      duration: 1.5,
      delay: 0.5,
      ease: 'expo.out',
      
    })
  }, [])
  return (
    <div className="w-full h-full flex flex-col-reverse">
      <section className="bg-[url(/images/noise.png)] size-full absolute inset-0 ">
        <h1 className="title" ref={title}>MOJITO</h1>
        <div className="flex justify-between">
          <img className="w-1/5 absolute top-0 left-0 mt-2" src="/images/hero-left-leaf.png " alt="" />
          <img className="z-5 w-1/6 absolute bottom-0 right-0" src="/images/hero-right-leaf.png " alt="" />
        </div>
      </section>

      <div className="body">
        <div className="content">
          <div>
            <p>cool. crisp. classsic.</p>
            <p className="subtitle font-dancing font-bold">
              sip the spirit <br /> of summer
            </p>
          </div>
        </div>

        <div className="flex-center flex-col text-right w-60">
          <p className="subtitle">
            Every cocktail on our menu is a blend of premium ingredients,
            creative flair, and timeless recipes — designed to delight your
            senses.
          </p>
          <a className='cursor-pointer text-nowrap md:text-base text-sm' href="#cocktails">View cocktails</a>
        </div>

      </div>
    </div>
  );
};

export default Hero;
