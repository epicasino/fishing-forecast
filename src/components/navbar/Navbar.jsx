import NavbarLinks from './NavbarLinks';
import { navbarLinkArray } from './navbarLinkArray';

export default function Navbar() {

  // console.log(navbarLinkArray);

  return (
    <nav className="h-20 w-full bg-slate-900 flex justify-between items-center px-5">
      <div className="navbarLinks flex items-center gap-6">
        <h1 className="text-2xl">Fishing Forecast</h1>
        {navbarLinkArray.map(navbarLink => (<NavbarLinks props={navbarLink} key={navbarLink.title}/>))}
      </div>
    </nav>
  );
}
