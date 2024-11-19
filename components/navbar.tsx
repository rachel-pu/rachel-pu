import Link from "next/link";
import {motion} from "framer-motion";

export default function Navbar() {


    return (
        <nav className="flex flex-row justify-between items-center p-5 ">
            <div className="text-2xl font-janitor text-[#2B2B2B]">rachel pu</div>
            <div className="w-[40%] flex flex-row justify-around">
                {/* home button */}
                <motion.button
                    onClick={() => window.location.href = "/"}
                    className="text-[#2B2B2B] font-product-sans p-2 rounded-3xl"
                    whileHover={{ color: 'rgb(188,83,59)', scale: 1.05 }}
                >Home</motion.button>


                <Link href="/experience" className=" text-[#2B2B2B] font-product-sans p-2">Experience</Link>
                <Link href="/projects" className="text-[#2B2B2B] font-product-sans p-2">Projects</Link>
                <Link href="/extracurriculars" className="text-[#2B2B2B] font-product-sans p-2">Extracurriculars</Link>
                <Link href="/contact" className="text-[#2B2B2B] font-product-sans p-2">Contact</Link>
            </div>
        </nav>

    );
}