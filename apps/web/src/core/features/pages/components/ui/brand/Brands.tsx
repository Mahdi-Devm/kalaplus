"use client";

import Image from "next/image";
import { brands } from "../../../assets/mock/brands/brands";

function Brands() {
  return (
    <div className="flex">
      {brands.map((brand, index) => (
        <div
          key={brand}
          className={`flex flex-1 items-center justify-center px-2 py-4 lg:px-6 ${
            index >= 4? "hidden lg:flex" : ""
          }`}
        >
          <Image
            src={brand}
            alt={brand}
            width={160}
            height={100}
            className="h-28 w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 lg:h-40"
          />
        </div>
      ))}
    </div>
  );
}

export default Brands;
