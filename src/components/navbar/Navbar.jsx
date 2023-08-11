import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const currentPage = useLocation().pathname;

  // console.log(currentPage)

  return (
    <nav className="h-20 w-full bg-slate-900 flex justify-between items-center px-5">
      <div className="navbarLinks flex items-center gap-6">
        <Link to="/" className="text-2xl">
          Fishing Forecast
        </Link>
        <Link
          to="/weather"
          className={
            currentPage === '/weather'
              ? 'text-xl underline'
              : 'text-xl hover:underline'
          }
        >
          Weather
        </Link>
        <Link
          to="/tides"
          className={
            currentPage === '/tides'
              ? 'text-xl underline'
              : 'text-xl hover:underline'
          }
        >
          Tides
        </Link>
      </div>
    </nav>
  );
}
