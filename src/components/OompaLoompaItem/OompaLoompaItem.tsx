import { Link } from "react-router-dom";
import type { OompaLoompaOnList } from "@/service/oompaLoompaApi";

interface OompaLoompaItemProps {
  oompaLoompa: OompaLoompaOnList;
}

export default function OompaLoompaItem({ oompaLoompa }: OompaLoompaItemProps) {
  return (
    <li className="mx-auto max-w-[400px] [&>a>img+p]:hover:text-cyan-500">
      <Link to={`/${oompaLoompa.id}`} key={oompaLoompa.id}>
        <img
          src={oompaLoompa.image}
          loading={oompaLoompa.id < 4 ? "eager" : "lazy"}
          width={350}
          height={280}
          alt={oompaLoompa.first_name}
        />
        <p className="text-2xl text-slate-800">
          {oompaLoompa.first_name} {oompaLoompa.last_name}
        </p>
        <p className="text-slate-500">
          {oompaLoompa.gender === "F" ? "Woman" : "Man"}
        </p>
        <p className="text-slate-500">{oompaLoompa.profession}</p>
      </Link>
    </li>
  );
}
