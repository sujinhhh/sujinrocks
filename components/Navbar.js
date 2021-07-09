import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__logo">
        <h1>zzin</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
    </nav>
  );
};

export default Navbar;
