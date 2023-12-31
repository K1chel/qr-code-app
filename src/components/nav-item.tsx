import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({
  text,
  selected,
  setSelected,
  href,
}: {
  text: string;
  selected: boolean;
  href: string;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <NavLink to={href}>
      <button
        onClick={() => setSelected(text)}
        className={`${
          selected
            ? "text-white"
            : "text-slate-900 hover:text-slate-800 hover:bg-gray-100"
        } text-sm transition-colors px-3 py-1 rounded-md relative`}
      >
        <span className="relative z-10">{text}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 rounded-md"
          />
        )}
      </button>
    </NavLink>
  );
};

export default NavItem;
