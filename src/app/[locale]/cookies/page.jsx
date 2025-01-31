import { useTranslations } from 'next-intl';

export default function Cookies() {
  const t = useTranslations('Cookies');
  return (
    <section className='py-28 sm:py-32'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col items-start gap-8 sm:gap-10'>
            <div className='flex max-w-3xl flex-col items-start gap-4 sm:gap-6'>
              <h1 className=' text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl'>
                {t('Page.T1')}
              </h1>
              <p className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                {t('Page.P1')}
              </p>
            </div>
            <div className='flex max-w-3xl flex-col items-start gap-4 sm:gap-6'>
              <h2 className=' text-2xl font-medium tracking-tight sm:text-3xl lg:text-3xl'>
                {t('Page.T2')}
              </h2>
              <p className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                {t('Page.P2')}
              </p>
            </div>
            <div className='flex max-w-3xl flex-col items-start gap-4 sm:gap-6'>
              <h2 className=' text-2xl font-medium tracking-tight sm:text-3xl lg:text-3xl'>
                {t('Page.T3')}
              </h2>
              <p className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                {t('Page.P3_1')}
              </p>
              <p className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                {t('Page.P3_2')}
              </p>
              <p className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                {t('Page.P3_3')}
              </p>
              <p className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                {t('Page.P3_4')}
              </p>
              <p className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                {t('Page.P3_5')}
              </p>
            </div>
            <div className='flex max-w-3xl flex-col items-start gap-4 sm:gap-6'>
              <h2 className=' text-2xl font-medium tracking-tight sm:text-3xl lg:text-3xl'>
                {t('Page.T4')}
              </h2>
              <p className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                {t('Page.P4')}
              </p>
              <ul className='list-disc'>
                <li className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                  {t('Page.LI4_1')}
                </li>
                <li className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                  {t('Page.LI4_2')}
                </li>
                <li className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                  {t('Page.LI4_3')}
                </li>
                <li className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                  {t('Page.LI4_4')}
                </li>
                <li className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                  {t('Page.LI4_5')}
                </li>
                <li className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                  {t('Page.LI4_6')}
                </li>
                <li className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                  {t('Page.LI4_7')}
                </li>
                <li className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                  {t('Page.LI4_8')}
                </li>
                <li className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                  {t('Page.LI4_9')}
                </li>
              </ul>
            </div>
            <div className='flex max-w-3xl flex-col items-start gap-4 sm:gap-6'>
              <h2 className=' text-2xl font-medium tracking-tight sm:text-3xl lg:text-3xl'>
                {t('Page.T5')}
              </h2>
              <p className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                {t('Page.P5_1')}
              </p>
              <p className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
                {t('Page.P5_2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
