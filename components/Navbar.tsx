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

      <div className="relative flex items-center justify-center gap-4 text-base font-medium text-[#8C97A8]">
        {["How it Works", "Pricing", "Use Case", "FAQ"].map((link) => (
          <Link
            key={link}
            className="py-[8px] px-[12px] hover:text-black transition-colors duration-200"
            href="/"
          >
            {link}
          </Link>
        ))}
      </div>

      <div className="cta-button">Contact Sales</div>
    </div>
  );
}

export default Navbar;
