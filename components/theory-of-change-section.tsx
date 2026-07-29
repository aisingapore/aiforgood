import { ArrowRight } from "lucide-react";

/** Problem -> inputs -> activities -> outputs -> outcomes -> impact chain. */
export function TheoryOfChangeSection() {
  return (
    <section className="section-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance heading-underline">
            AI for Good — Theory of Change
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <div className="relative reveal-scale" data-delay="1">
            <div className="p-5 rounded-2xl border bg-red-600/12 border-red-600/25 h-full hover:scale-[1.03] hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-red-600/20 text-red-700">
                  1
                </span>
                <h3 className="font-semibold text-foreground text-sm">
                  Problem / Need
                </h3>
              </div>
              <ul className="text-xs text-muted-foreground leading-relaxed space-y-1.5">
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                  <span>
                    Uneven access to AI capabilities
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                  <span>
                    Varying levels of readiness across communities, sectors, and markets
                  </span>
                </li>
              </ul>
            </div>
            <div className="hidden xl:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
              <ArrowRight className="w-4 h-4 text-muted-foreground/60" aria-hidden="true" />
            </div>
          </div>
          <div className="relative reveal-scale" data-delay="2">
            <div className="p-5 rounded-2xl border bg-red-500/12 border-red-500/25 h-full hover:scale-[1.03] hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-red-500/20 text-red-600">
                  2
                </span>
                <h3 className="font-semibold text-foreground text-sm">
                  Inputs
                </h3>
              </div>
              <ul className="text-xs text-muted-foreground leading-relaxed space-y-1.5">
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                  <span>
                    Cross-sector partnerships
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                  <span>
                    Funding and resources
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                  <span>
                    AI expertise
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                  <span>
                    Platforms, tools, and networks
                  </span>
                </li>
              </ul>
            </div>
            <div className="hidden xl:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
              <ArrowRight className="w-4 h-4 text-muted-foreground/60" aria-hidden="true" />
            </div>
          </div>
          <div className="relative reveal-scale" data-delay="3">
            <div className="p-5 rounded-2xl border bg-orange-500/12 border-orange-500/25 h-full hover:scale-[1.03] hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-orange-500/20 text-orange-700">
                  3
                </span>
                <h3 className="font-semibold text-foreground text-sm">
                  Activities
                </h3>
              </div>
              <ul className="text-xs text-muted-foreground leading-relaxed space-y-1.5">
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-orange-500 mt-1.5 shrink-0"></span>
                  <span>
                    Education
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-orange-500 mt-1.5 shrink-0"></span>
                  <span>
                    Workforce development
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-orange-500 mt-1.5 shrink-0"></span>
                  <span>
                    Community programmes
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-orange-500 mt-1.5 shrink-0"></span>
                  <span>
                    Ecosystem and policy engagement
                  </span>
                </li>
              </ul>
            </div>
            <div className="hidden xl:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
              <ArrowRight className="w-4 h-4 text-muted-foreground/60" aria-hidden="true" />
            </div>
          </div>
          <div className="relative reveal-scale" data-delay="4">
            <div className="p-5 rounded-2xl border bg-orange-400/12 border-orange-400/25 h-full hover:scale-[1.03] hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-orange-400/20 text-orange-600">
                  4
                </span>
                <h3 className="font-semibold text-foreground text-sm">
                  Outputs
                </h3>
              </div>
              <ul className="text-xs text-muted-foreground leading-relaxed space-y-1.5">
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-orange-400 mt-1.5 shrink-0"></span>
                  <span>
                    Programmes delivered across markets
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-orange-400 mt-1.5 shrink-0"></span>
                  <span>
                    Educators, trainers, and facilitators enabled
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-orange-400 mt-1.5 shrink-0"></span>
                  <span>
                    Learners, workers, and communities reached at scale
                  </span>
                </li>
              </ul>
            </div>
            <div className="hidden xl:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
              <ArrowRight className="w-4 h-4 text-muted-foreground/60" aria-hidden="true" />
            </div>
          </div>
          <div className="relative reveal-scale" data-delay="5">
            <div className="p-5 rounded-2xl border bg-amber-500/12 border-amber-500/25 h-full hover:scale-[1.03] hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-amber-500/20 text-amber-700">
                  5
                </span>
                <h3 className="font-semibold text-foreground text-sm">
                  Outcomes
                </h3>
              </div>
              <ul className="text-xs text-muted-foreground leading-relaxed space-y-1.5">
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                  <span>
                    Build AI literacy, fluency, and practical application
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                  <span>
                    Strengthen employability and productivity
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                  <span>
                    Engage with AI responsibly and safely
                  </span>
                </li>
              </ul>
            </div>
            <div className="hidden xl:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
              <ArrowRight className="w-4 h-4 text-muted-foreground/60" aria-hidden="true" />
            </div>
          </div>
          <div className="relative reveal-scale" data-delay="6">
            <div className="p-5 rounded-2xl border bg-amber-400/12 border-amber-400/25 h-full hover:scale-[1.03] hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-amber-400/20 text-amber-600">
                  6
                </span>
                <h3 className="font-semibold text-foreground text-sm">
                  Impact
                </h3>
              </div>
              <ul className="text-xs text-muted-foreground leading-relaxed space-y-1.5">
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                  <span>
                    Inclusive participation in the AI-enabled economy
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                  <span>
                    Expanded access to opportunities
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                  <span>
                    Future-ready workforce and communities
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
