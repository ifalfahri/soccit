import Image from "next/image";
import Link from "next/link";
import SoccitText from "../../public/logo-name.svg";
import SoccitMobile from "../../public/soccit-full.svg";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="h-[10vh] w-full flex items-center border-b px-5 lg:px-14 justify-between flex-row">
      <Link href="/" className="flex items-center gap-x-3">
        <Image
          src={SoccitMobile}
          alt="Soccit mobile icon"
          className="h-10 w-fit"
        />
        <Image
          src={SoccitText}
          alt="Soccit desktop icon"
          className="h-9 w-fit hidden lg:block"
        />
      </Link>

      <ThemeToggle />
    </nav>
  );
}
