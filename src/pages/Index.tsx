import { useEffect, useRef, useState } from "react";

import hero from "@/assets/hero.jpg";
import fabric from "@/assets/fabric.jpg";
import embroidery from "@/assets/embroidery.jpg";
import collar from "@/assets/collar.jpg";
import hoodie from "@/assets/hoodie.jpg";
import process from "@/assets/process.jpg";
import team from "@/assets/team.jpg";
import tshirts from "@/assets/tshirts.jpg";
import accessories from "@/assets/accessories.jpg";

/* ——— Primitives ——— */

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 1s var(--ease-editorial) ${delay}ms, transform 1s var(--ease-editorial) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const SectionLabel = ({ index, children }: { index: string; children: React.ReactNode }) => (
  <div className="flex items-baseline gap-6">
    <span className="font-mono-ed text-[11px] tracking-[0.2em] text-ash">{index}</span>
    <span className="eyebrow">{children}</span>
  </div>
);

/* ——— Header ——— */

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="container-ed flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tighter">TWear<span className="text-ash">®</span></a>
        <nav className="hidden md:flex items-center gap-10 font-mono-ed text-[11px] tracking-[0.18em] uppercase">
          <a href="#philosophy" className="hover:text-ash transition-colors">Philosophy</a>
          <a href="#work" className="hover:text-ash transition-colors">Work</a>
          <a href="#quality" className="hover:text-ash transition-colors">Quality</a>
          <a href="#process" className="hover:text-ash transition-colors">Process</a>
          <a href="#products" className="hover:text-ash transition-colors">Products</a>
          <a href="#faq" className="hover:text-ash transition-colors">FAQ</a>
        </nav>
        <a href="#contact" className="group relative font-mono-ed text-[11px] tracking-[0.18em] uppercase">
          <span className="border-b border-ink pb-1 group-hover:border-ash transition-colors">Start a project</span>
        </a>
      </div>
    </header>
  );
};

/* ——— Hero ——— */

