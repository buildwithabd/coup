import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Image
          src="/logo.svg"
          alt="logo"
          width={87}
          height={37}
          priority
          className="logoSvg"
        />
      </div>

      <div className="navbar-links">
        {["How it Works", "Pricing", "Use Case", "FAQ"].map((link) => (
          <Link key={link} className="" href="/">
            {link}
          </Link>
        ))}
      </div>

      <div className="cta-button">Contact Sales</div>
    </div>
  );
}

export default Navbar;
