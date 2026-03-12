import { motion } from "framer-motion";

const stats = [
  { value: "47", label: "Core Packages" },
  { value: "0.8s", label: "Boot Time" },
  { value: "312MB", label: "Memory at Idle" },
  { value: "100%", label: "Open Source" },
];

const CommunitySection = () => {
  return (
    <section id="community" className="border-t border-border px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl">
            The numbers speak.
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-5xl text-gradient-primary md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
