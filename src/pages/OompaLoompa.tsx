import { Link, useParams } from "react-router-dom";
import { useGetOompaLoompaQuery } from "../service/oompaLoompaApi";

export default function OompaLoompa() {
  const { id } = useParams();
  const { data: oompaLoompa, isLoading } = useGetOompaLoompaQuery(id as string);

  if (
    oompaLoompa &&
    Object.prototype.hasOwnProperty.call(oompaLoompa, "stackTrace")
  ) {
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-xl sm:text-3xl text-slate-800">
          ❌ No existe este Ommpa Loompa
        </p>
        <Link className="block text-xl sm:text-2xl text-indigo-500" to="/">
          Vuelve a la pagina inicial ⬅️
        </Link>
      </div>
    );
  }

  return (
    <>
      {isLoading && <div>Cargando Oompa Loompa...</div>}
      {oompaLoompa && (
        <div className="grid md:grid-cols-2 gap-5">
          <img src={oompaLoompa.image} alt={oompaLoompa.first_name} />
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <p className="text-2xl text-slate-800">
                {oompaLoompa.first_name} {oompaLoompa.last_name}
              </p>
              <p className="text-slate-500">
                {oompaLoompa.gender === "F" ? "Woman" : "Man"}
              </p>
              <p className="text-slate-500">{oompaLoompa.profession}</p>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: oompaLoompa.description }}
            />
          </div>
        </div>
      )}
    </>
  );
}
