import { useState } from "react";
import { useGetOompaLoompasQuery } from "../service/oompaLoompaApi";
import OompaLoompaItem from "../components/OompaLoompaItem";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, isError, isLoading } = useGetOompaLoompasQuery(page);
  console.log(data, isError, isLoading);

  return (
    <main>
      <header className="flex flex-col justify-center items-center gap-4 mb-12">
        <h1 className="text-6xl text-slate-700">Find your Oompa Loompa</h1>
        <h3 className="text-4xl text-slate-500">There are more than 100k</h3>
      </header>
      {isLoading ? (
        <div>Cargando resultados...</div>
      ) : (
        <section className="flex justify-center mx-4 m-auto md:max-w-[900px] lg:max-w-[1200px]">
          <div className="mx-4 w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-4">
            {data && data?.results.map((oompaLoompa) => (
              <OompaLoompaItem oompaLoompa={oompaLoompa}  />
            ))}
          </div>
        </section>
      )}
      {data && data.current < data.total && (
        <button onClick={() => setPage((page) => page + 1)}>Load more</button>
      )}
    </main>
  );
}
