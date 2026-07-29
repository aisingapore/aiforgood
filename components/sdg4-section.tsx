import { BookOpen, Globe, Heart, Leaf, Users } from "lucide-react";

/** Positions the work against UN Sustainable Development Goal 4. */
export function Sdg4Section() {
  return (
    <section className="section-warm py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 heading-underline">
            Advancing SDG 4 in the AI Era
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Driving inclusive, equitable AI education — aligned to United Nations Sustainable Development Goal (UN SDG) 4: Quality Education for all.
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-full flex items-start gap-5 p-6 sm:p-7 bg-background border border-border rounded-2xl card-hover-glow reveal-left" data-delay="1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <div className="flex-1 flex flex-col sm:flex-row sm:justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  AI Literacy for All
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Equip learners with core AI skills for life and employability across all levels of society.
                </p>
              </div>
              <div className="sm:text-right shrink-0">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  SDG 4.1 | 4.4
                </span>
                <p className="text-xs text-muted-foreground mt-2 sm:max-w-[160px] leading-snug">
                  Skills for employment and livelihoods
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-start gap-5 p-6 sm:p-7 bg-background border border-border rounded-2xl card-hover-glow reveal-right" data-delay="2">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <div className="flex-1 flex flex-col sm:flex-row sm:justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Empowering Educators
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Enable educators to integrate AI confidently into learning systems and teaching practice.
                </p>
              </div>
              <div className="sm:text-right shrink-0">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  SDG 4.6 | 4.c
                </span>
                <p className="text-xs text-muted-foreground mt-2 sm:max-w-[160px] leading-snug">
                  Scale teacher capacity and AI diffusion
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-start gap-5 p-6 sm:p-7 bg-background border border-border rounded-2xl card-hover-glow reveal-left" data-delay="3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <div className="flex-1 flex flex-col sm:flex-row sm:justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Inclusive Access
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Expand AI learning to under-represented communities, women, and people with fewer resources.
                </p>
              </div>
              <div className="sm:text-right shrink-0">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  SDG 4.5
                </span>
                <p className="text-xs text-muted-foreground mt-2 sm:max-w-[160px] leading-snug">
                  Reduce disparities and ensure equitable access
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-start gap-5 p-6 sm:p-7 bg-background border border-border rounded-2xl card-hover-glow reveal-right" data-delay="4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Leaf className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <div className="flex-1 flex flex-col sm:flex-row sm:justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Responsible AI & Governance
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Promote safe, trustworthy, and human-centred AI use across communities and institutions.
                </p>
              </div>
              <div className="sm:text-right shrink-0">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  SDG 4.7
                </span>
                <p className="text-xs text-muted-foreground mt-2 sm:max-w-[160px] leading-snug">
                  Support sustainable development and citizenship
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-start gap-5 p-6 sm:p-7 bg-background border border-border rounded-2xl card-hover-glow reveal-left" data-delay="5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Globe className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <div className="flex-1 flex flex-col sm:flex-row sm:justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Sustainable Ecosystem Building
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Strengthen institutions and partnerships to scale AI for Good sustainably across regions.
                </p>
              </div>
              <div className="sm:text-right shrink-0">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  SDG 4.b
                </span>
                <p className="text-xs text-muted-foreground mt-2 sm:max-w-[160px] leading-snug">
                  Expand global capacity-building effort
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
