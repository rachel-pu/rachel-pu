"use client";

import Link from "next/link";
import {motion} from "framer-motion";

export default function Navbar() {

    return (
        <nav className="flex flex-row justify-between items-center">
            <div className="text-2xl font-janitor text-[#2B2B2B]">rachel pu</div>
            <div className="w-[40%] flex flex-row justify-around">
                {/* home button */}
                <motion.button
                    onClick={() => window.location.href = "/"}
                    className="text-[#2B2B2B] font-product-sans p-2"
                    whileHover={{ color: 'rgb(188,83,59)', scale: 1.08 }}
                >Home</motion.button>

                {/* experience */}
                <motion.button
                    onClick={() => window.location.href = "/experience"}
                    className="text-[#2B2B2B] font-product-sans p-2 "
                    whileHover={{ color: 'rgb(188,83,59)', scale: 1.08 }}
                >Experience</motion.button>

                {/* projects*/}
                <motion.button
                    onClick={() => window.location.href = "/projects"}
                    className="text-[#2B2B2B] font-product-sans p-2 "
                    whileHover={{ color: 'rgb(188,83,59)', scale: 1.08 }}
                >Projects</motion.button>

                {/* extracurriculars */}
                <motion.button
                    onClick={() => window.location.href = "/extracurriculars"}
                    className="text-[#2B2B2B] font-product-sans p-2"
                    whileHover={{ color: 'rgb(188,83,59)', scale: 1.08 }}
                >Extracurriculars</motion.button>

                {/* contact */}
                <motion.button
                    onClick={() => window.location.href = "/contact"}
                    className="text-[#2B2B2B] font-product-sans p-2"
                    whileHover={{ color: 'rgb(188,83,59)', scale: 1.08 }}
                >Contact</motion.button>

            </div>
        </nav>

    );
}