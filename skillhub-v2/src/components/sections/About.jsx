import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCountUp } from "../../hooks/useCountUp";
import { stats } from "../../data/siteConfig";

function Stat({ s }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { display, start } = useCountUp(s.value, 2000, s.suffix);
  useEffect(() => {
    if (inView) start();
  }, [inView]);
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(1.6rem,4vw,3rem)",
          letterSpacing: "-0.04em",
          color: "#0a0a0a",
        }}
      >
        {display}
      </div>
      <div
        style={{
          fontSize: 11,
          color: "#999",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginTop: 4,
        }}
      >
        {s.label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="sec" style={{ background: "var(--bg)" }}>
      <div className="wrap">
        {/* ── Top: heading + body ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(2rem,5vw,4rem)",
            alignItems: "start",
            marginBottom: "clamp(3rem,6vw,5rem)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="s-label">
              <span>WHO WE ARE</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(2.2rem,5vw,4rem)",
                letterSpacing: "-0.04em",
                color: "#0a0a0a",
                lineHeight: 1.0,
                textTransform: "uppercase",
              }}
            >
              INNOVATE.
              <br />
              SECURE.
              <br />
              TRANSFORM.
              <br />
              GROW.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p
              style={{
                fontSize: "clamp(14px,1.5vw,16px)",
                color: "#555",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              SkillHub Digital Agency is the technology and digital
              transformation division of SkillHub International. We partner with
              businesses, governments, educational organisations, NGOs, and
              entrepreneurs to design, develop, and support technology solutions
              that deliver measurable results.
            </p>
            <p
              style={{
                fontSize: "clamp(13px,1.3vw,15px)",
                color: "#999",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              From websites and mobile apps to cloud infrastructure,
              cybersecurity, data analytics, learning technologies, and digital
              marketing - complete end-to-end digital solutions.
            </p>
            <Link
              to="/about"
              className="btn-dark"
              style={{
                padding: "12px 24px",
                borderRadius: 999,
                fontSize: 13,
                letterSpacing: "0.06em",
              }}
            >
              LEARN MORE <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* ── Bottom: image + cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(1.5rem,3vw,2rem)",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              borderRadius: 20,
              overflow: "hidden",
              aspectRatio: "4/3",
              position: "relative",
            }}
          >
            <img
              src="/about-visual.jpg"
              alt="SkillHub innovation"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 60%)",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "0.75rem",
                padding: "clamp(1rem,2vw,2rem)",
                background: "#fff",
                borderRadius: 20,
              }}
            >
              {stats.about.map((s) => (
                <Stat key={s.label} s={s} />
              ))}
            </div>

            <div
              style={{
                padding: "clamp(1rem,2vw,1.5rem)",
                background: "#0a0a0a",
                borderRadius: 20,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "#555",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                OUR VISION
              </div>
              <p
                style={{
                  fontSize: "clamp(12px,1.2vw,14px)",
                  color: "#aaa",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                }}
              >
                To be Africa's leading digital transformation agency, empowering
                organisations through innovative technology, cybersecurity,
                cloud, data, learning, and marketing solutions that create
                lasting impact.
              </p>
            </div>

            <div
              style={{
                padding: "clamp(1rem,2vw,1.5rem)",
                background: "#fff",
                borderRadius: 20,
                border: "1px solid rgba(0,0,0,0.07)",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "#999",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                OUR MISSION
              </div>
              <p
                style={{
                  fontSize: "clamp(12px,1.2vw,14px)",
                  color: "#555",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                }}
              >
                To deliver world-class digital solutions that enable
                organisations to innovate, grow, compete, and succeed in a
                rapidly evolving digital world.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
