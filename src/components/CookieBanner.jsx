'use client';

import Link from 'next/link';
import { getLocalStorage, setLocalStorage } from '@/utils/Helper';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(null);
  const container = useRef();
  useGSAP(() => {
    gsap.set('.cookies-text', {
      autoAlpha: 1,
      opacity: 0,
      yPercent: 300,
      //   rotate: '10deg',
    });
    // gsap.set('.cookies-text', {  });
    gsap.to('.cookies-text', {
      yPercent: 0,
      opacity: 1,
      rotate: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power4.out',
    });
  }, [container]);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);

    setCookieConsent(storedCookieConsent);
  }, []);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';

    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        analytics_storage: newValue,
      });
    }

    if (cookieConsent !== null) {
      setLocalStorage('cookie_consent', cookieConsent);
    }
  }, [cookieConsent]);

  return (
    <div ref={container}>
      {' '}
      <div
        className={`cookies-text opacity-0 my-10 mx-auto max-w-max 
                fixed bottom-0 left-0 right-0 
                 flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                bg-primary-50 text-primary-950 dark:bg-primary-950 dark:text-primary-200 rounded-lg shadow z-50 ${
                  cookieConsent !== null ? 'hidden' : 'flex'
                }
                `}
      >
        <div className='text-cente text-white-200'>
          <Link href='/cookies'>
            <p>
              🍪 Šī vietne izmanto
              <span className='font-bold text-sky-400'> sīkdatnes</span> lai
              uzlabotu lietošanas pieredzi un optimizētu tās darbību.
            </p>
          </Link>
        </div>

        <div className='flex gap-2'>
          <button
            className='px-5 py-2 text-gray-300 rounded-md border-gray-900'
            onClick={() => setCookieConsent(false)}
          >
            Nepiekrist
          </button>
          <button
            className='bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-lg border border-transparent px-5 py-2 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
            onClick={() => setCookieConsent(true)}
          >
            Piekrist
          </button>
        </div>
      </div>
    </div>
  );
}
