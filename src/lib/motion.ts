// Shared Motion variants — subtle, formal, no bounce/spring (per DESIGN.md / PRD animation spec).

export const formalReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' as const, staggerChildren: 0.15 },
  },
};

export const formalFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

export const staggerContainer = (stagger = 0.06) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
});

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};
