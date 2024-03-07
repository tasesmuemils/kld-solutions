export default function About() {
  return (
    <section className="py-28 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          <h2
            data-aos="fade-up"
            className="text-3xl font-medium tracking-tight sm:text-4xl"
          >
            Par Mums
          </h2>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col items-start gap-8 sm:gap-10 lg:col-span-2"
          >
            <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
              Iedomājieties digitālo gleznu, kas atdzimst, kad video piedzīvo
              radošu metamorfozi, bagātinoties ar rūpīgo pēcapstrādes burvību.
              Šajā sarežģītajā pikseļu un kadru dejas rituālā neapstrādāta filma
              pārvēršas vizuālā simfonijā, izmantojot māksliniecisku apstrādi un
              grafisko dizaina elementu iedegšanu.
            </p>
            <a
              href="/about"
              className="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Lasi vairāk šeit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
