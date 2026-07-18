import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import wmLogo from "@/assets/wm-logo.png";
import heroMarket from "@/assets/hero-market.jpg";
import freshFish from "@/assets/peixes-frescos.jpg";
import processHands from "@/assets/process-hands.jpg";
import familyTable from "@/assets/family-table.jpg";
import finalShop from "@/assets/final-shop.jpg";
import fileTilapia from "@/assets/file-tilapia.jpg";
import contraFileTilapia from "@/assets/contra-file-tilapia.jpg";
import tilapiaInteira from "@/assets/tilapia-inteira.jpg";
import tambaqui from "@/assets/tambaqui.jpg";
import surubim from "@/assets/surubim.jpg";
import pescocinhoTilapia from "@/assets/pescocinho-tilapia.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { property: "og:image", content: heroMarket },
      { name: "twitter:image", content: heroMarket },
      {
        name: "keywords",
        content:
          "peixaria, peixes frescos, tilápia, tambaqui, peixaria W&M, peixe fresco, frutos do mar",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Peixaria W & M",
          description:
            "Peixaria especializada na venda de peixes frescos, com foco em qualidade, procedência e atendimento familiar.",
          image: heroMarket,
          priceRange: "$$",
        }),
      },
    ],
  }),
});

const WHATSAPP_URL =
  "https://wa.me/5534997242930?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Peixaria%20W%20%26%20M%20e%20gostaria%20de%20ver%20os%20peixes%20frescos%20dispon%C3%ADveis.";

/* ----------------------------- Floating Decorations ----------------------------- */
function FloatingDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Decorative smooth glowing blobs */}
      <div
        className="absolute top-[12%] left-[-10%] w-[50%] aspect-square bg-sea/5 rounded-full blur-[120px] animate-pulse"
        style={{ animationDuration: "12s" }}
      />
      <div
        className="absolute top-[45%] right-[-10%] w-[40%] aspect-square bg-gold/5 rounded-full blur-[140px] animate-pulse"
        style={{ animationDuration: "18s" }}
      />
      <div
        className="absolute top-[75%] left-[-5%] w-[45%] aspect-square bg-petroleum/10 rounded-full blur-[130px] animate-pulse"
        style={{ animationDuration: "15s" }}
      />

      {/* Gentle floating bubbles/particles */}
      <div
        className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-sea/20 animate-float opacity-60"
        style={{ animationDelay: "0s", animationDuration: "8s" }}
      />
      <div
        className="absolute top-[32%] right-[25%] w-3.5 h-3.5 rounded-full bg-gold/15 animate-float opacity-40"
        style={{ animationDelay: "2s", animationDuration: "12s" }}
      />
      <div
        className="absolute top-[55%] left-[30%] w-1.5 h-1.5 rounded-full bg-white/10 animate-float opacity-50"
        style={{ animationDelay: "1s", animationDuration: "9s" }}
      />
      <div
        className="absolute top-[68%] right-[15%] w-3 h-3 rounded-full bg-sea/10 animate-float opacity-30"
        style={{ animationDelay: "3s", animationDuration: "11s" }}
      />
      <div
        className="absolute top-[82%] left-[20%] w-2 h-2 rounded-full bg-gold/20 animate-float opacity-60"
        style={{ animationDelay: "0.5s", animationDuration: "7s" }}
      />
    </div>
  );
}

