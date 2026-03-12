import { motion } from "framer-motion";

const TerminalSection = () => {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl">
            Power at your fingertips.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A real example. Not a fake animation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15, delay: 0.15 }}
          className="mt-10 overflow-hidden rounded-2xl bg-card shadow-card"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-destructive/60" />
            <div className="h-3 w-3 rounded-full bg-primary/40" />
            <div className="h-3 w-3 rounded-full bg-primary/60" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">maple-terminal</span>
          </div>
          {/* Terminal body */}
          <div className="p-6 font-mono text-sm leading-7">
            <p><span className="text-primary">$</span> maple install --minimal desktop</p>
            <p className="text-muted-foreground">→ Resolving 47 packages...</p>
            <p className="text-muted-foreground">→ Installing core, display-server, compositor, shell</p>
            <p className="text-muted-foreground">→ Done in 1.2s</p>
            <p className="mt-4"><span className="text-primary">$</span> maple system info</p>
            <p className="text-muted-foreground">  kernel: maple-6.8.0</p>
            <p className="text-muted-foreground">  uptime: 0.8s</p>
            <p className="text-muted-foreground">  memory: 312MB / 16GB</p>
            <p className="text-muted-foreground">  packages: 47 (maple)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;
