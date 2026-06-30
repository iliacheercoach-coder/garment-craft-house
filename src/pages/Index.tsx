import { useEffect, useRef, useState } from "react";

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
      <div className="container-ed flex h-20 items-center justify-between">
        <a href="#top" className={`font-display text-2xl tracking-tightest ${scrolled ? "text-ink" : "text-paper"}`}>
          TWEAR
        </a>
        <nav
          className={`hidden lg:flex items-center gap-10 font-mono-ed text-[10px] tracking-[0.24em] uppercase ${
            scrolled ? "text-ink" : "text-paper"
          }`}
        >
          <a href="#philosophy" className="hover:opacity-60 transition">Подход</a>
          <a href="#work" className="hover:opacity-60 transition">Работы</a>
          <a href="#quality" className="hover:opacity-60 transition">Материалы</a>
          <a href="#process" className="hover:opacity-60 transition">Процесс</a>
          <a href="#products" className="hover:opacity-60 transition">Изделия</a>
          <a href="#faq" className="hover:opacity-60 transition">Вопросы</a>
        </nav>
        <a
          href="#contact"
          className={`group font-mono-ed text-[10px] tracking-[0.24em] uppercase whitespace-nowrap ${
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
  <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
    <img
      src={hero}
      alt="Модель в премиальной хлопковой футболке кремового цвета"
      width={1600}
      height={1920}
      className="absolute inset-0 h-full w-full object-cover opacity-95 ken-burns"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/55" />

    {/* Top meta */}
    <div className="container-ed relative z-10 pt-28">
      <div className="flex items-start justify-between text-paper/80 font-mono-ed text-[10px] tracking-[0.24em] uppercase animate-rise num">
        <div>
          <div>TWear Studio</div>
          <div className="text-paper/50 mt-1">Производство одежды · с 2019</div>
        </div>
        <div className="text-right hidden md:block">
          <div>Выпуск №01</div>
          <div className="text-paper/50 mt-1">Москва · Стамбул · Лиссабон</div>
        </div>
      </div>
    </div>

    {/* Headline — asymmetric, bottom-left */}
    <div className="container-ed absolute inset-x-0 bottom-0 z-10 pb-14 md:pb-20">
      <h1
        className="font-display text-paper tracking-tightest text-[15vw] md:text-[12vw] lg:text-[10.5vw] animate-rise"
        style={{ animationDelay: "120ms" }}
      >
        Одежда,<br />
        достойная<br />
        вашего бренда.
      </h1>

      <div className="mt-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5 md:col-start-7 lg:col-span-4 lg:col-start-8">
          <p className="text-paper/85 text-base md:text-lg leading-[1.4] max-w-md">
            Производственная студия для брендов, команд, компаний и&nbsp;событий.
            Делаем вещи, которые носят с&nbsp;удовольствием — и&nbsp;дарят с&nbsp;гордостью.
          </p>
          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-5 border border-paper/40 px-8 py-5 text-paper font-mono-ed text-[11px] tracking-[0.24em] uppercase hover:bg-paper hover:text-ink transition-all duration-500"
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

const Marquee = () => {
  const items = ["Бренды", "Команды", "Компании", "События", "Студии", "Фестивали", "Университеты", "Агентства"];
  const full = [...items, ...items, ...items];
  return (
    <div className="border-y border-hairline overflow-hidden bg-paper py-14 md:py-20">
      <div className="flex whitespace-nowrap marquee">
        {full.map((it, i) => (
          <span key={i} className="font-display text-7xl md:text-[7rem] tracking-tightest mx-12 flex items-center gap-12 text-ink">
            {it}
            <span className="inline-block w-3 h-3 bg-ink translate-y-[-0.4em]" />
          </span>
        ))}
      </div>
    </div>
  );
};

/* ——— Manifesto / Philosophy — asymmetric, monumental ——— */

const Philosophy = () => (
  <section id="philosophy" className="bg-paper pt-40 md:pt-56 pb-32 md:pb-48">
    <div className="container-ed">
      <Reveal>
        <Eyebrow index="01">Подход</Eyebrow>
      </Reveal>

      <div className="mt-20 md:mt-32 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-11 md:col-start-1">
          <Reveal delay={100}>
            <h2 className="font-display tracking-tightest text-[11vw] md:text-[9vw] lg:text-[8vw] leading-[0.95] md:leading-[0.86]">
              Большинство<br />
              производств заставляют<br />
              выбирать между<br />
              <span className="text-ash">качеством</span> и&nbsp;<span className="text-ash">ценой</span>.
            </h2>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-4 md:col-start-9 mt-12 md:mt-24">
          <Reveal delay={260}>
            <p className="font-display text-5xl md:text-6xl tracking-tightest leading-[0.95] md:leading-[0.92]">
              Мы&nbsp;— нет.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-32 md:mt-48 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4 md:col-start-7">
          <Reveal delay={100}>
            <p className="text-base md:text-lg leading-[1.55] text-ink">
              Мы&nbsp;создали TWear, потому что индустрия навязывает ложный выбор. Вещи, которые
              хорошо выглядят, редко выдерживают носку. Те, что служат долго, редко ощущаются
              правильно.
            </p>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-7 mt-2">
          <Reveal delay={200}>
            <p className="text-base md:text-lg leading-[1.55] text-ash">
              Работаем напрямую с&nbsp;собственным производством, без посредников. Поэтому держим
              высокий стандарт по&nbsp;цене, которая остаётся осмысленной.
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
      <div className="absolute bottom-10 left-6 md:bottom-16 md:left-16 text-paper font-mono-ed text-[10px] tracking-[0.24em] uppercase">
        №02 — Деталь, олива / охра
      </div>
    </div>
  </section>
);

/* ——— Work / Portfolio — editorial grid ——— */

const Work = () => {
  const items = [
    { img: team, client: "Северный СК", type: "Тренировочная форма", year: "2025" },
    { img: hoodie, client: "Maison Verde", type: "Капсула худи", year: "2025" },
    { img: tshirts, client: "Atrium", type: "Сотрудники, выпуск 03", year: "2024" },
    { img: collar, client: "Form & Field", type: "Футболки с вышивкой", year: "2024" },
  ];
  return (
    <section id="work" className="bg-paper pt-40 md:pt-56">
      <div className="container-ed">
        <Reveal><Eyebrow index="02">Избранные работы</Eyebrow></Reveal>
        <div className="mt-12 grid grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <Reveal delay={120}>
              <h2 className="font-display tracking-tightest text-[12vw] md:text-[9vw] leading-[0.86]">
                Недавние<br />заказы.
              </h2>
            </Reveal>
          </div>
        </div>
      </div>

      {/* asymmetric grid */}
      <div className="mt-24 md:mt-32 grid grid-cols-12 gap-6 md:gap-10 container-ed">
        {/* big left */}
        <Reveal className="col-span-12 md:col-span-7">
          <article className="group">
            <div className="relative aspect-[4/5] overflow-hidden bg-bone">
              <img
                src={items[0].img}
                alt={`${items[0].client} — ${items[0].type}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between font-mono-ed text-[10px] tracking-[0.24em] uppercase">
              <span>{items[0].client}</span>
              <span className="text-ash">{items[0].type} · {items[0].year}</span>
            </div>
          </article>
        </Reveal>

        {/* small right, offset down */}
        <div className="col-span-12 md:col-span-4 md:col-start-9 md:mt-48">
          <Reveal delay={120}>
            <article className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-bone">
                <img
                  src={items[1].img}
                  alt={`${items[1].client} — ${items[1].type}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between font-mono-ed text-[10px] tracking-[0.24em] uppercase">
                <span>{items[1].client}</span>
                <span className="text-ash">{items[1].year}</span>
              </div>
            </article>
          </Reveal>
        </div>

        {/* small left low */}
        <div className="col-span-12 md:col-span-4 md:col-start-2 md:mt-24">
          <Reveal delay={80}>
            <article className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-bone">
                <img
                  src={items[3].img}
                  alt={`${items[3].client} — ${items[3].type}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between font-mono-ed text-[10px] tracking-[0.24em] uppercase">
                <span>{items[3].client}</span>
                <span className="text-ash">{items[3].year}</span>
              </div>
            </article>
          </Reveal>
        </div>

        {/* tall right */}
        <Reveal className="col-span-12 md:col-span-6 md:col-start-7" delay={160}>
          <article className="group">
            <div className="relative aspect-[4/5] overflow-hidden bg-bone">
              <img
                src={items[2].img}
                alt={`${items[2].client} — ${items[2].type}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between font-mono-ed text-[10px] tracking-[0.24em] uppercase">
              <span>{items[2].client}</span>
              <span className="text-ash">{items[2].type} · {items[2].year}</span>
            </div>
          </article>
        </Reveal>
      </div>
      <div className="h-32 md:h-48" />
    </section>
  );
};

/* ——— Industries — typographic list, inverted ——— */

const Industries = () => {
  const rows = [
    { n: "I", name: "Бренды", note: "Контрактное производство, дропы, пресс-семплы" },
    { n: "II", name: "Команды", note: "Матчевая, тренировочная и фанатская экипировка" },
    { n: "III", name: "Компании", note: "Велком-наборы, внутренние капсулы, мерч" },
    { n: "IV", name: "События", note: "Фестивали, конференции, свадьбы, подарки" },
  ];
  return (
    <section className="bg-ink text-paper py-40 md:py-56">
      <div className="container-ed">
        <Reveal><Eyebrow index="03"><span className="text-paper/70">Для кого</span></Eyebrow></Reveal>

        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <Reveal delay={100}>
              <h2 className="font-display tracking-tightest text-[12vw] md:text-[8vw] leading-[0.86]">
                Производим<br />для четырёх<br />аудиторий.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 md:mt-32">
          {rows.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <div className="group grid grid-cols-12 items-baseline gap-6 border-t border-paper/15 py-10 md:py-14 last:border-b">
                <div className="col-span-2 md:col-span-1 font-mono-ed text-[10px] tracking-[0.24em] text-paper/40 num">{r.n}</div>
                <div className="col-span-10 md:col-span-7 font-display text-[14vw] md:text-[7vw] tracking-tightest leading-[0.88]">
                  {r.name}
                </div>
                <div className="col-span-12 md:col-span-4 text-paper/60 text-base md:text-lg leading-[1.4]">
                  {r.note}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ——— Quality — split, dense data ——— */

const Quality = () => (
  <section id="quality" className="bg-paper">
    <div className="container-ed pt-40 md:pt-56 pb-24">
      <Reveal><Eyebrow index="04">Материалы и контроль</Eyebrow></Reveal>
      <div className="mt-16 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-10">
          <Reveal delay={100}>
            <h2 className="font-display tracking-tightest text-[12vw] md:text-[8vw] leading-[0.86]">
              Стандарт,<br />который<br />чувствуется в&nbsp;руке.
            </h2>
          </Reveal>
        </div>
      </div>
    </div>

    {/* Fabric — large left, data right */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-hairline">
      <div className="md:col-span-7 bg-paper relative aspect-[4/5] md:aspect-auto md:min-h-[820px] overflow-hidden">
        <img src={fabric} alt="Макро плетения премиального хлопка" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="md:col-span-5 bg-paper p-10 md:p-20 flex flex-col justify-center">
        <Reveal>
          <div className="space-y-12">
            {[
              ["95 / 5", "Хлопок и полиэстер. Мягкость на ощупь, структура, которая сохраняется после ста стирок."],
              ["180 г/м²", "Средне-тяжёлая плотность. Не парит, держит силуэт, ложится естественно."],
              ["Вышивка", "Промышленная нить, откалиброванные машины. Чёткие края, без выбившихся петель."],
              ["Печать", "Пигментные чернила связаны с волокном. Износостойкость без потери тактильности."],
              ["Контроль", "Проверка на раскрое, пошиве, отделке и упаковке. Четыре точки до отгрузки."],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-12 gap-x-4 gap-y-3 items-baseline border-b border-hairline pb-8 last:border-0 last:pb-0">
                <div className="col-span-12 md:col-span-5 font-display text-4xl md:text-5xl tracking-tightest num leading-[0.95]">{k}</div>
                <p className="col-span-12 md:col-span-7 text-ash leading-[1.5] text-[15px]">{v}</p>
              </div>

            ))}
          </div>
        </Reveal>
      </div>
    </div>

    {/* Two macro images */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-hairline">
      <div className="md:col-span-5 bg-paper aspect-[4/5] overflow-hidden relative">
        <img src={collar} alt="Деталь рёбра воротника и плечевого шва" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="md:col-span-7 bg-paper aspect-[4/5] md:aspect-auto overflow-hidden relative">
        <img src={embroidery} alt="Объёмная вышивка на хлопковом полотне" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      </div>
    </div>
  </section>
);

/* ——— Process — full-bleed image + sparse list ——— */

const Process = () => {
  const steps: [string, string, string][] = [
    ["01", "Бриф", "Слушаем. Тиражи, сроки, бюджет, референсы. Никаких шаблонных форм."],
    ["02", "Образец", "Физический семпл до старта тиража. Вы трогаете руками то, что закажете."],
    ["03", "Производство", "Раскрой, пошив, декорирование. Прозрачные обновления на каждом этапе."],
    ["04", "Контроль", "Четыре точки приёмки. Брак не отгружается, а переделывается."],
    ["05", "Доставка", "Упаковка, маркировка, логистика до двери. Трек-номер в почте."],
  ];
  return (
    <section id="process" className="bg-ink text-paper">
      <div className="relative h-[80svh] min-h-[520px] overflow-hidden">
        <img src={processImg} alt="Интерьер швейного цеха" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink" />
        <div className="container-ed relative h-full flex items-end pb-16 md:pb-24">
          <Reveal>
            <Eyebrow index="05"><span className="text-paper/70">Процесс</span></Eyebrow>
            <h2 className="mt-8 font-display text-[14vw] md:text-[9vw] tracking-tightest leading-[0.86]">
              Пять шагов.<br />Ничего скрытого.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="container-ed py-24 md:py-32">
        <div>
          {steps.map(([n, name, desc], i) => (
            <Reveal key={n} delay={i * 60}>
              <div className="grid grid-cols-12 gap-6 border-t border-paper/15 py-10 md:py-14 items-baseline last:border-b">
                <div className="col-span-2 md:col-span-1 font-mono-ed text-[10px] tracking-[0.24em] text-paper/40 num">{n}</div>
                <div className="col-span-10 md:col-span-5 font-display text-4xl md:text-6xl tracking-tightest">
                  {name}
                </div>
                <p className="col-span-12 md:col-span-6 text-paper/65 leading-[1.5] text-base md:text-lg">{desc}</p>
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
    { img: tshirts, name: "Футболки", note: "180 г/м², плотный хлопок" },
    { img: hoodie, name: "Худи", note: "Начёс изнутри, двойная игла" },
    { img: collar, name: "Свитшоты", note: "Структурный круглый ворот" },
    { img: accessories, name: "Сумки", note: "Брендированные шопперы" },
    { img: embroidery, name: "Носки", note: "Вязка под заказ, тканый логотип" },
    { img: fabric, name: "Аксессуары", note: "Кепки, патчи, шевроны" },
  ];
  return (
    <section id="products" className="bg-paper py-40 md:py-56">
      <div className="container-ed">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <Reveal><Eyebrow index="06">Изделия</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h2 className="mt-10 font-display tracking-tightest text-[12vw] md:text-[8vw] leading-[0.86]">
                Растущий<br />каталог.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:mt-auto">
            <Reveal delay={200}>
              <p className="text-ash leading-[1.55] text-base md:text-lg">
                Начните с&nbsp;того, что нужно сегодня. Расширяйтесь, когда будете готовы&nbsp;—
                онлайн-конфигуратор и&nbsp;прямой заказ для партнёров готовятся к&nbsp;запуску.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-12 gap-6 md:gap-10">
          {items.map((p, i) => {
            // Asymmetric heights
            const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7", "md:col-span-7", "md:col-span-5"];
            const ratios = ["aspect-[4/5]", "aspect-[3/4]", "aspect-[3/4]", "aspect-[4/5]", "aspect-[4/5]", "aspect-[3/4]"];
            const offsets = ["", "md:mt-24", "", "md:mt-16", "", "md:mt-20"];
            return (
              <Reveal key={p.name} delay={(i % 3) * 80} className={`col-span-12 ${spans[i]} ${offsets[i]}`}>
                <article className="group">
                  <div className={`relative ${ratios[i]} overflow-hidden bg-bone`}>
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-6">
                    <div className="font-display text-2xl md:text-3xl tracking-tightest">{p.name}</div>
                    <div className="font-mono-ed text-[10px] tracking-[0.24em] uppercase text-ash text-right">{p.note}</div>
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

/* ——— Testimonials — large quote, magazine style ——— */

const Testimonials = () => {
  const quotes = [
    {
      q: "Первый образец приехал — встречу с прежним поставщиком отменили в тот же день.",
      a: "Лея М.",
      r: "Основатель, Maison Verde",
    },
    {
      q: "Три тиража подряд. Ноль брака, ноль оправданий, счета — день в день.",
      a: "Давид К.",
      r: "Операции, Северный СК",
    },
    {
      q: "Ощущение, что работаешь с дизайн-студией, а не с фабрикой.",
      a: "Айко Р.",
      r: "Креативный директор, Atrium",
    },
  ];
  return (
    <section className="bg-bone py-40 md:py-56">
      <div className="container-ed">
        <Reveal><Eyebrow index="07">Отзывы</Eyebrow></Reveal>

        <div className="mt-24 md:mt-32 space-y-32 md:space-y-48">
          {quotes.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className={`grid grid-cols-12 gap-8 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                <blockquote
                  className={`col-span-12 ${
                    i % 2 === 1 ? "md:col-span-9 md:col-start-4" : "md:col-span-9"
                  } font-display tracking-tighter md:tracking-tightest text-[7vw] md:text-[5.5vw] leading-[1.05] md:leading-[0.95]`}
                >
                  «{t.q}»
                </blockquote>

                <figcaption
                  className={`col-span-12 ${
                    i % 2 === 1 ? "md:col-span-4 md:col-start-9" : "md:col-span-4"
                  } font-mono-ed text-[10px] tracking-[0.24em] uppercase text-ash`}
                >
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
  const items: [string, string][] = [
    ["Какой минимальный тираж?", "Старт от 30 единиц на модель. Доступны пилотные семплы меньшим тиражом."],
    ["Сколько занимает производство?", "Обычно 3–5 недель с момента утверждения образца — в зависимости от сложности и декорирования."],
    ["Можете повторить существующее изделие?", "Да. Пришлите референс — воспроизведём посадку, ткань и отделку."],
    ["Декор делаете сами?", "Вышивка, шелкография и DTG — внутри. Патчи и тканые этикетки — у проверенных партнёров."],
    ["Что с устойчивостью?", "База — длинноволокнистый хлопок с сертифицированных фабрик. Документы по происхождению — по запросу."],
    ["Возите за рубеж?", "Да. Доставка по миру до двери, для ЕС и Великобритании доступен DDP."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-paper py-40 md:py-56">
      <div className="container-ed grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <Reveal>
            <Eyebrow index="08">Вопросы</Eyebrow>
            <h2 className="mt-12 font-display text-[12vw] md:text-[6vw] tracking-tightest leading-[0.88]">
              О чём<br />стоит<br />спросить.
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 border-t border-hairline">
          {items.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="border-b border-hairline">
                <button
                  className="w-full flex items-center justify-between gap-6 py-8 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-display text-2xl md:text-3xl tracking-tightest">{q}</span>
                  <span className={`font-mono-ed text-2xl transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className="grid transition-all duration-500 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="pb-8 pr-12 text-ash leading-[1.55] max-w-2xl text-base md:text-lg">{a}</p>
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
      <div className="container-ed py-40 md:py-56">
        <Reveal><Eyebrow index="09"><span className="text-paper/70">Начать проект</span></Eyebrow></Reveal>

        <div className="mt-16 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <Reveal delay={100}>
              <h2 className="font-display tracking-tightest text-[14vw] md:text-[9vw] leading-[0.86]">
                Расскажите,<br />что у вас<br />на уме.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:mt-auto">
            <Reveal delay={200}>
              <p className="text-paper/70 leading-[1.55] max-w-md text-base md:text-lg">
                Сотрудник студии отвечает в&nbsp;течение одного рабочего дня — первые вопросы
                и&nbsp;ориентировочная стоимость. Если мы не&nbsp;подходим, скажем честно
                и&nbsp;порекомендуем тех, кто подходит.
              </p>
              <div className="mt-12 space-y-2 font-mono-ed text-[11px] tracking-[0.24em] uppercase text-paper/60 num">
                <div>studio@twear.co</div>
                <div>+7 (495) 123 45 67</div>
                <div>Москва · Стамбул · Лиссабон</div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 md:mt-32">
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
                  { k: "name", l: "Ваше имя", t: "text", req: true, span: "md:col-span-6" },
                  { k: "company", l: "Компания / команда", t: "text", span: "md:col-span-6" },
                  { k: "email", l: "Электронная почта", t: "email", req: true, span: "md:col-span-6" },
                  { k: "qty", l: "Тираж (примерно)", t: "text", span: "md:col-span-6" },
                ].map((f) => (
                  <label key={f.k} className={`group block border-b border-paper/20 py-6 col-span-12 ${f.span}`}>
                    <span className="block font-mono-ed text-[10px] tracking-[0.24em] uppercase text-paper/50">{f.l}{f.req && " *"}</span>
                    <input
                      type={f.t}
                      required={f.req}
                      value={(form as any)[f.k]}
                      onChange={update(f.k as any)}
                      className="mt-3 w-full bg-transparent text-paper font-display text-3xl md:text-4xl tracking-tightest placeholder:text-paper/25 outline-none"
                      placeholder="—"
                    />
                  </label>
                ))}

                <label className="block border-b border-paper/20 py-6 col-span-12">
                  <span className="block font-mono-ed text-[10px] tracking-[0.24em] uppercase text-paper/50">Тип проекта</span>
                  <select
                    value={form.type}
                    onChange={update("type")}
                    className="mt-3 w-full bg-transparent text-paper font-display text-3xl md:text-4xl tracking-tightest outline-none appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-ink">—</option>
                    <option className="bg-ink">Футболки</option>
                    <option className="bg-ink">Худи / свитшоты</option>
                    <option className="bg-ink">Полная капсула</option>
                    <option className="bg-ink">Событие / подарки</option>
                    <option className="bg-ink">Другое</option>
                  </select>
                </label>

                <label className="block border-b border-paper/20 py-6 col-span-12">
                  <span className="block font-mono-ed text-[10px] tracking-[0.24em] uppercase text-paper/50">Расскажите подробнее *</span>
                  <textarea
                    required
                    rows={3}
                    maxLength={1200}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="—"
                    className="mt-3 w-full bg-transparent text-paper font-display text-2xl md:text-3xl tracking-tightest placeholder:text-paper/25 outline-none resize-none leading-tight"
                  />
                </label>

                <div className="pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 col-span-12">
                  <span className="font-mono-ed text-[10px] tracking-[0.24em] uppercase text-paper/40">
                    Ответ в течение одного рабочего дня
                  </span>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-5 self-start border border-paper/40 px-10 py-6 font-mono-ed text-[11px] tracking-[0.24em] uppercase hover:bg-paper hover:text-ink transition-all duration-500"
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
      <div className="grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-6">
          <div className="font-display text-[18vw] md:text-[10vw] tracking-tightest leading-[0.86]">TWEAR</div>
        </div>
        <div className="col-span-6 md:col-span-3 font-mono-ed text-[10px] tracking-[0.24em] uppercase text-paper/60 space-y-2">
          <div>Instagram</div>
          <div>Telegram</div>
          <div>Behance</div>
        </div>
        <div className="col-span-6 md:col-span-3 font-mono-ed text-[10px] tracking-[0.24em] uppercase text-paper/60 space-y-2 num text-right md:text-left">
          <div>studio@twear.co</div>
          <div>+7 (495) 123 45 67</div>
          <div>© {new Date().getFullYear()} TWear Studio</div>
        </div>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <main className="bg-paper text-ink overflow-x-hidden">
    <Header />
    <Hero />
    <Marquee />
    <Philosophy />
    <Statement />
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
