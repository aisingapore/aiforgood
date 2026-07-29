/** Anchor links shown in the top navbar and the mobile drawer. */
export const navLinks = [
  { name: "Overview", href: "#about" },
  { name: "Approach", href: "#approach" },
  { name: "Impact", href: "#impact" },
  { name: "Programmes", href: "#programs" },
  { name: "Collaborators", href: "#partners" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
] as const;

/**
 * Sections tracked by the right-hand dot rail. Labels differ from `navLinks`
 * on purpose — the rail uses shorter, more descriptive wording.
 */
export const sectionDots = [
  { id: "about", label: "Overview" },
  { id: "approach", label: "The Challenge" },
  { id: "impact", label: "Global Reach" },
  { id: "programs", label: "Programmes" },
  { id: "partners", label: "Collaborators" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
] as const;
