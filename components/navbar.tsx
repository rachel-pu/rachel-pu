import Link from "next/link";

export default function Navbar() {
  return (
          <nav className="flex flex-row justify-between items-center">
              <div className="text-2xl font-janitor text-[#2B2B2B]">rachel pu</div>
              <div className="w-[40%] flex flex-row justify-around">
                  <Link href="/" className="hover:underline text-[#2B2B2B] font-product-sans">Home</Link>
                  <Link href="/experience" className="hover:underline text-[#2B2B2B] font-product-sans">Experience</Link>
                  <Link href="/projects" className="hover:underline text-[#2B2B2B] font-product-sans">Projects</Link>
                  <Link href="/extracurriculars" className="hover:underline text-[#2B2B2B] font-product-sans">Extracurriculars</Link>
                  <Link href="/contact" className="hover:underline text-[#2B2B2B] font-product-sans">Contact</Link>
              </div>
          </nav>

  );
}

