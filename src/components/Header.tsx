
import { Link, useLocation } from "react-router-dom";
import { Map, BookOpen, Home, Compass, Palette, Eye } from "lucide-react";

const nav = [
  { title: "Home", to: "/", icon: Home },
  { title: "Immersive View", to: "/immersive", icon: Eye },
  { title: "Mapping Ramayana Trail", to: "/map", icon: Map },
  { title: "Trip Planner", to: "/trip-planner", icon: Compass },
  { title: "Culture & Arts", to: "/culture-arts", icon: Palette },
];

export const Header = () => {
  const location = useLocation();

  return (
    <header className="w-full bg-gradient-to-r from-orange-100 via-orange-50 to-sky-100 shadow-md border-b border-orange-200 fixed top-0 left-0 z-40">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3 font-extrabold text-xl tracking-wide text-orange-700 hover:opacity-80">
          <img src="/lovable-uploads/1383e8a6-ea55-4cf4-830a-d36851b59055.png" alt="Footsteps of Rama" className="h-10 w-10 rounded-full border-orange-200 border-2 object-cover shadow-sm" />
          <span>Footsteps of Rama</span>
        </Link>
        <nav className="flex gap-6 items-center">
          {nav.map(({ title, to, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex gap-1 items-center px-3 py-1.5 rounded-md font-medium transition ${
                location.pathname === to ? "bg-orange-200 text-orange-900 shadow" : "hover:bg-orange-100 text-slate-700"
              }`}
            >
              <Icon size={18} className="mr-1" />
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
