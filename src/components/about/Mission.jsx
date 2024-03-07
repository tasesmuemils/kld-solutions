import Image from "next/image";
import HeroSvg from "../../../public/astronout_hero.svg";

export default function Mission() {
  const stats = [
    {
      name: "Pieredze",
      value: `${new Date().getFullYear() - 2022} gadi`,
    },
    {
      name: "Projekti",
      value: "10",
    },
    // {
    //   name: 'Projects',
    //   value: '122',
    // },
    // {
    //   name: 'Awards',
    //   value: "'9'",
    // },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Image
            className="mx-auto h-auto w-full max-w-xl rounded-3xl"
            width="576"
            height="864"
            src={HeroSvg}
            alt="Our experts working together"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <div className="flex flex-col gap-10">
            <div
              className="space-y-8 sm:space-y-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                Mūsu Misija
              </h2>
              <div className="space-y-6">
                <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                  Video apstrādes ceļojumā katrs kadrss kļūst par tukšu palagu,
                  kas gaida radošo ieguldījumu. Krāsu, tekstūru un efektu
                  kaleidoskops tiek rūpīgi uzklāts, tīklots audums, kas pārkāpj
                  ikdienišķumu un pārvērš vienkāršus sekvences kinemātiskā
                  poēzijā.
                </p>
                <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                  Ienāciet grafiskā dizaina pasaulē, kur vizuālā stāstīšana
                  ieņem centrālo vietu. Šeit katrs kadrs ir iespēja ieviest
                  personību, nozīmi un vizuālu pievilcību. Elementi, kas precīzi
                  izstrādāti grafisko dizaina programmās, līdzīgi digitālajam
                  otiņām, tiek nevērīgi integrēti narratīvā. Logotipi,
                  tipogrāfija un aizraujošas vizuālas detaļas saplūst, lai
                  uzlabotu kopējo estētiku, radot audumu, kas iekaro skatītāju
                  iztēli.
                </p>
                <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                  Būtībā video apstrādes un grafiskā dizaina integrācijas
                  ceļojums ir radošuma simfonija, harmonisks sadarbības darbs,
                  kas pārvērš parastu materiālu par neordināru vizuālu prieku.
                  Tas ir digitālā mākslas spēka pierādījums, kur katrs kadrss ir
                  sukas zīme, un katrs pārejas moments ir ģēnija pieskāriens,
                  radot vizuālu baudu skatītājiem aplūkot.
                </p>
              </div>
            </div>

            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="border-primary-900/10 dark:border-primary-300/10 rounded-3xl border p-6"
                >
                  <dt className="text-base">{stat.name}</dt>
                  <dd className="text-3xl font-medium tracking-tight">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
