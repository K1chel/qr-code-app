import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { QrCode } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isScrolled = useScrollTop(100);

  return (
    <nav className="fixed top-0 inset-x-0 w-full border-b bg-gray-50 z-50">
      <header
        className={cn(
          "py-5 max-w-screen-xl mx-auto md:px-5 px-3 transition-all duration-300 backdrop-blur-md w-full",
          isScrolled && "py-3"
        )}
      >
        <div className="flex items-center justify-between">
          <Link to="/">
            <QrCode
              className={cn(
                "w-10 h-10 transition-all duration-300 text-violet-700",
                isScrolled && "w-8 h-8"
              )}
            />
          </Link>
          <section>
            <Link to="/generate">
              <Button
                className="transition-all duration-300"
                size={isScrolled ? "default" : "lg"}
                variant="premium"
              >
                Generate
              </Button>
            </Link>
          </section>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
