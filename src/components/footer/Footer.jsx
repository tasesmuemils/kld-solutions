import Link from 'next/link';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className='m-4' data-aos='fade-up'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <Link
            href='/'
            className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'
          >
            <span className='self-center text-2xl font-semibold whitespace-nowrap'>
              kld solutions
            </span>
          </Link>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0'>
            <li>
              <Link href='/contact' className='hover:underline me-4 md:me-6'>
                {t('Contact')}
              </Link>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
        <div className='flex flex-col gap-3'>
          {' '}
          <div className='flex flex-row sm:justify-center gap-3'>
            <a
              aria-label='KLD Solutions Youtube Page'
              target='_blank'
              href='https://www.youtube.com/@kld_solutions'
            >
              <FaYoutube className='text-3xl' />
            </a>
            <a
              aria-label='KLD Solutions Instagram Page'
              target='_blank'
              href='https://www.instagram.com/kld.solutions/'
            >
              <FaInstagram className='text-3xl' />
            </a>
          </div>
          <span className='block text-sm text-gray-500 sm:text-center'>
            © {new Date().getFullYear()}
            <Link href='/' className='hover:underline'>
              {' '}
              kld solutions™
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
