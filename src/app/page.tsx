import Image from "next/image";

export default function Home() {
  return (
      // dot background
      <div className="bg-[#F3F1EB] h-screen bg-dot-pattern bg-dot-size flex flex-col">

          {/* text and picture */}
          <div className="bg-amber-200 items-center flex m-auto flex-row">
              {/* text*/}
              <div className="flex flex-col max-w-[60%]">
                <h1 className="text-5xl font-janitor text-[#2B2B2B]">hello! i&#39;m</h1>
                <p className="text-8xl font-dm-sans-black tracking-tighter text-[#2B2B2B]">Rachel Pu</p>
                <p className="text-lg font-product-sans text-[#2B2B2B] mt-8">I’m a 3rd year student majoring in computer science & minoring in digital arts and design at the University of Florida. </p>
              </div>
                {/* picture */}

          </div>
      </div>
  );
}
