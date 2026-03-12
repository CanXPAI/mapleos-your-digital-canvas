import { motion } from "framer-motion";
import { Zap, Shield, Terminal, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Blazing Performance",
    description:
      "Built from the ground up for speed. Sub-second boot times, minimal resource footprint, and zero bloat.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Hardened kernel with mandatory access controls, verified boot chain, and automatic security updates.",
  },
  {
    icon: Terminal,
    title: "Developer Native",
    description:
      "First-class terminal experience, built-in package manager, and deep toolchain integration out of the box.",
  },
  {
    icon: Layers,
    title: "Clean Architecture",
    description:
      "A composable, modular system. Install only what you need. Every component is replaceable and documented.",
  },
];

const springTransition = { type: "spring", duration: 0.5, bounce: 0.15 };

const FeaturesSection = () => {
  return (
    <section id="features" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
          className="mb-16 max-w-2xl"
        >
          <h2 className="font-display text-3xl md:text-4xl">
            Engineered for <span className="text-gradient-primary">substance.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            No marketing fluff. Real capabilities that respect your intelligence and your time.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springTransition, delay: i * 0.1 }}
              className="group rounded-2xl bg-card p-8 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
            >
              <feature.icon className="mb-4 h-6 w-6 text-primary" />
              <h3 className="font-display text-lg">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
