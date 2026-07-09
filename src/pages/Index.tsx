import { useEffect, useRef, useState } from "react";

import tshirtProduct from "@/assets/products/tshirt-product.jpg";
import hoodieProduct from "@/assets/products/hoodie-product.jpg";
import sportswearProduct from "@/assets/products/sportswear-product.jpg";
import sweatshirtProduct from "@/assets/products/sweatshirt-product.jpg";
import ProjectCard from "@/components/ProjectCard";
import philosophy from "@/assets/philosophy.jpg";
import brands from "@/assets/brands.jpg";
import teams from "@/assets/teams.jpg";
import companies from "@/assets/companies.jpg";
import events from "@/assets/events.jpg";
import hero from "@/assets/hero.jpg";
import fabric from "@/assets/fabric.jpg";
import embroidery from "@/assets/embroidery.jpg";
import collar from "@/assets/collar.jpg";
import hoodie from "@/assets/hoodie.jpg";
import processImg from "@/assets/process.jpg";
import team from "@/assets/team.jpg";
import tshirts from "@/assets/tshirts.jpg";
import accessories from "@/assets/accessories.jpg";

/* ——— Primitives ——— */

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
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
        transform: shown ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 1.1s var(--ease-editorial) ${delay}ms, transform 1.1s var(--ease-editorial) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const Eyebrow = ({ index, children }: { index?: string; children: React.ReactNode }) => (
  <div className="flex items-baseline gap-6 num">
    {index && <span className="font-mono-ed text-[10px] tracking-[0.24em] text-ash">{index}</span>}
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
        scrolled ? "bg-paper/90 backdrop-blur-md border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="container-ed flex h-20 items-center justify-between min-w-0">
       <a href="#top" className="font-display text-4xl tracking-tightest">
  <span className="text-red-600">T</span>
  <span className={scrolled ? "text-ink" : "text-paper"}>
    WEAR
  </span>
</a>
        <nav
          className={`hidden lg:flex items-center gap-8 font-mono-ed text-[15px] tracking-[0.18em] uppercase ${
            scrolled ? "text-ink" : "text-paper"
          }`}
        >
          <a href="#philosophy" className="hover:opacity-60 transition">Подход</a>
          <a href="#work" className="hover:opacity-60 transition">Дизайн</a>
          <a href="#quality" className="hover:opacity-60 transition">Материалы</a>
          <a href="#process" className="hover:opacity-60 transition">Процесс</a>
          <a href="#products" className="hover:opacity-60 transition">Изделия</a>
          <a href="#faq" className="hover:opacity-60 transition">Вопросы</a>
        </nav>
        <a
          href="#contact"
          className={`group font-mono-ed text-[11px] md:text-[15px] tracking-[0.14em] uppercase ${
            scrolled ? "text-ink" : "text-paper"
          }`}
        >
          <span className="border-b border-current pb-1 group-hover:opacity-60 transition">
            Обсудить проект
          </span>
        </a>

      </div>
    </header>
  );
};

/* ——— Hero ——— Asymmetric, magazine cover */

