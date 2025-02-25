'use client';

import Link from 'next/link';
import { useState } from 'react';
import useDarkMode from '@/utils/useDarkMode';
import { useTranslations } from 'next-intl';
import { useThemeStore } from '../useThemeStore';

// GSAP
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar({ currentLocale }) {
  const t = useTranslations('Nav');
  const [open, setOpen] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();
  const setColorTheme = useThemeStore((state) => state.setColorTheme);

  const handleThemeChange = (theme) => {
    setTheme(theme); // Update dark mode state
    setColorTheme(theme); // Update Zustand store
  };

  const router = useRouter();
  const pathname = usePathname();
  const toggleLocale = () => {
    const newLocale = currentLocale === 'lv' ? 'en' : 'lv';
    // const currentPath = window.location.pathname;
    // console.log(newLocale, pathname);
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${path}`);

    // Remove the current locale from the path if it exists
    // const pathWithoutLocale = currentPath.replace('en', 'lv');

    // Construct the new path based on the new locale
    // const newPath =
    //   newLocale === 'lv'
    //     ? pathWithoutLocale
    //     : `/${newLocale}${pathWithoutLocale}`;

    // console.log(newLocale, currentPath, pathWithoutLocale);

    // console.log(`/${newLocale}${pathWithoutLocale}`);

    // router.push(newPath);
    // router.push(`/${newLocale}`);
  };

  const containerNav = useRef();
  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        gsap.set('.nav-item-gsap', { autoAlpha: 1 }); // prevent flash of unstayled content
        gsap.set('.nav-item-gsap', { yPercent: 200, rotate: '10deg' }); // Sets initial state
        gsap.to('.nav-item-gsap', {
          yPercent: 0,
          rotate: 0,

          delay: 0.1,
          stagger: 0.1,
          duration: 0.35,
          ease: 'power4.out',
        });
      });
      //Splits HERO text into chars
      // const text = new SplitType(".hero-text", { types: "lines" });
    },
    { scope: containerNav }
  );

  const toggleMenu = () => {
    setOpen(!open);
  };

  const links = [
    {
      ref: '01',
      name: t('Digital'),
      href: '/digital',
    },
    {
      ref: '02',
      name: t('Visualizations'),
      href: '/services',
    },
    {
      ref: '03',
      name: t('Video'),
      href: '/video',
    },
    {
      ref: '04',
      name: t('Modeling'),
      href: '/modeling',
    },
    {
      ref: '05',
      name: t('Maket'),
      href: '/maket',
    },
    {
      ref: '06',
      name: t('About'),
      href: '/about',
    },
    {
      ref: '07',
      name: t('Contact'),
      href: '/contact',
    },
  ];

  return (
    <header
      // className={`transition ${
      //   open
      //     ? 'bg-primary-500/10 dark:bg-primary-400/10 fixed w-full top-0 z-50 backdrop-blur-lg dark:backdrop-blur-lg'
      //     : 'fixed w-full top-0 z-50 backdrop-blur-lg'
      // }`}
      className='fixed w-full top-0 z-50 backdrop-blur-2xl'
    >
      <div
        className='navigation mx-auto flex max-w-2xl items-center justify-between px-4 sm:px-6 lg:max-w-7xl lg:px-8 '
        ref={containerNav}
      >
        {/* Brand logo */}
        <div className='flex'>
          <Link
            href={`/${currentLocale}/`}
            className='py-4 lg:py-6 hero-clip focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200 rounded-md focus-visible:outline focus-visible:outline-2'
          >
            <p className='nav-item-gsap md:invisible text-xl lg:text-2xl'>
              kld solutions
            </p>
          </Link>
        </div>

        {/* Actions */}
        <div className='-mr-2 flex items-center space-x-2 sm:space-x-3'>
          <nav className='hidden xl:flex flex-row lg:gap-6 xl:gap-10 divide-primary-900/10 dark:divide-primary-300/10 '>
            {links.map((link, index) => (
              <Link
                key={index}
                href={`/${currentLocale}${link.href}`}
                className='py-6 text-primary-950 dark:text-primary-200 group inline-flex  text-[0.9rem] font-medium tracking-tight transition focus-visible:outline-none '
              >
                <div className='group-focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200 flex flex-1 items-center justify-between rounded-xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2'>
                  <div className='hero-clip flex items-center gap-6'>
                    <span className=' nav-item-gsap md:invisible relative before:content-[""] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-primary-950 before:dark:bg-primary-200 before:origin-bottom-right before:scale-x-0 before:transition-transform before:duration-500 before:ease hover:before:origin-bottom-left hover:before:scale-x-100'>
                      {link.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </nav>

          {/* Toggle theme mode */}
          <div className='flex items-center'>
            {' '}
            <button
              type='button'
              className='hero-clip text-primary-950 dark:text-primary-200 hover:bg-primary-500/10 dark:hover:bg-primary-400/10 ring-primary-950 inline-flex h-14 w-14 items-center justify-center rounded-full transition focus:outline-none focus-visible:ring-2'
              onClick={() => {}}
            >
              <span className='sr-only'>Toggle theme mode</span>
              {colorTheme == 'light' ? (
                <svg
                  className='nav-item-gsap md:invisible h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  onClick={() => handleThemeChange('light')}
                >
                  <path d='M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z'></path>
                </svg>
              ) : (
                <svg
                  className='nav-item-gsap md:invisible h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  onClick={() => handleThemeChange('dark')}
                >
                  <path d='M10 6C10 10.4183 13.5817 14 18 14C19.4386 14 20.7885 13.6203 21.9549 12.9556C21.4738 18.0302 17.2005 22 12 22C6.47715 22 2 17.5228 2 12C2 6.79948 5.9698 2.52616 11.0444 2.04507C10.3797 3.21152 10 4.56142 10 6ZM4 12C4 16.4183 7.58172 20 12 20C14.9654 20 17.5757 18.3788 18.9571 15.9546C18.6407 15.9848 18.3214 16 18 16C12.4772 16 8 11.5228 8 6C8 5.67863 8.01524 5.35933 8.04536 5.04293C5.62119 6.42426 4 9.03458 4 12ZM18.1642 2.29104L19 2.5V3.5L18.1642 3.70896C17.4476 3.8881 16.8881 4.4476 16.709 5.16417L16.5 6H15.5L15.291 5.16417C15.1119 4.4476 14.5524 3.8881 13.8358 3.70896L13 3.5V2.5L13.8358 2.29104C14.5524 2.1119 15.1119 1.5524 15.291 0.835829L15.5 0H16.5L16.709 0.835829C16.8881 1.5524 17.4476 2.1119 18.1642 2.29104ZM23.1642 7.29104L24 7.5V8.5L23.1642 8.70896C22.4476 8.8881 21.8881 9.4476 21.709 10.1642L21.5 11H20.5L20.291 10.1642C20.1119 9.4476 19.5524 8.8881 18.8358 8.70896L18 8.5V7.5L18.8358 7.29104C19.5524 7.1119 20.1119 6.5524 20.291 5.83583L20.5 5H21.5L21.709 5.83583C21.8881 6.5524 22.4476 7.1119 23.1642 7.29104Z'></path>
                </svg>
              )}
            </button>
            <button
              type='button'
              className='hero-clip m-0  text-primary-950 dark:text-primary-200 hover:bg-primary-500/10 dark:hover:bg-primary-400/10 ring-primary-950 inline-flex h-14 w-14 items-center justify-center rounded-full transition focus:outline-none focus-visible:ring-2'
              onClick={toggleLocale}
            >
              <p className='nav-item-gsap  md:invisible'>
                {currentLocale === 'lv' ? 'EN' : 'LV'}
              </p>
            </button>
            {/* Toggle menu */}
            <button
              type='button'
              className='hero-clip inline-flex xl:hidden h-14 w-14 items-center justify-center rounded-full text-primary-950 dark:text-primary-200 hover:bg-primary-500/10 dark:hover:bg-primary-400/10 ring-primary-950  transition focus:outline-none focus-visible:ring-2'
              onClick={toggleMenu}
              aria-controls='website-menu'
              aria-expanded={open.toString()}
            >
              <span className='sr-only'>Toggle menu</span>
              <svg
                className={`nav-item-gsap md:invisible h-8 w-8 ${
                  !open ? 'block' : 'hidden'
                }`}
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M19 8H5V10H19V8ZM19 14H5V16H19V14Z'></path>
              </svg>
              <svg
                className={`nav-item-gsap md:invisible h-8 w-8 ${
                  open ? 'block' : 'hidden'
                }`}
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z'></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Menu content */}
      <div
        className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'
        id='website-menu'
        style={{ display: open ? 'block' : 'none' }}
      >
        <div className='h-screen grid grid-cols-1 gap-16 pb-24 pt-6 lg:grid-cols-2 lg:pt-12'>
          <div className='bg-primary-500/10 dark:bg-primary-400/10 hidden items-center justify-center rounded-3xl px-6 py-8 lg:flex'>
            <p className='text-primary-950/70 dark:text-primary-200/70 max-w-sm text-xl italic leading-loose'>
              Viss ir izstrādāts. Dažas lietas ir labi izstrādātas
            </p>
          </div>

          <nav className='divide-primary-900/10 dark:divide-primary-300/10 flex flex-col gap-1 divide-y'>
            {links.map((link, index) => (
              <Link
                key={index}
                onClick={toggleMenu}
                href={`/${currentLocale}${link.href}`}
                className='text-primary-950 dark:text-primary-200 group inline-flex py-4 font-medium tracking-tight transition focus-visible:outline-none'
              >
                <div className='group-focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200 flex flex-1 items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2'>
                  <div className='text-2xl flex items-center gap-6'>
                    <span className='text-xs'>{link.ref}</span>
                    <span className='group-hover:underline'>{link.name}</span>
                  </div>
                  <svg
                    className='text-primary-600 dark:text-primary-400 h-6 w-6 sm:h-8 sm:w-8'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z' />
                  </svg>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
