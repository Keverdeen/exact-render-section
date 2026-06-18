import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import logoAsset from "@/assets/logo-tatenergy.png.asset.json";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Testimonials", href: "#testimonials" },
];

const PHONE_DISPLAY = "+1 (240) 886-1465";
const PHONE_TEL = "+12408861465";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
      if (history.replaceState) history.replaceState(null, "", href);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#0f4d3a]/10 bg-[#f7f6f0]/85 backdrop-blur supports-[backdrop-filter]:bg-[#f7f6f0]/70">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-4 py-4 lg:py-5">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex shrink-0 items-center"
          aria-label="TATENERGY Appliance Repair — Home"
        >
          <img
            src={logoAsset.url}
            alt="TATENERGY Appliance Repair"
            className="h-12 w-auto sm:h-14"
          />
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center lg:flex"
        >
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-[#0f4d3a] transition-colors after:absolute after:inset-x-4 after:bottom-1 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-[#1f6a4d] after:transition-transform hover:text-[#1f6a4d] hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact (desktop) */}
        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <div className="flex items-center gap-2 text-[#1f6a4d]">
            <MapPin className="h-4 w-4" strokeWidth={2.5} />
            <span className="text-sm font-semibold">Maryland, USA</span>
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#0f4d3a] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0a3b2c]"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            {PHONE_DISPLAY}
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label={`Call ${PHONE_DISPLAY}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f4d3a] text-white transition-colors hover:bg-[#0a3b2c]"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0f4d3a]/20 text-[#0f4d3a] transition-colors hover:bg-[#0f4d3a]/5"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={2.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"} border-t border-[#0f4d3a]/10 bg-[#f7f6f0]`}
      >
        <nav aria-label="Mobile" className="mx-auto max-w-[1400px] px-4 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-[#0f4d3a] transition-colors hover:bg-[#0f4d3a]/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-[#0f4d3a]/10 pt-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f4d3a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0a3b2c]"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              {PHONE_DISPLAY}
            </a>
            <div className="flex items-center justify-center gap-2 text-[#1f6a4d]">
              <MapPin className="h-4 w-4" strokeWidth={2.5} />
              <span className="text-sm font-semibold">Maryland, USA</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
