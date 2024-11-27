import Navbar from "../../../components/navbar";
import { motion } from "framer-motion";
import { animate, stagger } from "framer-motion";

export default function Experience()  {
    return(
        // entire screen
        <div className="h-screen flex flex-col p-6">
            <Navbar />

            {/* timeline */}
            <div className="items-center flex flex-col mt-[5%]">
                <h1 className="font-satoshi-bold text-[#2B2B2B] text-5xl"> Experience </h1>
                
            </div>
        </div>
    );
}
