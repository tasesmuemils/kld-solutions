'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

export default function Header() {
  // Using ref to capture Hero text container
  const container = useRef();

  useGSAP(
    () => {
      //Splits HERO text into chars
      const text = new SplitType('.video-header-text', { types: 'lines' });
      gsap.set('.video-header-text', { autoAlpha: 1 }); // prevent flash of unstayled content
      gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' }); // Sets initial state
      gsap.to(text.lines, {
        yPercent: 0,
        opacity: 1,
        rotate: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power4.out',
      });
    },
    { scope: container }
  );
  return (
    <div ref={container}>
      <section className='py-28 sm:py-28'>
        <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='flex flex-col gap-16'>
            <div className='flex flex-col items-start gap-8 sm:gap-10'>
              <div className='flex max-w-3xl flex-col items-start gap-4 sm:gap-6'>
                <h1 className='video-header-text invisible text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl'>
                  Iespaidīgas video prezentācijas jūsu īpašumam
                </h1>
                <p className='video-header-text invisible text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                  Mūsu video prezentācijas pārvērš jūsu nekustamā īpašuma
                  projektu aizraujošā stāstā. Ar izcilām animācijām un
                  reālistisku attēlojumu mēs iedvešam dzīvību katrā detaļā.
                  Ļaujiet jūsu ēkai izcelties ar mūsu profesionāli veidotajiem
                  video, kas atspoguļo tās unikālo raksturu un pievilcību.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
