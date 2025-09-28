'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    targetNumber: '10+',
    description: 'YEARS OF EXPERIENCE',
  },
  {
    targetNumber: '250+',
    description: 'PROJECTS COMPLETED',
  },
  {
    targetNumber: '700+',
    description: 'MILLION UGX IN REVENUE',
  },
  {
    targetNumber: '30+',
    description: 'EMPLOYEES',
  },
];

const GsapCounter = ({ duration = 2 }) => {
  const counterRefs = useRef([]);

  useEffect(() => {
    counterRefs.current.forEach((el, index) => {
      if (!el) return;

      const targetNumber = data[index].targetNumber;
      const numericPart = parseInt(targetNumber.replace(/\D/g, '')) || 0;
      const suffix = targetNumber.replace(/[0-9]/g, '');

      let currentNumber = { val: 0 };

      const animation = gsap.to(currentNumber, {
        val: numericPart,
        duration: duration,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true,
        },
        onUpdate: () => {
          el.innerText = `${Math.floor(currentNumber.val).toLocaleString()}${suffix}`;
        },
      });

      return () => {
        animation.scrollTrigger?.kill();
        animation.kill();
      };
    });
  }, [duration]);

  return (
    <div className="grid grid-cols-2 md:flex justify-between gap-4 md:gap-8 mb-8">
      {data.map((item, index) => (
        <div key={index} className="text-center">
          <h2
            ref={(el) => (counterRefs.current[index] = el)}
            className="text-yellow-300 text-3xl font-bold"
          >
            0
          </h2>
          <p className="text-sm uppercase text-black mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GsapCounter;
