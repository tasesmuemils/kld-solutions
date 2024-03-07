export default function Header() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-start gap-8 sm:gap-10">
            <div className="flex max-w-3xl flex-col items-start gap-4 sm:gap-6">
              <h1 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                Mēs atdzīvinām nekustamo īpašumu un produktus
              </h1>
              <p className="text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl">
                Ietekmīgām ēkām piemīt šarms un raksturs. Mēs tveram jūsu
                būvprojekta auru fotoreālistiskajos attēlos un animācijās. Mūsu
                vizualizācijas apvieno tehnisko pilnību ar autentisku
                unikalitāti, kas piešķir nekustamajam īpašumam tā personību
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
