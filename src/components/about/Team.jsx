import Image from 'next/image';
import elvisImage from '../../../public/elvis.jpeg';
import emilsImage from '../../../public/emils.jpeg';

export default function Team() {
  const team = [
    {
      name: 'Elvis Bisenieks',
      image: elvisImage,
      job: 'Video un video grafikas izstrāde',
    },
    {
      name: 'Emīls Bisenieks',
      image: emilsImage,
      job: 'Web izstrāde',
    },
  ];

  return (
    <section className='py-16 sm:py-20'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='sm:space-8 space-y-12'>
          <h2
            className='text-3xl font-medium tracking-tight sm:text-4xl'
            data-aos='fade-up'
          >
            Komanda
          </h2>
          <ul
            role='list'
            className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2'
          >
            {team.map((item, index) => (
              <li
                key={index}
                className='border-primary-900/10 dark:border-primary-300/10 rounded-3xl border px-6 py-8'
                data-aos='fade-up'
                data-aos-delay={100 * index}
              >
                <div className='space-y-6'>
                  <Image
                    className='mx-auto h-auto w-16 rounded-full'
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    sizes='64px'
                  />
                  <div className='text-center'>
                    <h3 className='text-lg font-medium'>{item.name}</h3>
                    <p className='text-primary-950/70 dark:text-primary-200/70 text-base'>
                      {item.job}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
