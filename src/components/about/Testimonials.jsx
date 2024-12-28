'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    logo: '/Logo_Valmiera_melns.png',
    logoDark: '/Logo_Valmiera_balts.png',
    width: 200,
    height: 80,
    logoAlt: 'Valmieras novada dome symbol',
    companyName: 'Valmieras novada dome',
    shortText:
      'Sadarbība ar "kld solutions" 2024. gada Valmieras novada Restorānu nedēļas vizuālo materiālu izstrādē bija ērta visos tās posmos',
    fullText: `Sadarbība ar "kld solutions" 2024. gada Valmieras novada Restorānu nedēļas vizuālo materiālu izstrādē bija ērta visos tās posmos. Projekts bija pietiekami sarežģīts ar daudz skaņošanas etapiem, gan ar projekta koordinatoru, gan pašiem projektā iesaistītajiem dalībniekiem. Turklāt, bija jārod saistošs, uzmanību noturīgs risinājums vizuālajiem maketiem, ievērojot Valmieras novada zīmola vadlīnijas, kas arī tika izdarīts ļoti labā kvalitātē. "kld solutions" darbinieki ieklausījās idejās un sniedza vairākus izvēles variantus 3D vizualizāciju skicēm (Restorānu nedēļas imidžam), lai mēs kopīgi novienotos, kura ideja būtu attīstāma tālāk. 
Visu laiku bija izjūtama uz sadarbību orientēta un profesionāla attieksme.  "kld solutions" darbinieki ļoti ieklausījās katrā komentārā, viedoklī vai jautājumā, kas pasūtītājam radās izstrādes procesā. Tāpat arī otrādi, ja pasūtītājs bija kaut ko norādījis, bet bija nepieciešami papildus paskaidrojumi, tas uzreiz tika precizēts, izslēdzot lieku novirzīšanos no lietas. Darba procesus ļoti atviegloja operatīvā saziņa, kad tika pateikts provizoriskais laiks, kad katra konkrētā darba etaps vai uzlabojumi varētu tikt saņemti izskatīšanai. 
Tika sasniegts ļoti kvalitatīvs un vizuāli pievilcīgs rezultāts plānotajā laikā. Valmieras novada pašvaldības iestāde "Tūrisma pārvalde" pateicas "kld solutions" par labu sadarbību.`,
  },
  // {
  //   logo: '/elvis.jpeg',
  //   width: 200,
  //   height: 80,
  //   logoAlt: 'Tukuma Metāls logo',
  //   companyName: 'Tukuma Metāls',
  //   shortText: 'Viss bija izcili',
  //   fullText: 'Loti labi stradajam bet mes nemaksaajaam',
  // },
];

export default function TestimonialSlider({ title }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  // Detect theme from localStorage on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
  }, [theme]);

  console.log(theme);

  return (
    <section className='py-16 sm:py-20'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='sm:space-8 space-y-12'>
          <h2
            className='text-3xl font-medium tracking-tight sm:text-4xl'
            data-aos='fade-up'
          >
            {title}
          </h2>{' '}
          <div className='w-full max-w-3xl mx-auto px-4'>
            <Carousel
              opts={{
                align: 'center',
              }}
              className='relative'
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className='flex flex-col items-center  min-h-[400px] px-0 md:px-8'>
                      <Image
                        src={
                          theme === 'light'
                            ? testimonial.logo
                            : testimonial.logoDark
                        }
                        alt={testimonial.logoAlt}
                        width={testimonial.width}
                        height={testimonial.height}
                        className='object-contain mb-6'
                      />

                      <div className='space-y-4 max-w-xl'>
                        <p className='text-gray-700 text-lg text-center'>
                          {expandedIndex === index
                            ? testimonial.fullText
                            : testimonial.shortText}
                        </p>
                        <button
                          onClick={() =>
                            setExpandedIndex(
                              expandedIndex === index ? null : index
                            )
                          }
                          className='flex items-center gap-2 mx-auto text-gray-500 hover:text-gray-700 transition-colors'
                        >
                          {/* <span className='text-sm'>
                      {expandedIndex === index ? 'Rādīt mazāk' : 'Lasīt vairāk'}
                    </span> */}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              expandedIndex === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>
                      <div className='w-16 h-px bg-gray-200 my-6'></div>
                      <p className='text-gray-900 font-semibold text-center'>
                        {testimonial.companyName}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {testimonials.length > 1 && (
                <>
                  <CarouselPrevious className='absolute left-0 -translate-x-1/2' />
                  <CarouselNext className='absolute right-0 translate-x-1/2' />
                </>
              )}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
