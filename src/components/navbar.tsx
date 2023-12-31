import useScrollTop from "@/hooks/use-scroll-top";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./container";
import NavItem from "./nav-item";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants";

const Navbar = () => {
  const isScrolled = useScrollTop(100);
  const [selected, setSelected] = useState("");
  const location = useLocation();

  useEffect(() => {
    setSelected(location.pathname.split("/")[1]);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 py-7 border-b shadow-sm w-full transition-all duration-500",
        isScrolled && "py-4"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                text={link.label}
                selected={selected === link.label}
                setSelected={setSelected}
              />
            ))}
          </div>
          <Button variant="premium">
            <Link to="/generate">Generate</Link>
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
