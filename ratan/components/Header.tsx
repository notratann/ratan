import Link from "next/link";
import "../app/globals.css";
const Header = () => {
  return (
    <div className="nav">
    <nav>
      <ul>
        <li>
          <Link href="/Home">Home</Link>
        </li>

        <li>
          <Link href="/About">About</Link>
        </li>

        <li>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Header;
