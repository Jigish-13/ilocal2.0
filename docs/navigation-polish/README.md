# Navigation and audience styling refinement

The supplied screenshots guide this targeted change: rounded active header buttons with 16px SVG chevrons rotating 180 degrees, spacious rounded Platform/Solutions menus, a compact audience dropdown anchored beneath its trigger, and editorial audience titles with restrained blue hover/focus treatment.

The current logo, five supported paths, navigation categories, conservative product copy, keyboard Escape/focus recovery, and reduced-motion behavior remain. Reference-only Customers and retired solution items were not introduced.

Mobile navigation uses readable descriptions and rounded touch targets; desktop menu panels scroll internally when viewport height is limited. Audience narrative, expanded scenes, and common-path chips remain intact.

Validation: lint, TypeScript, 13 unit/component tests, optimized Webpack build, open-menu axe checks (all three dropdowns: zero violations), and geometry/mobile-link checks at 360, 390, 768, 1024, 1200, 1440, and 1920px. The complete browser regression suite also checks the existing wider viewport matrix and interaction flows.

Screenshots: Platform.png, Solutions.png, Who-We-Serve.png, mobile-menu.png, audience-hover.png. Gold outlines in keyboard-driven captures are intentional accessible focus indicators.
