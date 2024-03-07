import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-28 sm:py-28" data-aos="fade-up">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="bg-primary-500/10 dark:bg-primary-400/10 flex flex-col items-center gap-8 rounded-3xl px-5 py-16 sm:gap-10">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Izveidojam kaut ko foršu kopā
            </h2>
            <p className="text-primary-950/70 dark:text-primary-200/70 mx-auto max-w-2xl text-lg">
              Apraksti savu unikālo ideju un mēs sniegsim tev atbildi
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Sazinies ar Mums
          </Link>
        </div>
      </div>
    </section>
  );
}
