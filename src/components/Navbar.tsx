import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [active, setActive] = useState('#home');

  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const ticking = useRef(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Know Me', href: '#about' },
    { label: 'Subjects', href: '#skills' },
    { label: 'Favorites', href: '#movies' },
    { label: 'Contact', href: '#contact' },
  ];

  // 🔥 underline move (STABLE)
  const moveIndicator = (index: number) => {
    const el = refs.current[index];
    const line = lineRef.current;

    if (!el || !line) return;

    const parent = el.parentElement;
    if (!parent) return;

    const elRect = el.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    line.style.transform = `translateX(${elRect.left - parentRect.left}px)`;
    line.style.width = `${elRect.width}px`;
  };

  // 🔥 INIT
  useLayoutEffect(() => {
    moveIndicator(0);
  }, []);

  // 🔥 CLICK NAV
  const scrollTo = (href: string, index: number) => {
    const el = document.querySelector(href);
    if (!el) return;

    setActive(href);
    moveIndicator(index);

    el.scrollIntoView({ behavior: 'smooth' });
  };

  // 🔥 FIX SCROLL SPY (NO GLITCH VERSION)
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const scrollPos = window.scrollY + window.innerHeight / 3;

        let current = '#home';

        for (const item of navItems) {
          const section = document.querySelector(item.href) as HTMLElement;
          if (!section) continue;

          if (section.offsetTop <= scrollPos) {
            current = item.href;
          }
        }

        if (current !== active) {
          const index = navItems.findIndex(i => i.href === current);

          if (index !== -1) {
            setActive(current);
            moveIndicator(index);
          }
        }

        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [active]);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

      {/* glow */}
      <div className="absolute inset-0 blur-3xl opacity-20 pointer-events-none">
        <div className="w-full h-full bg-sky-400/20 rounded-full" />
      </div>

      <div
        className={`relative flex items-center px-4 py-2 rounded-2xl backdrop-blur-xl border
        ${
          isDark
            ? 'bg-zinc-950/60 border-white/10'
            : 'bg-white/60 border-black/10'
        }`}
      >

        {/* NAV */}
        <div className="relative flex gap-2">

          {/* underline */}
          <div
            ref={lineRef}
            className="absolute -bottom-1 h-[2px] rounded-full transition-all duration-300"
            style={{
              background: 'rgba(56,189,248,0.9)',
              boxShadow: '0 0 14px rgba(56,189,248,0.35)',
            }}
          />

          {navItems.map((item, i) => (
            <button
              key={item.href}
              ref={el => (refs.current[i] = el)}
              onClick={() => scrollTo(item.href, i)}
              className={`px-3 py-1.5 text-sm font-medium transition
              ${
                active === item.href
                  ? 'text-sky-400'
                  : isDark
                  ? 'text-white/60 hover:text-sky-300'
                  : 'text-black/60 hover:text-sky-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* divider */}
        <div className={`w-px h-4 mx-3 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />

        {/* theme */}
        <button onClick={toggleTheme} className="p-2 rounded-xl hover:scale-105 transition">
          {isDark ? (
            <Sun className="w-4 h-4 text-sky-300" />
          ) : (
            <Moon className="w-4 h-4 text-sky-600" />
          )}
        </button>
      </div>
    </div>
  );
}