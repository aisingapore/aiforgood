import { ArrowRight, Coins, Lightbulb, Network, Scale, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";

/** Strategic collaboration opportunities for prospective partners. */
export function CollaborationSection() {
  return (
    <section className="section-light py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 heading-underline">
            Strategic Collaboration Opportunities
          </h2>
        </div>
        <div className="space-y-4 mb-12">
          <div className="w-full flex items-center gap-5 px-6 sm:px-7 py-5 sm:py-6 bg-card border border-border rounded-2xl card-hover-glow group reveal" data-delay="1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <Coins className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="text-base font-semibold text-foreground mb-1">
                Strategic Investment
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Catalyse high-impact AI for Good initiatives and unlock scalable models that create lasting social value.
              </p>
            </div>
          </div>
          <div className="w-full flex items-center gap-5 px-6 sm:px-7 py-5 sm:py-6 bg-card border border-border rounded-2xl card-hover-glow group reveal" data-delay="2">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <Lightbulb className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="text-base font-semibold text-foreground mb-1">
                Expertise and Thought Leadership
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Advance domain-driven AI applications and co-create impactful solutions with our expert teams.
              </p>
            </div>
          </div>
          <div className="w-full flex items-center gap-5 px-6 sm:px-7 py-5 sm:py-6 bg-card border border-border rounded-2xl card-hover-glow group reveal" data-delay="3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <Network className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="text-base font-semibold text-foreground mb-1">
                Ecosystem Access and Partnerships
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Activate networks to expand reach across communities, countries, and regions throughout Asia and beyond.
              </p>
            </div>
          </div>
          <div className="w-full flex items-center gap-5 px-6 sm:px-7 py-5 sm:py-6 bg-card border border-border rounded-2xl card-hover-glow group reveal" data-delay="4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <Scale className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="text-base font-semibold text-foreground mb-1">
                Policy and Systems Influence
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Shape responsible AI adoption and contribute to national and regional agendas for inclusive AI governance.
              </p>
            </div>
          </div>
          <div className="w-full flex items-center gap-5 px-6 sm:px-7 py-5 sm:py-6 bg-card border border-border rounded-2xl card-hover-glow group reveal" data-delay="5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <TrendingUp className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="text-base font-semibold text-foreground mb-1">
                Scaling Impact
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Translate proven initiatives into sustainable, system-level impact across Southeast Asia and the wider world.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center reveal">
          <Button size="lg" className="gap-2 ripple" asChild>
            <a href="mailto:chandra@aisingapore.org">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