/* ----------------------------- Floating WhatsApp ----------------------------- */
function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-75 pointer-events-none"
      }`}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-abyss text-gold border border-gold/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:border-gold hover:text-cream hover:scale-105 transition-all duration-300 active:scale-95"
        aria-label="Fale pelo WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6" />

        <span className="absolute right-16 bg-abyss/95 text-cream border border-gold/20 text-[0.65rem] px-3 py-1.5 rounded shadow-xl tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Peça pelo WhatsApp
        </span>
      </a>
    </div>
  );
}

function Landing() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-abyss text-cream overflow-hidden">
      {/* Absolute background decorations to enhance the underwater look */}
      <FloatingDecorations />
      <Nav />
      <SideNav />
      <Hero />
      <Quality />
      <Process />
      <Products />
      <Experience />
      <Story />
      <Services />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
      <SmoothScroll />
    </main>
  );
}

/* ----------------------------- Smooth scroll ----------------------------- */
function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    (async () => {
      const LenisMod = await import("lenis");
      if (cancelled) return;
      const Lenis = LenisMod.default;
      lenis = new Lenis({
        duration: 1.35,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }) as unknown as { raf: (t: number) => void; destroy: () => void };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).lenis = lenis;
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).lenis = null;
    };
  }, []);
  return null;
}

/* ------------------------------- SideNav -------------------------------- */
const SECTIONS = [
  { id: "hero", label: "Início" },
  { id: "qualidade", label: "Qualidade" },
  { id: "produtos", label: "Produtos" },
  { id: "historia", label: "História" },
  { id: "faq", label: "FAQ" },
  { id: "contato", label: "Contato" },
];

function SideNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = SECTIONS.map((s) => document.getElementById(s.id));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDotClick = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const lenisInstance = (window as any).lenis;
      if (lenisInstance) {
        lenisInstance.scrollTo(target, { duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-5 items-end">
      {SECTIONS.map((s) => {
        const isActive = activeSection === s.id;
        return (
          <button
            key={s.id}
            onClick={(e) => handleDotClick(e, s.id)}
            className="group flex items-center gap-3 relative focus:outline-none cursor-pointer"
            aria-label={`Ir para seção ${s.label}`}
          >
            {/* Hover label */}
            <span
              className={`text-[0.62rem] uppercase tracking-[0.2em] transition-all duration-300 font-semibold text-right whitespace-nowrap px-2.5 py-1 rounded bg-abyss/90 border border-white/5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none ${
                isActive ? "text-gold border-gold/20" : "text-cream/50"
              }`}
            >
              {s.label}
            </span>

            {/* Dot visual */}
            <span className="relative flex items-center justify-center w-4 h-4">
              <span
                className={`absolute rounded-full transition-all duration-500 ${
                  isActive
                    ? "w-3 h-3 bg-gold shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                    : "w-1.5 h-1.5 bg-cream/30 group-hover:bg-cream/60 group-hover:w-2 group-hover:h-2"
                }`}
              />
              {isActive && (
                <span className="absolute w-4 h-4 rounded-full border border-gold/30 animate-ping opacity-60" />
              )}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

/* --------------------------------- Nav ---------------------------------- */
function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const lenisInstance = (window as any).lenis;
      if (lenisInstance) {
        lenisInstance.scrollTo(target, { duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-abyss/90 backdrop-blur-md border-b border-white/5 py-3 sm:py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5 sm:py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between gap-3 sm:gap-4">
        <a
          href="#hero"
          onClick={(e) => handleAnchorClick(e, "#hero")}
          className="flex items-center group shrink-0"
        >
          <span className="text-xs sm:text-sm md:text-base font-sans font-semibold tracking-[0.15em] sm:tracking-[0.25em] uppercase text-cream group-hover:text-gold transition-colors duration-300">
            Peixaria W &amp; M
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-[0.78rem] uppercase tracking-[0.24em] text-cream/70">
          <a
            href="#qualidade"
            onClick={(e) => handleAnchorClick(e, "#qualidade")}
            className="hover:text-gold transition-colors duration-300"
          >
            Qualidade
          </a>
          <a
            href="#produtos"
            onClick={(e) => handleAnchorClick(e, "#produtos")}
            className="hover:text-gold transition-colors duration-300"
          >
            Produtos
          </a>
          <a
            href="#historia"
            onClick={(e) => handleAnchorClick(e, "#historia")}
            className="hover:text-gold transition-colors duration-300"
          >
            História
          </a>
          <a
            href="#faq"
            onClick={(e) => handleAnchorClick(e, "#faq")}
            className="hover:text-gold transition-colors duration-300"
          >
            FAQ
          </a>
          <a
            href="#contato"
            onClick={(e) => handleAnchorClick(e, "#contato")}
            className="hover:text-gold transition-colors duration-300"
          >
            Contato
          </a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 sm:gap-2 text-[0.65rem] sm:text-[0.72rem] lg:text-[0.75rem] uppercase tracking-[0.12em] sm:tracking-[0.2em] px-3 py-1.5 sm:px-4.5 sm:py-2 lg:px-6 lg:py-2.5 rounded-full border border-gold/40 text-gold bg-gold/5 hover:bg-gold hover:text-abyss hover:border-gold transition-all duration-300 shrink-0 font-semibold"
        >
          <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="hidden lg:inline">Pedir no WhatsApp</span>
          <span className="hidden sm:inline lg:hidden">Pedir Agora</span>
          <span className="inline sm:hidden">Pedir</span>
        </a>
      </div>
    </header>
  );
}

/* --------------------------------- Hero --------------------------------- */
function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [step, setStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.95, 0.4]);

  useEffect(() => {
    // Fading steps for a gorgeous, high-end, cinematic narrative flow
    const t1 = setTimeout(() => setStep(1), 400); // Fade in center signature & main text
    const t2 = setTimeout(() => setStep(2), 1600); // Fade in supporting info and CTA

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-[100svh] min-h-[660px] w-full overflow-hidden flex items-center justify-center bg-abyss"
    >
      <motion.div style={{ y: y1, scale }} className="absolute inset-0 will-change-transform z-0">
        <img
          src={heroMarket}
          alt="Peixaria W & M ao amanhecer em São Gotardo - MG"
          width={1920}
          height={1200}
          className="h-full w-full object-cover opacity-80"
        />
      </motion.div>
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute inset-0 bg-gradient-to-b from-abyss/60 via-abyss/85 to-abyss pointer-events-none z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-abyss/40 z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10 flex flex-col items-center justify-center text-center">
        {/* Step 1: Cinematic signature logo and main title */}
        <div
          className={`flex flex-col items-center transition-all duration-1000 transform ${
            step >= 1 ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <img
            src={wmLogo}
            alt="Peixaria W & M Logo"
            className="h-36 w-36 sm:h-44 sm:w-44 md:h-56 md:w-56 rounded-full ring-2 ring-gold/20 shadow-[0_25px_60px_rgba(0,0,0,0.85)] object-contain bg-abyss p-2 hover:scale-105 transition-transform duration-500 mb-8"
          />
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.08] text-cream max-w-4xl font-medium">
            Da nossa peixaria <br />
            <span className="italic text-gold-gradient">para sua família.</span>
          </h1>
        </div>

        {/* Step 2: Supporting local narrative and WhatsApp CTA */}
        <div
          className={`mt-8 flex flex-col items-center transition-all duration-1000 transform ${
            step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="max-w-xl text-cream/70 text-sm md:text-base leading-relaxed">
            Peixes frescos e selecionados com o cuidado familiar de quem trata cada pedido como se
            fosse para a própria mesa. Tradição e qualidade real em São Gotardo - MG.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp shadow-[0_10px_35px_rgba(37,211,102,0.25)]"
            >
              <WhatsAppIcon /> Pedir pelo WhatsApp
            </a>
            <a
              href="#qualidade"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#qualidade");
                if (target) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const lenisInstance = (window as any).lenis;
                  if (lenisInstance) {
                    lenisInstance.scrollTo(target, { duration: 1.2 });
                  } else {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className="text-[0.72rem] uppercase tracking-[0.25em] text-cream/60 hover:text-gold transition-colors py-3.5 px-6 border border-white/5 hover:border-gold/30 rounded-full bg-white/[0.02]"
            >
              Conhecer nossa qualidade ↓
            </a>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-700 ${scrolled ? "opacity-0" : "opacity-100"}`}
      >
        <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-gold/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

