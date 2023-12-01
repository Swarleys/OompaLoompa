import { useEffect, useRef, useState } from "react";
import { useGetOompaLoompasQuery } from "../service/oompaLoompaApi";
import OompaLoompaItem from "../components/OompaLoompaItem";
import { Link } from "react-router-dom";

export default function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const fetchingElement = useRef<HTMLDivElement>(null);
  const {
    data: oompaLoompaResponse,
    isLoading,
    isSuccess,
  } = useGetOompaLoompasQuery(page);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const filteredOompaLoompas = oompaLoompaResponse?.results.filter(
    (oompaLoompa) => {
      return `${oompaLoompa.first_name} ${oompaLoompa.last_name} ${oompaLoompa.profession}`
        .toLowerCase()
        .includes(search.toLowerCase());
    }
  );

  useEffect(() => {
    if (oompaLoompaResponse?.current) {
      setPage(oompaLoompaResponse.current);
    }
  }, [oompaLoompaResponse]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "100px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && isSuccess) {
        setPage((page) => page + 1);
      }
    }, options);
    if (fetchingElement.current) observer.observe(fetchingElement.current);
  }, [isSuccess]);

  // Error handling, I can't use the isError property from RTK Query because when is failing the request the data is not undefined, that's why I'm using the stackTrace property to check if the request is failing
  if (
    oompaLoompaResponse &&
    Object.prototype.hasOwnProperty.call(oompaLoompaResponse, "stackTrace")
  ) {
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-xl sm:text-3xl text-slate-800">
          ❌ No existe esta pagina Ommpa Loompa
        </p>
        <Link className="block text-xl sm:text-2xl text-indigo-500" to="/">
          Vuelve a la pagina inicial ⬅️
        </Link>
      </div>
    );
  }

  return (
    <main>
      <header className="flex flex-col justify-center items-center gap-4 mb-12 md:max-w-[900px] lg:max-w-[1200px] m-auto">
        <search role="search" className="self-end mr-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap 4px"
          >
            <input
              type="search"
              onChange={handleSearch}
              value={search}
              id="search"
              name="search"
              className="border border-gray-300 rounded-md p-2"
              aria-label="Busqueda de Oompa Loompas"
              placeholder="Busqueda de Oompa..."
            />
          </form>
        </search>
        <h1 className="text-6xl text-slate-700">Find your Oompa Loompa</h1>
        <h2 className="text-4xl text-slate-500">There are more than 100k</h2>
      </header>
      {isLoading ? (
        <div>Cargando resultados...</div>
      ) : (
        <section className="flex m-auto md:max-w-[900px] lg:max-w-[1200px]">
          <div className="mx-4 w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-4">
            {filteredOompaLoompas &&
              filteredOompaLoompas?.map((oompaLoompa) => (
                <OompaLoompaItem
                  key={oompaLoompa.id}
                  oompaLoompa={oompaLoompa}
                />
              ))}
          </div>
        </section>
      )}
      {oompaLoompaResponse &&
        oompaLoompaResponse.current < oompaLoompaResponse.total && (
          <div ref={fetchingElement} />
        )}
    </main>
  );
}