const Hero = () => (
  <section id="top" className="relative min-h-[100svh] w-full overflow-x-hidden bg-ink">
    <img
      src={hero}
      alt="Модель в премиальной хлопковой футболке кремового цвета"
      width={1600}
      height={1920}
      className="absolute inset-0 h-full w-full object-cover opacity-95"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/55" />

    {/* Top meta */}
    <div className="container-ed relative z-10 pt-16 md:pt-28">
      <div className="flex items-start justify-between text-paper/80 font-mono-ed text-[10px] tracking-[0.24em] uppercase animate-rise num">
        <div>
          <div>TWear Studio</div>
          <div className="text-paper/50 mt-1">Производство одежды · с 2023</div>
        </div>
        <div className="text-right hidden md:block">
          <div>РОССИЯ</div>
          <div className="text-paper/50 mt-1">Санкт-петербург</div>
        </div>
      </div>
    </div>

    {/* Headline — asymmetric, bottom-left */}
   <div className="container-ed relative z-10 mt-8 md:mt-12 overflow-hidden">
  <div className="max-w-full md:max-w-[1100px] leading-[0.95]">
    <h1
      className="font-display text-paper tracking-tightest text-[15vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.9] animate-rise"
      style={{ animationDelay: "120ms" }}
    >
      Одежда,<br />
      достойная<br />
      вашего бренда.
    </h1>
  </div>

      <div className="mt-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5 md:col-start-7 lg:col-span-4 lg:col-start-8">
         <p className="text-paper/90 text-lg md:text-3xl leading-[1.55] max-w-md font-light">
            Производственная студия для брендов, команд, компаний и&nbsp;событий.
            Делаем вещи, которые носят с&nbsp;удовольствием — и&nbsp;дарят с&nbsp;гордостью.
          </p>
          <a
            href="#contact"
            className="group mt-8 inline-flex w-full md:w-auto justify-center items-center gap-5 border border-paper/40 px-10 py-5 text-paper font-mono-ed text-[12px] md:text-[16px] tracking-[0.24em] uppercase hover:bg-paper hover:text-ink transition-all duration-500"
          >
            Обсудить проект
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ——— Marquee ——— */


const Audience = () => {

  const items = [
    {
      title: "Бренды",
      text: "Создаем одежду для брендов, которым важно качество.",
      image: brands,
    },
    {
      title: "Команды",
      text: "Экипировка спортивных клубов и академий.",
      image: teams,
    },
    {
      title: "Компании",
      text: "Корпоративная одежда и униформа.",
      image: companies,
    },
    {
      title: "Мероприятия",
      text: "Мерч для фестивалей и крупных событий.",
      image: events,
    },
  ];

  const [active, setActive] = useState(items[0]);
  return (
    <section id="audience" className="bg-paper py-32">
      <div className="container-ed">

       

        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tightest mb-24 max-w-5xl">
          Создаем одежду
          <br />
          для тех,
          <br />
          кому важно качество.
        </h2>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

  {/* Левая колонка */}
  <div className="space-y-8">

    {items.map((item) => (

      <div
        key={item.title}
        onMouseEnter={() => setActive(item)}
        className="group cursor-pointer border-b border-black/10 pb-8"
      >

        <div className="flex items-center justify-between">

          <h3
            className={`font-display text-5xl md:text-6xl transition-all duration-300 ${
              active.title === item.title
                ? "opacity-100 translate-x-2"
                : "opacity-40"
            }`}
          >
            {item.title}
          </h3>

          <span className="text-3xl transition-all duration-300 group-hover:translate-x-2">
            →
          </span>

        </div>

      </div>

    ))}

  </div>

  {/* Правая колонка */}
  <div className="md:sticky md:top-32">

    <div className="overflow-hidden rounded-2xl shadow-xl">

      <img
      key={active.title}
        src={active.image}
        alt={active.title}
        className="w-full aspect-[4/5] object-cover animate-fade"
      />

    </div>

    <p className="mt-8 text-xl leading-relaxed text-ink/70 max-w-md">
      {active.text}
    </p>

  </div>

</div>

      </div>
    </section>
  );
};

/* ——— Manifesto / Philosophy — asymmetric, monumental ——— */

const Philosophy = () => (
  <section id="philosophy" className="bg-paper pt-40 md:pt-56 pb-40 md:pb-56">
    <div className="container-ed">

      

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-12 md:col-span-11">
          <Reveal delay={100}>
            <h2 className="font-display tracking-tightest text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.9]">
              Большинство<br />
              производств заставляют<br />
              выбирать между<br />
             <span className="text-ash">качеством</span> и{" "}
<span className="text-ash">ценой.</span>
            </h2>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-4 md:col-start-8 mt-12 md:mt-20">
      
        </div>

      </div>

      <div className="mt-28 md:mt-40 grid grid-cols-12 gap-10 items-start">

  {/* Фото */}

  <div className="col-span-12 md:col-span-5 md:-mt-24">

    <Reveal delay={100}>
      <img
        src={philosophy}
        alt="TWear"
        className="w-full h-[420px] md:h-[760px] object-cover"
      />
    </Reveal>

  </div>

  {/* Правая колонка */}

 <div className="col-span-12 md:col-span-5 md:col-start-8 min-w-0">

  <Reveal delay={150}>
    <div className="inline-block">
      <h3 className="font-display text-5xl md:text-6xl tracking-tightest leading-none">
        Мы — нет.
      </h3>

      <div className="mt-5 h-[2px] w-full bg-[#D62B2B]" />
    </div>
  </Reveal>

  <Reveal delay={200}>
    <p className="mt-10 text-base md:text-[20px] leading-[1.8] text-ink max-w-full break-words">
      Мы создали TWear, потому что индустрия навязывает ложный выбор.
      Вещи, которые хорошо выглядят, редко выдерживают ежедневную носку.
      Те, что служат долго, слишком часто выглядят как компромисс.
    </p>
  </Reveal>

  <Reveal delay={300}>
    <p className="mt-8 text-base md:text-[20px] leading-[1.8] text-ash max-w-full break-words">
      Мы контролируем каждый этап производства — от выбора ткани до упаковки.
      Поэтому можем удерживать высокий стандарт качества без бессмысленной наценки.
    </p>
  </Reveal>

</div>

</div>

    </div>
  </section>
);
/* ——— Statement image break — full bleed ——— */

const Statement = () => (
  <section className="bg-paper">
    <div className="relative w-full h-[80vh] md:h-[110vh] overflow-hidden">
      <img src={embroidery} alt="Макро ручной вышивки на хлопке" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
     
    </div>
  </section>
);

/* ——— Work / Portfolio — editorial grid ——— */

const Work = () => {
  const items = [
    { img: team, client: "Cheer ANGELS", type: "Тренировочная форма", year: "2025" },
    { img: hoodie, client: "PIRIT", type: "Вышивка", year: "2025" },
    { img: tshirts, client: "Cheermania", type: "фестиваль по чир спорту", year: "2024" },
    { img: collar, client: "Академия чирлидинга Титаны", type: "тренировочная форма", year: "2024" },
  ];
  return (
    <section id="work" className="bg-paper pt-40 md:pt-56">
      <div className="container-ed">
       
        <div className=" grid grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <Reveal delay={120}>
              <h2 className="font-display tracking-tightest text-[12vw] md:text-[9vw] leading-[0.86]">
                Разработка дизайна
              </h2>
            </Reveal>
            <Reveal delay={220}>
  <p className="mt-10 max-w-2xl text-lg md:text-xl leading-[1.8] text-ash">
    Каждый проект создается с чистого листа. Мы разрабатываем графику,
    подбираем материалы и продумываем детали так, чтобы готовое изделие
    выглядело естественным продолжением вашего бренда.
  </p>
</Reveal>
          </div>
        </div>
      </div>

      {/* asymmetric grid */}
      {/* asymmetric grid */}
<div className="mt-24 md:mt-32 grid grid-cols-12 gap-6 md:gap-10 container-ed">

  <Reveal className="col-span-12 md:col-span-7">
    <ProjectCard
      img={items[0].img}
      client={items[0].client}
      type={items[0].type}
    />
  </Reveal>

  <div className="col-span-12 md:col-span-4 md:col-start-9 md:mt-48">
    <Reveal delay={120}>
      <ProjectCard
        img={items[1].img}
        client={items[1].client}
        type={items[1].type}
        aspect="3/4"
      />
    </Reveal>
  </div>

  <div className="col-span-12 md:col-span-4 md:col-start-2 md:mt-24">
    <Reveal delay={80}>
      <ProjectCard
        img={items[3].img}
        client={items[3].client}
        type={items[3].type}
        aspect="3/4"
      />
    </Reveal>
  </div>

  <Reveal
    className="col-span-12 md:col-span-6 md:col-start-7"
    delay={160}
  >
    <ProjectCard
      img={items[2].img}
      client={items[2].client}
      type={items[2].type}
    />
  </Reveal>

</div>

<div className="h-32 md:h-48" />
    </section>
  );
};




/* ——— Quality — split, dense data ——— */

const Quality = () => (
  <section id="quality" className="bg-paper">
    <div className="container-ed pt-40 md:pt-56 pb-24">
      
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-10">
          <Reveal delay={100}>
            <h2 className="font-display tracking-tightest text-[12vw] md:text-[8vw] leading-[0.86]">
              Премиальный<br />
стандарт<br />
начинается<br />
с&nbsp;ткани.
            </h2>
          </Reveal>
          <Reveal delay={180}>
  <p className="mt-10 max-w-2xl text-lg md:text-xl leading-[1.8] text-ash">
    Мы тщательно подбираем материалы, технологии и способы нанесения,
    чтобы каждое изделие выглядело безупречно и сохраняло свои свойства
    даже после активной эксплуатации.
  </p>
</Reveal>
        </div>
      </div>
    </div>

    {/* Fabric — large left, data right */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-hairline">
      <div className="md:col-span-7 bg-paper relative aspect-[4/5] md:aspect-auto md:min-h-[820px] overflow-hidden">
       <img
  src={fabric}
  alt="Макро плетения премиального хлопка"
  loading="lazy"
  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-[1.04]"
/>
      </div>
      <div className="md:col-span-5 bg-paper p-10 md:p-20 sticky top-28 self-start">
        <Reveal>
          <div className="space-y-12">
            {[
  [
    "Материалы",
    "Отбираем ткани, которые выглядят достойно не только в день получения, но и спустя месяцы активной носки.",
  ],
  [
    "Производство",
    "Современное оборудование и точная настройка процессов позволяют добиться стабильного качества каждой партии.",
  ],
  [
    "Вышивка",
    "Четкие контуры, высокая плотность стежка и объем, который сохраняется на протяжении всего срока службы изделия.",
  ],
  [
    "Печать",
    "Изображения остаются насыщенными, не трескаются и выдерживают многократные стирки.",
  ],
  [
    "Контроль",
    "Каждая партия проходит финальную проверку перед отправкой, чтобы заказ соответствовал нашим стандартам.",
  ],
].map(([k, v]) => (
              <div
  key={k}
 className="group transition-all duration-500 hover:translate-x-2"
>
                
                <div className="col-span-12">

  <div className="font-display text-4xl md:text-5xl tracking-tightest leading-[0.95] transition-all duration-300 group-hover:translate-x-1 group-hover:scale-[1.03]">
    {k}
  </div>

  <div className="mt-4 mb-5 h-[2px] w-0 bg-red-500 transition-all duration-500 group-hover:w-40"></div>

  <p className="max-w-md text-ash leading-[1.7] text-[15px] transition-colors duration-300 group-hover:text-ink">
    {v}
  </p>

</div>
              </div>

            ))}
          </div>
        </Reveal>
      </div>
    </div>

  
  </section>
);

/* ——— Process — full-bleed image + sparse list ——— */

const Process = () => {
  const steps: [string, string, string][] = [
  [
    "01",
    "Бриф",
    "Обсуждаем задачу, сроки и бюджет. Формируем требования к будущему изделию."
  ],
  [
    "02",
    "Образец",
    "Согласовываем дизайн, цвет и пошив."
  ],
  [
    "03",
    "Производство",
    "После утверждения образца запускаем тираж и контролируем каждый этап производства."
  ],
  [
    "04",
    "Контроль",
    "Проверяем каждое изделие перед упаковкой. Только после этого заказ отправляется клиенту."
  ],
  [
    "05",
    "Доставка",
    "Упаковываем заказ и отправляем удобной транспортной компанией с отслеживанием."
  ],
];
  return (
    <section id="process" className="bg-ink text-paper">
      <div className="relative h-[80svh] min-h-[520px] overflow-hidden">
        <img src={processImg} alt="Интерьер швейного цеха" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black" />
        <div className="container-ed relative h-full flex items-end pb-16 md:pb-24">
          <Reveal>
           
            <h2 className="mt-8 font-display text-[14vw] md:text-[9vw] tracking-tightest leading-[0.86]">
  От идеи<br />
  до готового<br />
  изделия.
</h2>
          </Reveal>
        </div>
      </div>

      <div className="container-ed py-24 md:py-32">
        <div>
          {steps.map(([n, name, desc], i) => (
            <Reveal key={n} delay={i * 60}>
            <div className="group grid grid-cols-12 gap-8 border-t border-paper/15 py-12 md:py-16 items-start last:border-b transition-all duration-500 hover:bg-white/[0.03] hover:border-white/20 hover:px-8">

  <div className="col-span-2 md:col-span-1 font-mono-ed text-[10px] tracking-[0.24em] text-paper/40 transition-colors duration-300 group-hover:text-[#E53935]">
    {n}
  </div>

  <div className="col-span-10 md:col-span-11">

    <h3 className="font-display text-4xl md:text-6xl tracking-tightest transition-all duration-500 group-hover:translate-x-3 group-hover:text-[#E53935]">
  {name}
</h3>

<div className="mt-5 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-28" />

    <p className="mt-6 max-w-2xl text-paper/60 leading-[1.7] text-base md:text-lg transition-colors duration-300 group-hover:text-paper">
      {desc}
    </p>

  </div>

</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ——— Products — editorial catalogue ——— */

const Products = () => {
 const items = [
  {
    img: tshirtProduct,
    name: "Футболки",
    note: "180 г/м², плотный хлопок",
    desc: "Премиальные футболки для брендов, команд и корпоративной одежды.",
  },
  {
    img: sportswearProduct,
    name: "Носки",
    note: "Индивидуальная вязка и логотип",
    desc: "Изготавливаем носки с фирменным дизайном и жаккардовой вязкой.",
  },
  {
    img: sweatshirtProduct,
    name: "Чехлы",
    note: "Защита формы при перевозке",
    desc: "Фирменные чехлы для хранения и безопасной транспортировки формы.",
  },
  {
    img: hoodieProduct,
    name: "Худи",
    note: "Плотный футер премиум",
    desc: "Теплые худи с вышивкой, печатью или индивидуальным дизайном.",
  },
];
  return (
    <section id="products" className="bg-paper py-40 md:py-56">
      <div className="container-ed">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
           
            <Reveal delay={120}>
              <h2 className="mt-10 font-display tracking-tightest text-[12vw] md:text-[8vw] leading-[0.86]">
                Изделия
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:mt-auto">
            <Reveal delay={200}>
              <p className="text-ash leading-[1.55] text-base md:text-lg">
                Производим одежду для брендов, спортивных команд и компаний. Каждый проект разрабатывается индивидуально - от первой идеи до готового тиража.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-12 gap-6 md:gap-10">
          {items.map((p, i) => {
            // Asymmetric heights
            const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];
            const ratios = ["aspect-[4/5]", "aspect-[3/4]", "aspect-[3/4]", "aspect-[4/5]"];
            const offsets = ["", "md:mt-24", "", "md:mt-16"];
            return (
              <Reveal key={p.name} delay={(i % 3) * 80} className={`col-span-12 ${spans[i]} ${offsets[i]}`}>
               <article className="group transition-all duration-700 hover:-translate-y-3">
                  <div className={`relative ${ratios[i]} overflow-hidden bg-[#f5f4f2] rounded-sm`}>
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                 <div className="mt-6 border-t border-hairline pt-5">

  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">

    <div>

     <h3 className="font-display text-[40px] md:text-[54px] leading-[0.95] tracking-tightest text-black transition-all duration-300 group-hover:text-[#E53935] group-hover:translate-x-1">
  {p.name}
</h3>

      <div className="mt-4 h-[2px] w-0 bg-[#E53935] transition-all duration-500 group-hover:w-24" />

    </div>

    <span className="font-mono-ed text-[10px] tracking-[0.24em] uppercase text-ash text-right transition-colors duration-300 group-hover:text-black">
      {p.note}
    </span>

  </div>

  <p className="mt-5 max-w-md text-ash text-[15px] leading-relaxed">
    {p.desc}
  </p>

</div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};


/* ——— FAQ ——— */

const FAQ = () => {
  const items: [string, string][] = [
    ["Какой минимальный тираж?", "Старт от 10 единиц на модель. Доступны пилотные семплы меньшим тиражом."],
    ["Сколько занимает производство?", "В среднем 2–3 недели после утверждения образца. Точный срок зависит от сложности изделия, тиража и вида нанесения."],
    ["Можно ли разработать изделие с нуля?", "Да. Поможем с выбором ткани, разработаем лекала, подготовим дизайн."],
    ["Какие способы нанесения доступны?", "Вышивка, шелкография, DTF, сублимация, жаккардовая вязка, нашивки."],
    ["Можно ли заказать разные изделия одновременно?", "Да. В одном заказе могут быть футболки, худи, носки, чехлы, аксессуары и другая продукция в едином фирменном стиле."],
    ["Работаете только с крупными компаниями?", "Нет. Мы производим одежду как для небольших брендов и спортивных команд, так и для крупных корпоративных клиентов."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-paper py-40 md:py-56">
      <div className="container-ed grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <Reveal>
           
            <h2 className="mt-12 font-display text-[12vw] md:text-[6vw] tracking-tightest leading-[0.88]">
              Частые
вопросы.
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 border-t border-hairline">
          {items.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="border-b border-hairline">
               <div className="relative">
              
                <button
  className="group w-full flex items-center justify-between gap-6 py-8 text-left"
  onClick={() => setOpen(isOpen ? null : i)}
>
  <h3
    className={`font-display text-2xl md:text-3xl tracking-tightest transition-colors duration-300 ${
      isOpen ? "text-[#E53935]" : "text-black"
    } group-hover:text-[#E53935]`}
  >
    {q}
  </h3>

  <span
    className={`text-2xl transition-all duration-300 ${
      isOpen
        ? "rotate-45 text-[#E53935]"
        : "text-black group-hover:text-[#E53935]"
    }`}
  >
    +
  </span>
</button>
                <div className="grid transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="pb-8 pr-12 text-ash leading-[1.55] max-w-2xl text-base md:text-lg">{a}</p>
                  </div>
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

/* ——— Contact — premium lead form ——— */

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
      <div className="container-ed py-24 md:py-56">
       

        <div className="mt-16 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <Reveal delay={100}>
              <h2 className="font-display tracking-tightest text-[13vw] md:text-[9vw] leading-[0.9]">
                Расскажите
о вашем
проекте.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:mt-auto">
            <Reveal delay={200}>
              <p className="text-paper/70 leading-[1.55] max-w-md text-base md:text-lg">
                Ответим в течение рабочего дня.

Если уже есть идея, эскиз или референсы —
прикрепите их после отправки заявки.
              </p>
              <div className="mt-12 space-y-2 font-mono-ed text-[11px] tracking-[0.24em] uppercase text-paper/60 num">
                <div>Iliacheercoach@gmail.com</div>
                <div>+7 (999) 225 07 62</div>
                <div>VK</div>
                <div>Санкт-Петербург</div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 md:mt-32">
          <Reveal delay={120}>
            {sent ? (
              <div className="border-t border-paper/20 pt-16">
                <div className="font-mono-ed text-[10px] tracking-[0.24em] uppercase text-paper/60">Заявка принята</div>
                <p className="mt-8 font-display text-5xl md:text-7xl tracking-tightest leading-[0.92]">
                  Спасибо, {form.name.split(" ")[0]}.<br />
                  Ответим до завтра.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-12 gap-x-8 gap-y-0">
                {[
  {
    k: "name",
    l: "Имя",
    t: "text",
    req: true,
    span: "md:col-span-6",
  },
  {
    k: "company",
    l: "Компания / команда",
    t: "text",
    span: "md:col-span-6",
  },
  {
    k: "email",
    l: "Телефон или Telegram",
    t: "text",
    req: true,
    span: "md:col-span-6",
  },
].map((f) => (
                  <label
  key={f.k}
  className={`group block col-span-12 ${f.span}`}
>

  <span
    className="
      block
      font-mono-ed
      text-[15px]
      tracking-[0.24em]
      uppercase
      text-paper/50
      transition-colors
      duration-300
      group-focus-within:text-[#E53935]
    "
  >
    {f.l}{f.req && " *"}
  </span>

  <input
    type={f.t}
    required={f.req}
    value={(form as any)[f.k]}
    onChange={update(f.k as any)}
    placeholder="—"
    className="
      mt-4
      w-full
      bg-transparent
      text-paper
      font-display
      text-[38px]
      md:text-[48px]
      leading-none
      tracking-tight
      placeholder:text-paper/20
      outline-none
      pb-6
      border-b
      border-paper/20
      transition-all
      duration-300
      focus:border-[#E53935]
    "
  />

</label>
                ))}

                <div className="col-span-12 py-8 border-b border-paper/20">

  <span className="block font-mono-ed text-[15px] tracking-[0.24em] uppercase text-paper/50 mb-6">
    Что нужно изготовить?
  </span>

  <div className="flex flex-wrap gap-3">

    {[
      "Футболки",
      "Худи",
      "Свитшоты",
      "Носки",
      "Чехлы",
      "Другое",
    ].map((item) => (
      <button
        key={item}
        type="button"
        onClick={() => setForm({ ...form, type: item })}
        className={`
          px-6 py-3
          border
          text-sm
          uppercase
          tracking-[0.2em]
          transition-all
          duration-300

          ${
            form.type === item
              ? "border-[#E53935] text-[#E53935] bg-white/5"
              : "border-paper/20 text-paper/60 hover:border-[#E53935] hover:text-white"
          }
        `}
      >
        {item}
      </button>
    ))}

  </div>

</div>

                <label className="group relative block py-6 col-span-12">
                  
                  <span className="block font-mono-ed text-[15px] tracking-[0.24em] uppercase text-paper/50">Расскажите подробнее *</span>
                  <textarea
                    required
                    rows={4}
                    maxLength={1200}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="—"
                    className="
mt-4
w-full
bg-transparent
text-paper
font-display
text-[34px]
md:text-[42px]
leading-tight
tracking-tight
placeholder:text-paper/20
outline-none
resize-none
pb-6
border-b
border-paper/20
transition-all
duration-300
focus:border-[#E53935]
"
                  />
                </label>

                <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 col-span-12">
                  <span className="font-mono-ed text-[15px] tracking-[0.24em] uppercase text-paper/40">
                    Ответ в течение одного рабочего дня
                  </span>
                  <button
                    type="submit"
                    className="group inline-flex w-full md:w-auto justify-center items-center gap-5 border border-paper/40 px-10 py-5 font-mono-ed text-[11px] tracking-[0.24em] uppercase hover:bg-paper hover:text-ink transition-all duration-500"
                  >
                    Отправить заявку
                    <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ——— Footer ——— */

const Footer = () => (
  <footer className="bg-ink text-paper border-t border-paper/15">
    <div className="container-ed py-16">

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-12 gap-8 items-end">
        <div className="col-span-6">
          <div className="font-display text-[10vw] tracking-tightest leading-[0.86]">
            TWEAR
          </div>
        </div>

        <div className="col-span-3 font-mono-ed text-[10px] tracking-[0.24em] uppercase text-paper/60 space-y-2">
          <div>Instagram</div>
          <div>Telegram</div>
          <div>Behance</div>
        </div>

        <div className="col-span-3 font-mono-ed text-[10px] tracking-[0.24em] uppercase text-paper/60 space-y-2">
          <div>iliacheercoach@gmail.com</div>
          <div>+7 (999) 225-07-62</div>
          <div>© {new Date().getFullYear()} TWear</div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">

        <div className="font-display text-6xl leading-none tracking-tightest break-words">
          TWEAR
        </div>

        <div className="mt-10 font-mono-ed text-[10px] break-all uppercase tracking-[0.24em] text-paper/60 space-y-4">
          <div>iliacheercoach@gmail.com</div>
          <div>+7 (999) 225-07-62</div>
          <div>VK</div>
          <div>Санкт-Петербург</div>
        </div>

        <div className="mt-10 border-t border-paper/15 pt-6 font-mono-ed text-[10px] uppercase tracking-[0.24em] text-paper/40">
          © {new Date().getFullYear()} TWear
        </div>

      </div>

    </div>
  </footer>
);

const Index = () => (
  <main className="bg-paper text-ink overflow-x-hidden">
    <Header />
    <Hero />

    {/*
    <Audience />
    <Philosophy />
    <Statement />
    <Work />
    <Quality />
    <Process />
    <Products />
    <FAQ />
    <Contact />
    <Footer />
    */}
  </main>
);

export default Index;
