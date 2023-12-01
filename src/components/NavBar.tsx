import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-slate-300 py-2 mb-8 sm:mb-16">
      <nav className="flex m-auto md:max-w-[900px] lg:max-w-[1200px]">
        <Link to="/" className="flex gap-2 items-center">
          <img
            src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png"
            alt="Logo Oompa Loompa"
            width={23}
            height={23}
            className="w-8 h-6 ml-4"
          />
          <p className="text-2xl text-slate-800">Oompa Loompa's Crew</p>
        </Link>
      </nav>
    </header>
  );
}
