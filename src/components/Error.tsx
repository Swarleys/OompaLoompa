import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xl sm:text-3xl text-slate-800">
        An error has ocurred ❌
      </p>
      <Link className="block text-xl sm:text-2xl text-indigo-500" to="/">
        Go back to the landing page ⬅️
      </Link>
    </div>
  );
}
