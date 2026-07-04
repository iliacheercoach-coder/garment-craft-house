type ProjectCardProps = {
  img: string;
  client: string;
  type: string;
  aspect?: "4/5" | "3/4";
};

const ProjectCard = ({
  img,
  client,
  type,
  aspect = "4/5",
}: ProjectCardProps) => {
  return (
    <article className="group transition-all duration-500 hover:-translate-y-2">

      <div
        className={`relative overflow-hidden bg-bone ${
          aspect === "3/4" ? "aspect-[3/4]" : "aspect-[4/5]"
        }`}
      >

        <img
          src={img}
          alt={`${client} — ${type}`}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 group-hover:scale-[1.08]"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-500" />

        <div className="absolute left-8 right-8 bottom-8">

          <div className="flex justify-between items-end text-white uppercase tracking-[0.18em] text-[11px] opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">

            <span>{client}</span>

            <span>{type}</span>

          </div>

          <a
            href="#contact"
            className="mt-5 flex h-14 items-center justify-center bg-white text-black uppercase tracking-[0.18em] text-xs font-medium opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100"
          >
            Обсудить проект →
          </a>

        </div>

      </div>

    </article>
  );
};

export default ProjectCard;