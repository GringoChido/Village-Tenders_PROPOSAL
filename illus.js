// Hand-drawn-style SVG illustration helpers (vanilla — inserted as innerHTML)
window.VTIllus = {
  hearth: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M20 78 L20 50 L50 28 L80 50 L80 78 Z"/>
    <path d="M34 78 L34 60 L66 60 L66 78"/>
    <path d="M50 60 C 47 56 46 53 50 50 C 54 53 53 56 50 60 Z" fill="currentColor" fill-opacity="0.18"/>
    <path d="M50 50 C 48 48 47 46 50 44 C 53 46 52 48 50 50" fill="currentColor" fill-opacity="0.3"/>
    <path d="M14 84 L86 84"/>
    <path d="M50 14 L50 22" stroke-dasharray="1 3"/>
  </svg>`,

  candle: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M50 22 C 46 16 47 12 50 8 C 53 12 54 16 50 22 Z" fill="currentColor" fill-opacity="0.25"/>
    <path d="M50 22 L50 30"/>
    <rect x="40" y="30" width="20" height="46" rx="2"/>
    <path d="M40 42 L60 42" stroke-dasharray="1 2" opacity="0.5"/>
    <path d="M30 80 L70 80"/>
    <path d="M28 86 L72 86"/>
  </svg>`,

  spiral: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M50 50 m -2 0 a 2 2 0 1 1 4 0 a 6 6 0 1 1 -10 2 a 12 12 0 1 1 18 -8 a 20 20 0 1 1 -28 14 a 28 28 0 1 1 38 -22"/>
  </svg>`,

  constellation: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M20 30 L40 50 L62 38 L78 60 L52 72 L40 50" opacity="0.6"/>
    <circle cx="20" cy="30" r="2.5" fill="currentColor"/>
    <circle cx="40" cy="50" r="2" fill="currentColor"/>
    <circle cx="62" cy="38" r="2.5" fill="currentColor"/>
    <circle cx="78" cy="60" r="2" fill="currentColor"/>
    <circle cx="52" cy="72" r="2.5" fill="currentColor"/>
    <path d="M30 18 L31 20 M28 22 L31 20 M34 22 L31 20" opacity="0.5"/>
    <path d="M82 42 L83 44 M80 46 L83 44 M86 46 L83 44" opacity="0.5"/>
  </svg>`,

  flame: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M50 80 C 30 70 28 50 42 38 C 44 46 50 48 52 42 C 60 32 70 40 70 56 C 70 72 60 80 50 80 Z" fill="currentColor" fill-opacity="0.15"/>
    <path d="M50 70 C 42 65 41 56 48 50 C 50 54 53 54 54 50 C 60 50 62 60 56 68 C 54 72 52 72 50 70 Z" fill="currentColor" fill-opacity="0.25"/>
  </svg>`,

  house: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16 56 L50 24 L84 56 L84 84 L16 84 Z"/>
    <path d="M40 84 L40 62 L60 62 L60 84"/>
    <circle cx="50" cy="74" r="1.5"/>
    <path d="M68 38 L68 28 L76 28 L76 44"/>
    <path d="M12 60 L88 60" opacity="0.5"/>
  </svg>`,

  sprig: `<svg viewBox="0 0 100 36" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10 18 Q 30 12 50 18 Q 70 24 90 18"/>
    <path d="M22 18 Q 22 10 28 12"/>
    <path d="M30 18 Q 32 12 38 14"/>
    <path d="M42 18 Q 44 24 50 22"/>
    <path d="M54 18 Q 56 12 62 14"/>
    <path d="M66 18 Q 68 24 74 22"/>
    <circle cx="50" cy="18" r="1.5" fill="currentColor"/>
  </svg>`,

  key: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="32" cy="50" r="14"/>
    <circle cx="32" cy="50" r="4" fill="currentColor" fill-opacity="0.2"/>
    <path d="M46 50 L84 50"/>
    <path d="M70 50 L70 60"/>
    <path d="M78 50 L78 56"/>
  </svg>`,

  search: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="42" cy="42" r="22"/>
    <path d="M58 58 L78 78"/>
    <path d="M30 42 L54 42 M42 30 L42 54" opacity="0.4"/>
  </svg>`,

  sun: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="50" cy="50" r="14" fill="currentColor" fill-opacity="0.18"/>
    <g stroke-linecap="round">
      <path d="M50 22 L50 30"/>
      <path d="M50 70 L50 78"/>
      <path d="M22 50 L30 50"/>
      <path d="M70 50 L78 50"/>
      <path d="M30 30 L36 36"/>
      <path d="M64 64 L70 70"/>
      <path d="M30 70 L36 64"/>
      <path d="M64 36 L70 30"/>
    </g>
  </svg>`,

  // small bullet icons for customer-side list
  ico: {
    home:    `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 16 L16 7 L27 16 L27 26 L5 26 Z"/><path d="M13 26 L13 19 L19 19 L19 26"/></svg>`,
    quiz:    `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><circle cx="16" cy="16" r="10"/><path d="M13 13 Q 13 10 16 10 Q 19 10 19 13 Q 19 15 16 16 L 16 18"/><circle cx="16" cy="22" r="0.8" fill="currentColor"/></svg>`,
    walk:    `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M6 12 L26 12"/><path d="M6 16 L22 16"/><path d="M6 20 L26 20"/></svg>`,
    retreat: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M16 6 L8 14 L8 26 L24 26 L24 14 Z"/><path d="M16 26 L16 18"/><path d="M16 6 L16 4"/></svg>`,
    letter:  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><rect x="5" y="9" width="22" height="16" rx="1.5"/><path d="M5 11 L16 19 L27 11"/></svg>`,
    series:  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><circle cx="9" cy="16" r="3"/><circle cx="16" cy="16" r="3"/><circle cx="23" cy="16" r="3"/></svg>`,
    book:    `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M10 7 L10 25"/><circle cx="22" cy="13" r="3"/><path d="M22 16 L22 25"/><path d="M16 25 L26 25"/></svg>`,
    chat:    `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9 L26 9 L26 22 L14 22 L9 26 L9 22 L6 22 Z"/></svg>`,
    journal: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><rect x="7" y="6" width="18" height="20" rx="1"/><path d="M11 12 L21 12"/><path d="M11 16 L21 16"/><path d="M11 20 L17 20"/></svg>`,
    download:`<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M16 6 L16 19"/><path d="M11 14 L16 19 L21 14"/><path d="M7 24 L25 24"/></svg>`,
    welcome: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><circle cx="16" cy="16" r="9"/><path d="M11 18 Q 16 22 21 18"/><circle cx="13" cy="14" r="0.8" fill="currentColor"/><circle cx="19" cy="14" r="0.8" fill="currentColor"/></svg>`,
    circle:  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><circle cx="16" cy="16" r="10"/><circle cx="16" cy="16" r="6" opacity="0.5"/><circle cx="16" cy="16" r="2" fill="currentColor"/></svg>`,
  },

  check: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8 L7 12 L13 4"/></svg>`
};
