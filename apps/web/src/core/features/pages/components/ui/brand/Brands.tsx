import brand1 from "../../../../../../../public/common/img/brand/bb1.png";
import brand2 from "../../../../../../../public/common/img/brand/bb2.png";
import brand3 from "../../../../../../../public/common/img/brand/bb3.png";
import brand4 from "../../../../../../../public/common/img/brand/bb4.png";
import brand5 from "../../../../../../../public/common/img/brand/bb5.png";
import brand6 from "../../../../../../../public/common/img/brand/bb6.png";
import brand7 from "../../../../../../../public/common/img/brand/bb8.png";
import brand8 from "../../../../../../../public/common/img/brand/bb9.png";

import Image from "next/image";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8];

const Brands = () => {
  return (
<div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-4 lg:grid-cols-8 lg:gap-10">
  {brands.map((brand, index) => (
    <Image
      key={index}
      src={brand}
      alt={`برند ${index + 1}`}
      className="mx-auto h-auto max-h-36  object-contain"
    />
  ))}
</div>
  );
};

export default Brands;
