"use client";

import { useState } from "react";
import { Building2, Globe, Quote } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { programmes, upcomingProgrammes } from "./programmes-data";

/**
 * The AI Opportunity Fund lists its collaborators in a fixed order rather than
 * alphabetically; every other programme sorts by name.
 */
const FUND_COLLABORATOR_ORDER = [
  "Asian Venture Philanthropy Network",
  "Asian Development Bank",
  "Google.org",
];

function sortCollaborators(names: string[], programmeId: string) {
  return [...names].sort((a, b) => {
    if (programmeId === "ai-opportunity-fund") {
      return (
        FUND_COLLABORATOR_ORDER.indexOf(a) - FUND_COLLABORATOR_ORDER.indexOf(b)
      );
    }
    return a.localeCompare(b, "en");
  });
}

/** Alphabetise a comma- or newline-separated country list; pass single values through. */
function formatTargetCountries(value: string) {
  const parts = value
    .split(/,|\n/)
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length <= 1) return value.trim();
  parts.sort((a, b) => a.localeCompare(b, "en"));
  return parts.join(", ");
}

/** Tabbed programme detail panel plus a grid of upcoming programmes. */
export function ProgrammesSection() {
  const [activeId, setActiveId] = useState(programmes[0].id);
  // Bumped on every tab change and used as the panel's key, so React remounts
  // it and the `tab-content-enter` animation replays.
  const [panelKey, setPanelKey] = useState(0);

  const active = programmes.find((p) => p.id === activeId)!;
  const collaborators = sortCollaborators(active.collaborators, active.id);
  const ActiveIcon = active.icon;

  return (
    <section id="programs" className="section-warm py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance heading-underline">
            AI for Good Initiatives
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {programmes.map((programme) => {
            const Icon = programme.icon;
            return (
              <Button
                key={programme.id}
                variant={activeId === programme.id ? "default" : "outline"}
                onClick={() => {
                  if (programme.id === activeId) return;
                  setActiveId(programme.id);
                  setPanelKey((n) => n + 1);
                }}
                className="gap-2 transition-all ripple"
                size="sm"
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">{programme.title}</span>
                <span className="sm:hidden">{programme.title} </span>
              </Button>
            );
          })}
        </div>

        <div
          key={panelKey}
          className="bg-background rounded-3xl border border-border p-6 sm:p-8 mb-16 reveal shadow-sm tab-content-enter"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-start gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <ActiveIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-center text-foreground mt-2">
                  {active.title}
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                {active.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {active.url && (
                <p className="text-sm text-muted-foreground mb-6">
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    Find out more here.
                  </a>
                </p>
              )}

              {active.testimonial && (
                <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
                  <Quote className="w-8 h-8 text-primary/30 mb-2" />
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    &ldquo;{active.testimonial}&rdquo;
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-5">
              <div className="p-4 bg-secondary/50 rounded-xl border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  Key Collaborators
                </h4>
                <div className="flex flex-wrap gap-2">
                  {collaborators.map((name) => (
                    <span
                      key={name}
                      className="text-xs px-3 py-1 bg-background rounded-full text-muted-foreground border border-border"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-secondary/50 rounded-xl border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  Target Countries
                </h4>
                <p className="text-sm text-muted-foreground">
                  {formatTargetCountries(active.targetCountries)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Upcoming Programmes
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingProgrammes.map((programme) => {
              const names = [...programme.collaborators].sort((a, b) =>
                a.localeCompare(b, "en"),
              );
              return (
                <div
                  key={programme.title}
                  className="p-6 bg-background rounded-2xl border border-border border-dashed hover:border-primary/30 transition-colors"
                >
                  <Badge variant="outline" className="mb-3">
                    Coming Soon
                  </Badge>
                  <h4 className="font-semibold text-foreground mb-2">
                    {programme.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {programme.description}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2">
                      <span className="font-semibold">Target:</span>{" "}
                      {programme.targetCountry}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {names.map((name) => (
                        <span
                          key={name}
                          className="text-xs px-2 py-0.5 bg-secondary rounded-full text-muted-foreground"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
