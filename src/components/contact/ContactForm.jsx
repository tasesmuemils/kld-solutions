export default function ContactForm() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Strādāsim kopā
            </h2>
            <p className="text-primary-950/70 dark:text-primary-200/70 max-w-lg text-lg sm:text-xl">
              Mēs vēlētos uzzināt vairāk par tevi un ko tu vēlies izstrādāt
            </p>
          </div>
          <form method="POST" className="mt-3 flex flex-col gap-y-6">
            {/* <!-- Full name input --> */}
            <div>
              <label for="full-name" className="sr-only">
                Vārds Uzvārds
              </label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                autocomplete="name"
                className="hover:ring-primary-600 focus:ring-primary-600 dark:hover:ring-primary-400 dark:focus:ring-primary-400 bg-primary-50 dark:bg-primary-950 ring-primary-900/40 dark:ring-primary-200/40 placeholder:text-primary-950/60 dark:placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2"
                placeholder="Vārds Uzvārds"
              />
            </div>

            {/* <!-- Email input --> */}
            <div>
              <label for="email" className="sr-only">
                E-pasts
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                className="hover:ring-primary-600 focus:ring-primary-600 dark:hover:ring-primary-400 dark:focus:ring-primary-400 bg-primary-50 dark:bg-primary-950 ring-primary-900/40 dark:ring-primary-200/40 placeholder:text-primary-950/60 dark:placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2"
                placeholder="E-pasts"
              />
            </div>

            {/* <!-- Message textarea --> */}
            <div>
              <label for="message" className="sr-only">
                Tava Ziņa
              </label>
              <textarea
                name="message"
                id="message"
                rows="3"
                className="hover:ring-primary-600 focus:ring-primary-600 dark:hover:ring-primary-400 dark:focus:ring-primary-400 bg-primary-50 dark:bg-primary-950 ring-primary-900/40 dark:ring-primary-200/40 placeholder:text-primary-950/60 dark:placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2"
                placeholder="Tava Ziņa"
              ></textarea>
            </div>

            <div>
              <button
                className="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                type="submit"
                id="submit-btn"
              >
                Nosūtīt
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