/* --------------------------- Reusable scroll section --------------------------- */
function CinemaSection({
  id,
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  reverse,
  children,
  aspectClass = "aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/10]",
  imageClassName = "object-cover",
  disableParallax = false,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  children?: React.ReactNode;
  aspectClass?: string;
  imageClassName?: string;
  disableParallax?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;
    (async () => {
      const { gsap } = await import("gsap");
      const st = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(st.ScrollTrigger);
      if (cancelled || !ref.current) return;
      ctx = gsap.context(() => {
        gsap.from(ref.current!.querySelectorAll(".reveal"), {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ref.current, start: "top 78%" },
        });
        if (!disableParallax) {
          gsap.to(ref.current!.querySelector(".parallax-img"), {
            yPercent: -12,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }, ref);
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [disableParallax]);

  return (
    <section id={id} ref={ref} className="relative py-16 sm:py-24 md:py-32 lg:py-40 px-6 md:px-10">
      <div
        className={`max-w-7xl mx-auto grid md:grid-cols-12 gap-8 sm:gap-12 md:gap-16 items-center ${reverse ? "md:[direction:rtl]" : ""}`}
      >
        <div className={`md:col-span-6 [direction:ltr]`}>
          <div
            className={`relative overflow-hidden rounded-sm shadow-[var(--shadow-cinema)] ${aspectClass}`}
          >
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className={`${disableParallax ? "h-full" : "parallax-img h-[115%]"} absolute inset-0 w-full ${imageClassName}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abyss/60 via-transparent to-transparent" />
          </div>
        </div>
        <div className="md:col-span-6 [direction:ltr]">
          <p className="reveal hairline text-[0.7rem] uppercase tracking-[0.35em] text-gold/90 mb-4 sm:mb-6">
            {eyebrow}
          </p>
          <h2 className="reveal font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.02] text-cream max-w-lg">
            {title}
          </h2>
          {body && (
            <div className="reveal mt-4 sm:mt-6 text-cream/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
              {body}
            </div>
          )}
          {children && <div className="reveal mt-8 sm:mt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Sections ------------------------------- */
function Quality() {
  return (
    <CinemaSection
      id="qualidade"
      eyebrow="Frescor, todos os dias"
      title={
        <>
          Você sabe exatamente <em className="italic text-gold-gradient">o que está levando</em>{" "}
          para sua família.
        </>
      }
      body={
        <p>
          Cada peixe é escolhido com atenção — pela textura, pelo brilho das escamas, pelo frescor
          puro da origem. Do gelo cristalino ao balcão, mantemos a cadeia de frio e o cuidado que
          garantem sabor de verdade.
        </p>
      }
      image={freshFish}
      imageAlt="Variedade de pescados frescos dispostos sobre gelo cristalino na peixaria"
      aspectClass="aspect-[16/10] md:aspect-video lg:aspect-video"
    >
      <ul className="flex flex-wrap gap-4 sm:gap-6 md:gap-4 lg:gap-8 max-w-lg text-cream">
        {[
          { k: "01", v: "Seleção diária" },
          { k: "02", v: "Cadeia de frio" },
          { k: "03", v: "Procedência" },
        ].map((i) => (
          <li key={i.k} className="flex-1 min-w-[80px] sm:min-w-[100px] md:min-w-[90px]">
            <div className="font-display text-2xl sm:text-3xl text-gold-gradient">{i.k}</div>
            <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-[10px] lg:text-xs uppercase tracking-wider sm:tracking-widest md:tracking-wider lg:tracking-[0.22em] text-cream/70 leading-snug">
              {i.v}
            </div>
          </li>
        ))}
      </ul>
    </CinemaSection>
  );
}

function Process() {
  return (
    <CinemaSection
      id="processo"
      reverse
      eyebrow="Processo e cuidado"
      title={
        <>
          O preparo é uma <em className="italic text-gold-gradient">arte silenciosa.</em>
        </>
      }
      body={
        <p>
          Luvas, bancada higienizada, corte preciso, embalagem adequada. Cada gesto é pensado para
          chegar até você exatamente como saiu do balcão — íntegro, fresco e pronto para a mesa.
        </p>
      }
      image={processHands}
      imageAlt="Profissional da peixaria filetando peixe fresco"
      aspectClass="aspect-[16/10] md:aspect-video lg:aspect-video"
    />
  );
}

function Products() {
  const getWhatsAppProductUrl = (productName: string) => {
    let message = "";
    switch (productName) {
      case "Filé de Tilápia":
        message =
          "Olá! Gostaria de saber se vocês têm o Filé de Tilápia fresco e sem espinhas disponível para hoje na Peixaria W & M.";
        break;
      case "Contra Filé de Tilápia":
        message =
          "Olá! Gostaria de consultar a disponibilidade do Contra Filé de Tilápia (lombo nobre) na Peixaria W & M.";
        break;
      case "Tilápia Inteira":
        message =
          "Olá! Gostaria de verificar se vocês têm a Tilápia Inteira (já limpa, descamada e sem vísceras) disponível na Peixaria W & M.";
        break;
      case "Tambaqui":
        message =
          "Olá! Gostaria de consultar a disponibilidade do Tambaqui fresco e limpo na Peixaria W & M para assar.";
        break;
      case "Surubim":
        message =
          "Olá! Gostaria de saber se vocês têm as postas nobres de Surubim fresco disponíveis na Peixaria W & M.";
        break;
      case "Pescocinho de Tilápia":
        message =
          "Olá! Gostaria de confirmar a disponibilidade do Pescocinho de Tilápia (corte especial para petisco) na Peixaria W & M.";
        break;
      default:
        message = `Olá! Gostaria de consultar a disponibilidade de ${productName} na Peixaria W & M.`;
    }
    return `https://wa.me/5534997242930?text=${encodeURIComponent(message)}`;
  };

  const items = [
    {
      name: "Filé de Tilápia",
      price: "24,00",
      tag: "Praticidade",
      desc: "Delicioso filé super fresco, limpo e prático. Selecionado manualmente para garantir o melhor sabor na sua refeição familiar.",
      spec: "● FILÉ 100% SEM ESPINHAS",
      image: fileTilapia,
    },
    {
      name: "Contra Filé de Tilápia",
      price: "24,00",
      tag: "Corte Especial",
      desc: "Corte nobre de tilápia, extremamente suculento e sem espinhas. Perfeito para grelhados rápidos ou preparos do dia a dia.",
      spec: "● CONTRA FILÉ EXTRA CARNUDO",
      image: contraFileTilapia,
    },
    {
      name: "Tilápia Inteira",
      price: "25,00",
      tag: "Fresco Inteiro",
      desc: "Selecionada sob rigoroso controle de qualidade, com carne firme e frescor incomparável para as suas receitas preferidas.",
      spec: "● DESCAMADA E SEM VÍSCERA",
      image: tilapiaInteira,
    },
    {
      name: "Tambaqui",
      price: "29,90",
      tag: "O Rei da Brasa",
      desc: "Peixe encorpado e muito saboroso, ideal para ser assado inteiro na churrasqueira ou no forno de domingo.",
      spec: "● LIMPO E PRONTO PARA O PREPARO",
      image: tambaqui,
    },
    {
      name: "Surubim",
      price: "43,00",
      tag: "Lombo Premium",
      desc: "Peixe de água doce nobre, muito suculento e carnudo, excelente para preparar tradicionais moquecas e caldos.",
      spec: "● POSTAS NOBRES E SUCULENTAS",
      image: surubim,
    },
    {
      name: "Pescocinho de Tilápia",
      price: "14,00",
      tag: "Excelente Petisco",
      desc: "Corte especial crocante, saboroso e prático. A escolha perfeita para fritar e servir bem quente com limão.",
      spec: "● PETISCO CROCANTE PRONTO",
      image: pescocinhoTilapia,
    },
  ];

  return (
    <section
      id="produtos"
      className="relative py-16 sm:py-24 md:py-32 lg:py-40 px-6 md:px-10 overflow-hidden bg-abyss"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="hairline text-[0.7rem] uppercase tracking-[0.35em] text-gold/90 mb-6">
            Peixes Disponíveis
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-cream">
            Tradição familiar em <br />
            <em className="italic text-gold-gradient">cada seleção semanal.</em>
          </h2>
          <p className="mt-6 text-cream/70 max-w-xl leading-relaxed">
            Consulte nossa <strong className="text-gold">disponibilidade diária</strong> pelo
            WhatsApp. Nossos peixes vêm direto da origem para a nossa loja, entregues totalmente
            limpos, cortados sob medida e embalados com todo o rigor de higiene.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {items.map((p, index) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.01] p-8 hover:border-gold/30 hover:bg-white/[0.02] transition-colors duration-1000 ease-out flex flex-col justify-between"
            >
              {/* Background image and gradient overlay for better contrast */}
              <div className="absolute inset-0 z-0 opacity-100 group-hover:opacity-100 transition-opacity duration-1000 ease-out pointer-events-none overflow-hidden">
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover scale-105 md:scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/90 to-abyss/60 group-hover:via-abyss/80 transition-colors duration-1000" />
              </div>

              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gold/5 blur-3xl group-hover:bg-gold/10 transition-colors duration-1000 ease-out z-0" />

              <div className="relative z-10">
                <div className="flex justify-between items-start gap-4">
                  <span className="text-[0.62rem] uppercase tracking-[0.2em] text-gold border border-gold/20 px-2.5 py-1 rounded bg-gold/5 font-semibold transition-all duration-1000 ease-out group-hover:border-gold/50 group-hover:bg-gold/10 group-hover:text-cream">
                    {p.tag}
                  </span>
                  <div className="text-right">
                    <span className="text-[0.62rem] text-cream/40 uppercase tracking-widest block">
                      Preço sugerido
                    </span>
                    <span className="text-xl font-display text-gold-gradient font-medium">
                      R$ {p.price}
                    </span>
                    <span className="text-[0.65rem] text-cream/40 block">/ kg</span>
                  </div>
                </div>

                <h3 className="mt-6 font-display text-2xl md:text-3xl text-cream group-hover:text-gold transition-colors duration-1000 ease-out font-medium drop-shadow-md">
                  {p.name}
                </h3>
                <p className="mt-4 text-cream/70 text-sm leading-relaxed min-h-[72px] transition-colors duration-1000 ease-out group-hover:text-cream/90 drop-shadow-sm">
                  {p.desc}
                </p>
              </div>

              <div className="relative mt-8 pt-6 border-t border-white/5 flex flex-col gap-4 z-10">
                <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.2em]">
                  <span className="text-gold font-medium transition-colors duration-1000 ease-out group-hover:text-cream">
                    {p.spec}
                  </span>
                  <span className="text-cream/40 transition-colors duration-1000 ease-out group-hover:text-cream/60">
                    São Gotardo
                  </span>
                </div>
                <a
                  href={getWhatsAppProductUrl(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 rounded border border-gold/30 text-gold text-xs uppercase tracking-[0.25em] font-semibold bg-gold/5 hover:bg-gold hover:text-abyss hover:border-gold transition-all duration-300"
                >
                  Consultar Disponibilidade →
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center border border-gold/10 rounded-lg p-8 bg-gold/[0.01] max-w-3xl mx-auto backdrop-blur-sm">
          <p className="text-cream/80 text-sm md:text-base leading-relaxed">
            💡 <strong className="text-gold">Aviso de Frescor:</strong> Como trabalhamos com pescado
            selecionado sob demanda, os estoques podem variar. Recomendamos reservar o seu pedido
            antecipadamente pelo nosso WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <CinemaSection
      id="experiencia"
      eyebrow="Experiência do cliente"
      title={
        <>
          Um jantar que começa <em className="italic text-gold-gradient">no nosso balcão.</em>
        </>
      }
      body={
        <p>
          O peixe sai daqui e chega em casa pronto para virar memória. Um almoço de domingo, uma
          noite tranquila em família — cada refeição carrega o mesmo cuidado com que foi preparado.
        </p>
      }
      image={familyTable}
      imageAlt="Família servindo peixe grelhado à mesa"
      aspectClass="aspect-[16/9] sm:aspect-[16/9] md:aspect-[16/10] lg:aspect-[16/9]"
      imageClassName="object-cover object-[center_60%]"
      disableParallax
    />
  );
}

function Story() {
  return (
    <section
      id="historia"
      className="relative py-16 sm:py-24 md:py-32 lg:py-40 px-6 md:px-10 bg-abyss/40"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="hairline text-[0.7rem] uppercase tracking-[0.35em] text-gold/90 mb-6 inline-block">
          Mais que uma peixaria
        </p>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-cream">
          Um cuidado que chega até{" "}
          <em className="italic text-gold-gradient">a mesa da sua família.</em>
        </h2>
        <div className="mt-12 space-y-8 text-cream/85 leading-relaxed max-w-2xl mx-auto text-left md:text-center text-base md:text-lg">
          <p>
            Nossa história nasceu da paixão por oferecer alimentos saudáveis e de alta qualidade em
            São Gotardo-MG. Compreendemos que o peixe não é apenas um ingrediente, mas o centro de
            momentos especiais ao redor da mesa. Por isso, decidimos criar a{" "}
            <strong className="text-gold">Peixaria W & M</strong>, unindo o frescor insuperável da
            origem com um atendimento próximo e familiar.
          </p>
          <p>
            Trabalhamos incansavelmente para trazer o pescado diretamente para nossa loja toda
            semana. Cada lote é recebido sob rigoroso controle de temperatura e inspecionado
            cuidadosamente por nossa equipe, garantindo a integridade, textura ideal e brilho de um
            peixe verdadeiramente fresco.
          </p>
          <p>
            Mais do que uma venda, oferecemos praticidade. Entregamos os peixes cortados sob medida,
            totalmente limpos, filetados e embalados com o máximo rigor de higiene. Queremos que sua
            única preocupação seja reunir a família, preparar o seu tempero preferido e saborear uma
            refeição espetacular.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Venda de peixes frescos",
      desc: "Seleção semanal de pescados de procedência confiável, mantidos na temperatura perfeita.",
    },
    {
      title: "Encomendas",
      desc: "Reserve o peixe ideal para o seu almoço de domingo ou event especial com antecedência no WhatsApp.",
    },
    {
      title: "Atendimento personalizado",
      desc: "Orientação especializada sobre a melhor forma de preparo, temperos ideais e corte sugerido.",
    },
    {
      title: "Limpeza e Filetagem sem custo",
      desc: "Seu peixe é entregue totalmente limpo, livre de espinhas indesejadas e embalado com o máximo cuidado higiênico, pronto para cozinhar.",
    },
  ];
  return (
    <section
      id="servicos"
      className="relative py-16 sm:py-24 md:py-32 lg:py-40 px-6 md:px-10 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="hairline text-[0.7rem] uppercase tracking-[0.35em] text-gold/90 mb-6">
              Serviços
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-cream max-w-2xl">
              O que fazemos <em className="italic text-gold-gradient">por você.</em>
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {services.map((s, i) => (
            <div key={s.title} className="bg-abyss p-10 md:p-14">
              <div className="text-gold/80 font-mono text-xs tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 font-display text-2xl md:text-3xl text-cream">{s.title}</h3>
              <p className="mt-4 text-cream/60 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Mariana Souza",
      quote:
        "O filé de tilápia é simplesmente impecável! Vem super limpo, sem espinhas e muito fresco. Facilitou demais a rotina de alimentação saudável da minha família.",
      date: "São Gotardo",
    },
    {
      name: "Carlos Eduardo",
      quote:
        "Comprei o tambaqui para fazer um almoço especial de domingo na brasa. Ficou sensacional! Dá para sentir a procedência e a qualidade superior do peixe.",
      date: "São Gotardo",
    },
    {
      name: "Rita de Cássia",
      quote:
        "Melhor atendimento de São Gotardo! O peixe vem embalado de forma perfeita, com um cuidado extraordinário. É a peixaria de confiança da nossa casa.",
      date: "São Gotardo",
    },
  ];
  return (
    <section id="depoimentos" className="relative py-16 sm:py-24 md:py-32 lg:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="hairline text-[0.7rem] uppercase tracking-[0.35em] text-gold/90 mb-6">
            Depoimentos
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-cream">
            Quem já provou, <em className="italic text-gold-gradient">volta.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure
              key={i}
              className="border border-white/10 rounded-sm p-8 bg-white/[0.02] hover:border-gold/25 transition-colors duration-300"
            >
              <div className="text-gold text-3xl leading-none font-display">“</div>
              <blockquote className="mt-4 text-cream/70 text-sm leading-relaxed italic">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 text-[0.7rem] uppercase tracking-[0.24em] text-cream/50">
                <span className="text-cream/80">{t.name}</span> · {t.date}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    {
      q: "Quais peixes estão disponíveis?",
      a: "Nossa disponibilidade de pescados frescos muda a cada semana conforme a chegada de novos lotes. Garantimos opções nobres como Filé de Tilápia, Contra Filé de Tilápia, Tambaqui e Surubim sempre com máxima qualidade.",
    },
    {
      q: "Como faço uma encomenda?",
      a: "Basta clicar em qualquer botão de WhatsApp aqui no site! Você será direcionado para o nosso atendimento oficial, onde poderá escolher o tipo do peixe, a quantidade e o corte de preferência.",
    },
    {
      q: "Vocês trabalham com reservas?",
      a: "Sim! Você pode reservar seu peixe preferido com antecedência pelo nosso WhatsApp. Assim, garantimos que seu corte esteja perfeitamente separado e embalado para retirada ou entrega no momento desejado.",
    },
    {
      q: "Como funciona a entrega?",
      a: "Fazemos entregas em toda a cidade de São Gotardo-MG. Basta enviar seu endereço de preferência pelo WhatsApp e nós combinamos o melhor horário para entregar seu pedido super fresco na porta de sua casa.",
    },
  ];
  return (
    <section id="faq" className="relative py-16 sm:py-24 md:py-32 lg:py-40 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <p className="hairline text-[0.7rem] uppercase tracking-[0.35em] text-gold/90 mb-6">
          Perguntas frequentes
        </p>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-cream mb-14">
          Antes de <em className="italic text-gold-gradient">pedir.</em>
        </h2>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {items.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-display text-xl md:text-2xl text-cream pr-6">{f.q}</span>
                <span className="text-gold transition-transform group-open:rotate-45 text-2xl">
                  +
                </span>
              </summary>
              <p className="mt-4 text-cream/60 leading-relaxed max-w-2xl">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;
    (async () => {
      const { gsap } = await import("gsap");
      const st = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(st.ScrollTrigger);
      if (cancelled || !ref.current) return;
      ctx = gsap.context(() => {
        gsap.to(".cta-bg", {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }, ref);
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section id="contato" ref={ref} className="relative h-[90svh] min-h-[560px] overflow-hidden">
      <img
        src={finalShop}
        alt="Peixaria W & M totalmente iluminada"
        loading="lazy"
        className="cta-bg absolute inset-0 h-full w-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-abyss/70 via-abyss/60 to-abyss" />
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center justify-center text-center">
        <img
          src={wmLogo}
          alt="Peixaria W & M Logo"
          className="h-32 w-32 sm:h-36 sm:w-36 md:h-44 md:w-44 rounded-full ring-2 ring-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.85)] object-contain bg-abyss p-2 hover:scale-105 transition-transform duration-500 mb-6"
        />
        <h2 className="mt-4 font-display text-4xl md:text-7xl leading-[1] text-cream max-w-3xl">
          Da nossa peixaria <br />
          <em className="italic text-gold-gradient">para sua família.</em>
        </h2>
        <p className="mt-6 text-cream/70 max-w-xl">
          Faça seu pedido pelo WhatsApp e receba o cuidado do nosso balcão até a sua mesa.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-10 text-base"
        >
          <WhatsAppIcon /> Faça seu pedido pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative px-6 md:px-10 py-16 border-t border-white/10 bg-abyss/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-1">
            <div className="font-sans font-bold tracking-[0.2em] text-lg text-cream uppercase">
              Peixaria W &amp; M
            </div>
            <div className="text-[0.65rem] uppercase tracking-[0.2em] text-gold font-semibold">
              Frescos, tradição familiar
            </div>
            <div className="text-[0.7rem] uppercase tracking-[0.28em] text-cream/40 mt-1">
              São Gotardo - MG
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-cream/60 md:w-2/3">
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.24em] text-gold/80 mb-2">
              Contato
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors block text-base font-medium text-cream"
            >
              (34) 99724-2930
            </a>
            <div className="text-xs text-cream/40 mt-1">Peça pelo WhatsApp</div>
          </div>
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.24em] text-gold/80 mb-2">
              Endereço
            </div>
            <div className="leading-relaxed text-cream/80">
              Avenida Rui Barbosa 764
              <br />
              São Gotardo - MG
            </div>
          </div>
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.24em] text-gold/80 mb-2">
              Horários
            </div>
            <div className="leading-relaxed text-cream/80">
              Toda semana!
              <br />
              <span className="text-xs text-cream/45">Consulte ou peça entrega no WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 text-[0.7rem] uppercase tracking-[0.28em] text-cream/40 flex flex-wrap justify-between gap-4">
        <span>© {new Date().getFullYear()} Peixaria W & M</span>
        <span>Frescor · Confiança · Família</span>
      </div>
    </footer>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.32-1.66a11.87 11.87 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42ZM12.07 21.6h-.01a9.7 9.7 0 0 1-4.95-1.35l-.35-.21-3.75.98 1-3.66-.23-.37a9.7 9.7 0 0 1-1.5-5.19c0-5.36 4.37-9.72 9.73-9.72 2.6 0 5.04 1.01 6.88 2.85a9.66 9.66 0 0 1 2.85 6.88c0 5.36-4.36 9.79-9.67 9.79Zm5.57-7.28c-.3-.15-1.8-.89-2.08-.99-.28-.1-.48-.15-.68.15-.2.3-.78.99-.96 1.19-.18.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5a9.14 9.14 0 0 1-1.69-2.09c-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.58-.49-.5-.68-.51-.18-.01-.38-.01-.58-.01a1.1 1.1 0 0 0-.8.38c-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.8-.74 2.05-1.45.25-.7.25-1.3.18-1.44-.07-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}
