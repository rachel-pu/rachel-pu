import Image from "next/image";

export default function Home() {
  return (

      // dot background
      <div className="bg-[#F3F1EB] h-screen bg-dot-pattern bg-dot-size">

          {/* text */}
          <div>
                <h1 className="text-4xl">hello! i&#39;m</h1>
                <p className="text-lg">Rachel Pu</p>
          </div>

      </div>
  );
}
