import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import osScreenshot from "@/assets/os-screenshot.png";

const ScreenshotSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="screenshot" ref={ref} className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          className="mb-10 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl">
            See it in action.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A calm, focused desktop that gets out of your way.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="overflow-hidden rounded-2xl">
          <img
            src={osScreenshot}
            alt="MapleOS desktop environment showing a clean file manager interface"
            className="w-full rounded-2xl outline outline-1 -outline-offset-1 outline-border"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ScreenshotSection;
