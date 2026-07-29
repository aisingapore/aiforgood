import Image from "next/image";
import { Clock, MapPin } from "lucide-react";

type Region = {
  name: string;
  countries: string[];
  status: "active" | "planned";
  label: string;
};

const regions: Region[] = [
  {
    name: "South Asia",
    countries: ["Bangladesh", "Pakistan", "Sri Lanka"],
    status: "active",
    label: "Active",
  },
  {
    name: "Southeast Asia",
    countries: [
      "Brunei",
      "Cambodia",
      "Indonesia",
      "Laos",
      "Malaysia",
      "Myanmar",
      "Philippines",
      "Singapore",
      "Thailand",
      "Timor-Leste",
      "Vietnam",
    ],
    status: "active",
    label: "Active",
  },
];

const stats = [
  { value: "14", label: "Countries Reached", delay: "1" },
  { value: "100K+", label: "Beneficiaries Reached", delay: "2" },
];

/** Global reach: world map plus per-region country lists and headline figures. */
export function ImpactSection() {
  return (
    <section id="impact" className="section-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance heading-underline">
            Global Reach and Impact
          </h2>
        </div>

        <div className="relative mb-12 bg-card rounded-3xl border border-border overflow-hidden reveal shadow-sm">
          <div className="relative w-full aspect-[2/1] min-h-[280px]">
            {/* `priority` matches the deployed build, which served this
                eagerly (no loading="lazy" on the rendered <img>). */}
            <Image
              src="/map global.png"
              alt="World map showing AI for Good global reach across Southeast Asia, South Asia, Caribbean, and Pacific Islands"
              fill
              priority
              className="object-contain p-4 sm:p-8"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16 items-stretch">
          {regions.map((region, index) => {
            const isActive = region.status === "active";
            return (
              <div
                key={region.name}
                className={`p-5 rounded-2xl border h-full reveal ${
                  isActive
                    ? "bg-primary/8 border-primary/25 hover:border-primary/50"
                    : "bg-secondary/40 border-border border-dashed"
                } transition-all duration-300`}
                data-delay={String(index + 1)}
              >
                <div className="flex items-center gap-2 mb-3">
                  {isActive ? (
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                  ) : (
                    <Clock className="w-4 h-4 text-muted-foreground shrink-0" />
                  )}
                  <h3 className="font-semibold text-sm text-foreground">
                    {region.name}
                  </h3>
                  <span
                    className={`ml-auto text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 ${
                      isActive
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {region.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {region.countries.map((country) => (
                    <span
                      key={country}
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-primary/15 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6 justify-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card rounded-2xl border border-border card-hover-glow reveal"
              data-delay={stat.delay}
            >
              <span className="text-3xl sm:text-4xl font-bold text-primary block animate-counter-in">
                {stat.value}
              </span>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
