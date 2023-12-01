import { useParams } from "react-router-dom";
import { useGetOompaLoompaQuery } from "@/service/oompaLoompaApi";
import Error from "@/components/Error";

export default function OompaLoompa() {
  const { id } = useParams();
  const { data: oompaLoompa, isLoading } = useGetOompaLoompaQuery(id as string);

  // Error handling, I can't use the isError property from RTK Query because when is failing the request the data is not undefined, that's why I'm using the stackTrace property to check if the request is failing
  if (
    oompaLoompa &&
    Object.prototype.hasOwnProperty.call(oompaLoompa, "stackTrace")
  ) {
    return <Error />;
  }

  return (
    <div className="flex items-center md:max-w-[900px] lg:max-w-[1200px] m-auto">
      {isLoading && (
        <div className="flex self-start w-full text-left">
          <p className="mx-4">Oompa Loompa Loading...</p>
        </div>
      )}
      {oompaLoompa && (
        <div className="grid md:grid-cols-2 gap-5 mx-4">
          <img src={oompaLoompa.image} width={574} height={430} alt={oompaLoompa.first_name} />
          <div className="flex flex-col gap-10">
            <div className="space-y-2">
              <h1 className="text-2xl text-slate-800">
                {oompaLoompa.first_name} {oompaLoompa.last_name}
              </h1>
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
    </div>
  );
}
