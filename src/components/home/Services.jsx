export default function Services() {
  const services = [
    {
      step: "01",
      name: "Video filmēšana",
      description:
        "Piedāvājam jebkādu video filmēšanu un montāžu pēc pieprasījuma un klienta vēlmēm.",
    },
    {
      step: "02",
      name: "3D grafikas izstrāde",
      description:
        "Izstrādājam 2D un 3D video grafikas ar Blender un Unreal Engine",
    },
    {
      step: "03",
      name: "Saturs internetā",
      description:
        "Veidojam jebkāda video formāta saturu internetā - gan lielizmēra video, gan TikTok un Instagram video",
    },
  ];

  return (
    <section className="py-28 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-12 sm:gap-16">
          <h2
            data-aos="fade-up"
            className="text-3xl font-medium tracking-tight sm:text-4xl"
          >
            Pakalpojumi
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={100 * index}
                className="bg-primary-500/10 dark:bg-primary-400/10 flex flex-col gap-12 rounded-3xl px-6 py-8"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-medium">{service.name}</h3>
                  <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
