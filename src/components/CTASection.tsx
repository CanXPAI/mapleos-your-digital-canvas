import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="download" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
        >
          <h2 className="font-display text-3xl md:text-5xl">
            Ready to try <span className="text-gradient-primary">MapleOS</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-[50ch] text-lg text-muted-foreground">
            Alpha 0.1 is available now. Join the community of developers building the next generation of computing.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <motion.a
              href="https://mapleos.ai"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-lg bg-primary px-8 py-4 font-display text-base font-bold text-primary-foreground shadow-primary-glow transition-shadow duration-200"
            >
              Download Alpha 0.1
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-lg border border-border px-8 py-4 font-display text-base font-bold text-foreground transition-colors duration-200 hover:border-muted-foreground"
            >
              View on GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
