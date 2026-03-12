import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import MapleOSLogo from "./MapleOSLogo";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Screenshot", href: "#screenshot" },
  { label: "Community", href: "#community" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="group flex items-center gap-2">
          <MapleOSLogo className="h-8 w-auto text-foreground transition-colors duration-300 group-hover:text-primary" />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            className="rounded-lg bg-primary px-5 py-2.5 font-display text-sm font-bold text-primary-foreground shadow-primary-glow transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            Download Alpha
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border bg-background px-6 pb-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            className="mt-2 block rounded-lg bg-primary py-3 text-center font-display font-bold text-primary-foreground"
          >
            Download Alpha
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
