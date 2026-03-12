import MapleOSLogo from "./MapleOSLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <MapleOSLogo className="h-6 w-auto text-muted-foreground" />
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="https://canxp.ai/mapleos" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            Current Build
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Documentation
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            GitHub
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 MapleOS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
