import { motion } from "framer-motion";
import heroOrb from "@/assets/hero-orb.png";

const springTransition = { type: "spring" as const, duration: 0.5, bounce: 0.15 };

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { ...springTransition, delay: 0.3 + i * 0.08 },
  }),
};

const floatingOrbVariants = {
  animate: (i: number) => ({
    x: [0, 80, -60, 40, -80, 0],
    y: [0, -70, 50, -90, 30, 0],
    scale: [1, 1.2, 0.9, 1.1, 0.95, 1],
    transition: {
      duration: 20 + i * 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  }),
};

const HeroSection = () => {
  const headline = "Computing, composed.";
  const words = headline.split(" ");

  return (
    <section className="grain-overlay relative flex min-h-svh items-center justify-center overflow-hidden px-6">
      {/* Floating green orbs */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Main orb - large, slow drift */}
        <motion.div
          custom={0}
          variants={floatingOrbVariants}
          animate="animate"
          className="absolute left-[15%] top-[20%] h-[120px] w-[120px] rounded-full md:h-[180px] md:w-[180px]"
          style={{
            background: "radial-gradient(circle, hsl(75 100% 42% / 0.35) 0%, hsl(85 100% 50% / 0.08) 60%, transparent 80%)",
            filter: "blur(30px)",
          }}
        />
        {/* Secondary orb - medium, offset path */}
        <motion.div
          custom={1}
          variants={floatingOrbVariants}
          animate="animate"
          className="absolute right-[20%] top-[35%] h-[80px] w-[80px] rounded-full md:h-[120px] md:w-[120px]"
          style={{
            background: "radial-gradient(circle, hsl(75 100% 50% / 0.25) 0%, hsl(75 100% 42% / 0.05) 70%, transparent 85%)",
            filter: "blur(20px)",
          }}
        />
        {/* Small accent orb */}
        <motion.div
          custom={2}
          variants={floatingOrbVariants}
          animate="animate"
          className="absolute bottom-[30%] left-[60%] h-[50px] w-[50px] rounded-full md:h-[70px] md:w-[70px]"
          style={{
            background: "radial-gradient(circle, hsl(85 100% 55% / 0.3) 0%, transparent 75%)",
            filter: "blur(15px)",
          }}
        />
      </div>

      {/* Background orb image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        <img
          src={heroOrb}
          alt=""
          className="h-[500px] w-[500px] animate-orb-rotate object-contain opacity-70 blur-[1px] md:h-[650px] md:w-[650px]"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 6vw + 1rem, 5rem)" }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="mr-[0.3em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springTransition, delay: 0.7 }}
          className="mx-auto mt-6 max-w-[55ch] text-lg text-muted-foreground md:text-xl"
        >
          A minimal, performant, and open-source operating system designed for focus and flow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springTransition, delay: 0.9 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <motion.a
            href="#download"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg bg-primary px-8 py-4 font-display text-base font-bold text-primary-foreground shadow-primary-glow transition-shadow duration-200"
          >
            Download Alpha 0.1
          </motion.a>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg border border-border px-8 py-4 font-display text-base font-bold text-foreground transition-colors duration-200 hover:border-muted-foreground"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
