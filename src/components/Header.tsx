import { NavLink } from "react-router";

const navLink = ({ isActive }: { isActive: boolean }) =>
  `rounded-lg px-4 py-2 font-semibold transition-colors
   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
   ${
     isActive
       ? "bg-blue-600 text-white"
       : "bg-white text-gray-700 hover:bg-orange-200"
   }`;

const Header = () => {
  return (
    <header className="text-center p-4 border-2 border-gray-400">
      <p>Webbutveckling</p>
      <h1 className="font-bold m-3 text-3xl">Team Task Board</h1>
      <p>Detta är den andra laborationen i kursen Webbutveckling</p>
      <nav className="mt-5 flex flex-wrap justify-center gap-3">
        <NavLink to="/" className={navLink}>
          Task-Board
        </NavLink>
        <NavLink to="/create" className={navLink}>
          Lägg till uppgift
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