const Hero = () => (
  <section id="top" className="relative h-screen min-h-[760px] w-full overflow-hidden bg-ink">
    <img
      src={hero}
      alt="Model wearing a premium heavyweight cotton t-shirt"
      width={1920}
      height={1280}
      className="absolute inset-0 h-full w-full object-cover opacity-90 ken-burns"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/70" />
    <div className="container-ed relative z-10 flex h-full flex-col justify-between pt-28 pb-12">
      <div className="flex items-center justify-between text-paper/80 font-mono-ed text-[11px] tracking-[0.2em] uppercase animate-fade-in">
        <span>Apparel Studio — Est. for brands that don't compromise</span>
        <span className="hidden md:block">N°01 / Spring Édition</span>
      </div>
      <div className="max-w-[1400px]">
        <h1 className="font-display text-paper tracking-tightest leading-[0.92] text-[18vw] md:text-[10.5vw] lg:text-[9.5vw] animate-rise">
          Clothing<br />
          <span className="italic font-light">worthy</span> of<br />
          your brand.
        </h1>
        <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="max-w-md text-paper/80 text-base md:text-lg leading-relaxed">
            A manufacturing partner for brands, teams, companies and events.
            We make garments people want to wear — and brands proud to give.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-4 self-start md:self-end border border-paper/40 px-7 py-5 text-paper font-mono-ed text-[12px] tracking-[0.22em] uppercase hover:bg-paper hover:text-ink transition-all duration-500"
          >
            Discuss your project
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ——— Marquee ——— */
const Marquee = () => {
  const items = ["Teams", "Brands", "Companies", "Events", "Studios", "Universities", "Festivals", "Agencies"];
  const full = [...items, ...items];
  return (
    <div className="border-y border-hairline overflow-hidden bg-paper py-10">
      <div className="flex whitespace-nowrap marquee">
        {full.map((it, i) => (
          <span key={i} className="font-display text-5xl md:text-6xl tracking-tighter mx-10 flex items-center gap-10">
            {it}
            <span className="text-ash text-2xl">●</span>
          </span>
        ))}
      </div>
    </div>
  );
};

/* ——— Philosophy ——— */

const Philosophy = () => (
  <section id="philosophy" className="bg-paper py-32 md:py-48">
    <div className="container-ed grid grid-cols-12 gap-8">
      <div className="col-span-12 md:col-span-3">
        <Reveal>
          <SectionLabel index="01">Philosophy</SectionLabel>
        </Reveal>
      </div>
      <div className="col-span-12 md:col-span-9">
        <Reveal delay={120}>
          <h2 className="font-display tracking-tightest leading-[0.96] text-4xl md:text-6xl lg:text-7xl">
            Most manufacturers make you choose between
            <span className="italic font-light text-ash"> quality </span>
            and
            <span className="italic font-light text-ash"> price</span>.
            <br />
            We don't.
          </h2>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl">
            <p className="text-base leading-relaxed text-ash">
              We built TWear because the industry forces a false trade-off.
              The garments that look good rarely last; the ones that last rarely feel right.
            </p>
            <p className="text-base leading-relaxed text-ash">
              We work directly with our production, not through layers of middlemen.
              That's how we can hold a higher standard at a price that still makes sense.
            </p>
            <p className="text-base leading-relaxed text-ash">
              No minimums of three thousand. No vague timelines.
              No surprise invoices. Just clothing made the way it should be.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ——— Work / Portfolio ——— */

const Work = () => {
  const items = [
    { img: team, client: "FC Northline", type: "Training Kit", year: "2025" },
    { img: hoodie, client: "Maison Verde", type: "Heavyweight Hoodies", year: "2025" },
    { img: tshirts, client: "Atrium Studio", type: "Staff Capsule", year: "2024" },
    { img: collar, client: "Form & Field", type: "Embroidered Tees", year: "2024" },
  ];
  return (
    <section id="work" className="bg-paper">
      <div className="container-ed pt-32 pb-16">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-4">
            <Reveal><SectionLabel index="02">Selected Work</SectionLabel></Reveal>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal delay={120}>
              <h2 className="font-display tracking-tightest leading-[0.96] text-4xl md:text-6xl">
                Recent <span className="italic font-light">commissions</span>.
              </h2>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={it.client} delay={i * 80}>
            <article className="group relative aspect-[4/5] overflow-hidden bg-bone">
              <img
                src={it.img}
                alt={`${it.client} — ${it.type}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 text-paper translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="font-mono-ed text-[11px] tracking-[0.2em] uppercase opacity-80">{it.type} · {it.year}</div>
                <div className="mt-2 font-display text-3xl md:text-4xl tracking-tighter">{it.client}</div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

/* ——— Industries ——— */

const Industries = () => {
  const rows = [
    { n: "I.", name: "Sports Teams", note: "Match kits, training, fan apparel" },
    { n: "II.", name: "Companies", note: "Onboarding gifts, internal capsules, retail merch" },
    { n: "III.", name: "Brands", note: "Private label production, drops, sampling" },
    { n: "IV.", name: "Events", note: "Festivals, conferences, weddings, gifting" },
  ];
  return (
    <section className="bg-ink text-paper py-32 md:py-48">
      <div className="container-ed grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <Reveal>
            <SectionLabel index="03"><span className="text-paper/60">Who we make for</span></SectionLabel>
            <h2 className="mt-8 font-display text-4xl md:text-5xl tracking-tightest leading-[0.96]">
              Built for four<br /><span className="italic font-light">different</span> audiences.
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-8 md:border-t md:border-paper/20">
          {rows.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <div className="group grid grid-cols-12 items-baseline gap-6 border-b border-paper/20 py-10 md:py-14 transition-colors hover:bg-paper/[0.03] cursor-default px-2">
                <div className="col-span-2 md:col-span-1 font-mono-ed text-[11px] tracking-[0.2em] text-paper/50">{r.n}</div>
                <div className="col-span-10 md:col-span-5 font-display text-3xl md:text-5xl tracking-tighter">{r.name}</div>
                <div className="col-span-12 md:col-span-6 text-paper/60 text-base md:text-lg">{r.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ——— Quality ——— */

const Quality = () => (
  <section id="quality" className="bg-paper">
    <div className="container-ed py-32 md:py-40">
      <Reveal><SectionLabel index="04">Quality</SectionLabel></Reveal>
      <Reveal delay={120}>
        <h2 className="mt-10 font-display text-5xl md:text-7xl lg:text-8xl tracking-tightest leading-[0.94] max-w-5xl">
          Standards that <span className="italic font-light">show</span> in the hand-feel.
        </h2>
      </Reveal>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-hairline">
      <div className="md:col-span-7 bg-paper relative aspect-[4/5] md:aspect-auto overflow-hidden">
        <img src={fabric} alt="Macro view of cotton fabric weave" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="md:col-span-5 bg-paper p-10 md:p-16 flex flex-col justify-center">
        <Reveal>
          <div className="space-y-10">
            {[
              ["95 / 5", "Cotton & polyester blend. Soft to the touch, structured enough to keep its shape after a hundred washes."],
              ["180 GSM", "Mid-heavy weight. Substantial without sweating, drapes naturally, photographs beautifully."],
              ["Embroidery", "Industrial-grade thread laid by calibrated machines. Edges defined. No loose ends."],
              ["Printing", "Pigment-bonded inks engineered to outlast the garment. Hand-feel preserved."],
              ["QC", "Inspection at cutting, sewing, finishing, and packing. Four checkpoints before it ships."],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-12 gap-4 items-baseline border-b border-hairline pb-8 last:border-0 last:pb-0">
                <div className="col-span-4 font-display text-3xl md:text-4xl tracking-tighter">{k}</div>
                <p className="col-span-8 text-ash leading-relaxed text-[15px]">{v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline">
      <div className="bg-paper aspect-[4/5] overflow-hidden relative">
        <img src={embroidery} alt="Macro photograph of dimensional embroidery on cotton" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="bg-paper aspect-[4/5] overflow-hidden relative">
        <img src={collar} alt="Premium ribbed collar and shoulder seam detail" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      </div>
    </div>
  </section>
);

/* ——— Process ——— */

const Process = () => {
  const steps = [
    ["01", "Brief", "We listen. Quantities, deadlines, budget, references. No template forms."],
    ["02", "Sample", "We produce a physical sample so you feel what you'll be ordering — before you commit."],
    ["03", "Production", "Cutting, sewing, decoration. You see updates at every stage."],
    ["04", "Inspection", "Four checkpoints. Anything sub-standard is remade, not shipped."],
    ["05", "Delivery", "Packed, labelled and dispatched. Tracking in your inbox."],
  ];
  return (
    <section id="process" className="bg-ink text-paper">
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={process} alt="Garment workshop interior" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 to-ink" />
        <div className="container-ed relative h-full flex items-end pb-16">
          <Reveal>
            <SectionLabel index="05"><span className="text-paper/60">Process</span></SectionLabel>
            <h2 className="mt-6 font-display text-5xl md:text-7xl tracking-tightest leading-[0.94]">
              Five steps.<br /><span className="italic font-light">Nothing</span> hidden.
            </h2>
          </Reveal>
        </div>
      </div>
      <div className="container-ed py-24">
        <div className="border-t border-paper/20">
          {steps.map(([n, name, desc], i) => (
            <Reveal key={n} delay={i * 60}>
              <div className="grid grid-cols-12 gap-6 border-b border-paper/20 py-10 items-baseline">
                <div className="col-span-2 md:col-span-1 font-mono-ed text-[11px] tracking-[0.2em] text-paper/50">{n}</div>
                <div className="col-span-10 md:col-span-4 font-display text-3xl md:text-4xl tracking-tighter">{name}</div>
                <p className="col-span-12 md:col-span-7 text-paper/70 leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ——— Products ——— */

const Products = () => {
  const items = [
    { img: tshirts, name: "T-shirts", note: "180 GSM heavyweight" },
    { img: hoodie, name: "Hoodies", note: "Brushed inner, double-needle" },
    { img: collar, name: "Sweatshirts", note: "Structured crewnecks" },
    { img: accessories, name: "Garment bags", note: "Branded packaging" },
    { img: embroidery, name: "Socks", note: "Custom-knit, woven logos" },
    { img: fabric, name: "Accessories", note: "Caps, totes, patches" },
  ];
  return (
    <section id="products" className="bg-paper py-32">
      <div className="container-ed">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-5">
            <Reveal><SectionLabel index="06">Products</SectionLabel></Reveal>
            <Reveal delay={120}>
              <h2 className="mt-8 font-display text-5xl md:text-6xl tracking-tightest leading-[0.96]">
                A growing <span className="italic font-light">catalogue</span>.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <Reveal delay={200}>
              <p className="text-ash leading-relaxed">
                Start with what you need today. Expand when you're ready —
                an online configurator and direct ordering are launching soon for partners.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-px bg-hairline">
          {items.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <div className="group bg-paper aspect-[4/5] relative overflow-hidden cursor-default">
                <img src={p.img} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between bg-gradient-to-t from-ink/60 to-transparent text-paper">
                  <div>
                    <div className="font-display text-2xl md:text-3xl tracking-tighter">{p.name}</div>
                    <div className="font-mono-ed text-[10px] tracking-[0.2em] uppercase opacity-80 mt-1">{p.note}</div>
                  </div>
                  <span className="font-mono-ed text-[10px] tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ——— Testimonials ——— */

const Testimonials = () => {
  const quotes = [
    {
      q: "The first sample arrived and we cancelled the meeting with our previous supplier the same afternoon.",
      a: "Léa M.",
      r: "Founder, Maison Verde",
    },
    {
      q: "We've ordered three runs now. Zero defects, zero excuses, faxed invoices on the day they promised.",
      a: "David K.",
      r: "Operations, FC Northline",
    },
    {
      q: "Felt like working with a design studio, not a manufacturer.",
      a: "Aiko R.",
      r: "Creative Director, Atrium",
    },
  ];
  return (
    <section className="bg-bone py-32 md:py-48">
      <div className="container-ed">
        <Reveal><SectionLabel index="07">Word of mouth</SectionLabel></Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline">
          {quotes.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="bg-bone p-10 md:p-12 h-full flex flex-col justify-between gap-10 min-h-[360px]">
                <blockquote className="font-display text-2xl md:text-3xl leading-[1.15] tracking-tighter">
                  <span className="text-ash mr-1">“</span>{t.q}<span className="text-ash">”</span>
                </blockquote>
                <figcaption className="font-mono-ed text-[11px] tracking-[0.2em] uppercase text-ash">
                  {t.a} — {t.r}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ——— FAQ ——— */

const FAQ = () => {
  const items = [
    ["What's the minimum order?", "We start at 30 units per style. Smaller pilot runs available for sampling."],
    ["How long does production take?", "Typically 3–5 weeks from approved sample, depending on complexity and decoration."],
    ["Can you match an existing garment?", "Yes. Send us a reference piece and we'll reverse-engineer the fit, fabric and finish."],
    ["Do you handle decoration in-house?", "Embroidery, screen and DTG printing — all done in-house. Patches and woven labels through audited partners."],
    ["What about sustainability?", "Our base blend uses long-staple cotton from certified mills. Full origin documentation available on request."],
    ["Do you ship internationally?", "Yes. Door-to-door logistics worldwide, DDP available for EU and UK."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-paper py-32 md:py-40">
      <div className="container-ed grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <Reveal>
            <SectionLabel index="08">Questions</SectionLabel>
            <h2 className="mt-8 font-display text-5xl md:text-6xl tracking-tightest leading-[0.96]">
              Things worth<br /><span className="italic font-light">asking</span>.
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-8 border-t border-hairline">
          {items.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="border-b border-hairline">
                <button
                  className="w-full flex items-center justify-between gap-6 py-7 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-display text-xl md:text-2xl tracking-tighter">{q}</span>
                  <span className={`font-mono-ed text-lg transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 pr-12 text-ash leading-relaxed max-w-2xl">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ——— Contact ——— */

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", type: "", qty: "", message: "" });
  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSent(true);
  };

  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="container-ed py-32 md:py-48">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <SectionLabel index="09"><span className="text-paper/60">Start a project</span></SectionLabel>
              <h2 className="mt-10 font-display text-5xl md:text-7xl tracking-tightest leading-[0.94]">
                Tell us what<br />you have in <span className="italic font-light">mind</span>.
              </h2>
              <p className="mt-10 text-paper/70 max-w-md leading-relaxed">
                A studio member responds within one business day with first questions and indicative pricing.
                If we're not the right fit, we'll tell you — and recommend someone who is.
              </p>
              <div className="mt-16 space-y-2 font-mono-ed text-[12px] tracking-[0.18em] uppercase text-paper/60">
                <div>studio@twear.co</div>
                <div>+33 1 23 45 67 89</div>
                <div>Paris · Porto · Istanbul</div>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-7 md:pl-12">
            <Reveal delay={120}>
              {sent ? (
                <div className="border border-paper/20 p-10 md:p-14 min-h-[480px] flex flex-col justify-center">
                  <div className="font-mono-ed text-[11px] tracking-[0.2em] uppercase text-paper/60">Received</div>
                  <p className="mt-6 font-display text-3xl md:text-4xl tracking-tighter leading-tight">
                    Thank you, {form.name.split(" ")[0]}.<br />
                    We'll reply by tomorrow.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-0">
                  {[
                    { k: "name", l: "Your name", t: "text", req: true },
                    { k: "company", l: "Company / Team", t: "text" },
                    { k: "email", l: "Email", t: "email", req: true },
                  ].map((f) => (
                    <label key={f.k} className="group block border-b border-paper/20 py-5">
                      <span className="block font-mono-ed text-[10px] tracking-[0.22em] uppercase text-paper/50">{f.l}{f.req && " *"}</span>
                      <input
                        type={f.t}
                        required={f.req}
                        value={(form as any)[f.k]}
                        onChange={update(f.k as any)}
                        className="mt-2 w-full bg-transparent text-paper font-display text-2xl md:text-3xl tracking-tighter placeholder:text-paper/30 outline-none"
                        placeholder="—"
                      />
                    </label>
                  ))}
                  <div className="grid grid-cols-2 gap-px bg-paper/20 border-b border-paper/20">
                    <label className="block bg-ink py-5 pr-6">
                      <span className="block font-mono-ed text-[10px] tracking-[0.22em] uppercase text-paper/50">Project type</span>
                      <select
                        value={form.type}
                        onChange={update("type")}
                        className="mt-2 w-full bg-transparent text-paper font-display text-xl md:text-2xl tracking-tighter outline-none appearance-none"
                      >
                        <option value="" className="bg-ink">—</option>
                        <option className="bg-ink">T-shirts</option>
                        <option className="bg-ink">Hoodies / Sweatshirts</option>
                        <option className="bg-ink">Full capsule</option>
                        <option className="bg-ink">Event / Gifting</option>
                        <option className="bg-ink">Other</option>
                      </select>
                    </label>
                    <label className="block bg-ink py-5 pl-6">
                      <span className="block font-mono-ed text-[10px] tracking-[0.22em] uppercase text-paper/50">Quantity</span>
                      <input
                        type="text"
                        value={form.qty}
                        onChange={update("qty")}
                        placeholder="—"
                        className="mt-2 w-full bg-transparent text-paper font-display text-xl md:text-2xl tracking-tighter placeholder:text-paper/30 outline-none"
                      />
                    </label>
                  </div>
                  <label className="block border-b border-paper/20 py-5">
                    <span className="block font-mono-ed text-[10px] tracking-[0.22em] uppercase text-paper/50">Tell us about it *</span>
                    <textarea
                      required
                      rows={4}
                      maxLength={1000}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="—"
                      className="mt-2 w-full bg-transparent text-paper font-display text-xl md:text-2xl tracking-tighter placeholder:text-paper/30 outline-none resize-none"
                    />
                  </label>
                  <div className="pt-10 flex items-center justify-between">
                    <span className="font-mono-ed text-[10px] tracking-[0.22em] uppercase text-paper/40">Response within 1 business day</span>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-4 border border-paper/40 px-8 py-5 font-mono-ed text-[12px] tracking-[0.22em] uppercase hover:bg-paper hover:text-ink transition-all duration-500"
                    >
                      Send inquiry
                      <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ——— Footer ——— */

const Footer = () => (
  <footer className="bg-ink text-paper border-t border-paper/15">
    <div className="container-ed py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="font-display text-xl tracking-tighter">TWear<span className="text-paper/40">®</span></div>
      <div className="font-mono-ed text-[11px] tracking-[0.2em] uppercase text-paper/50">
        © {new Date().getFullYear()} TWear Studio — All rights reserved
      </div>
      <div className="font-mono-ed text-[11px] tracking-[0.2em] uppercase text-paper/50 flex gap-8">
        <a href="#" className="hover:text-paper">Instagram</a>
        <a href="#" className="hover:text-paper">LinkedIn</a>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <main className="bg-paper text-ink">
    <Header />
    <Hero />
    <Marquee />
    <Philosophy />
    <Work />
    <Industries />
    <Quality />
    <Process />
    <Products />
    <Testimonials />
    <FAQ />
    <Contact />
    <Footer />
  </main>
);

export default Index;
