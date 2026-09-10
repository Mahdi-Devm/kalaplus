import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";

function ThumbnailCategory() {
  return (
    <div className="flex justify-between mt-10">
      {[
        "/common/img/category/1-768x330.png",
        "/common/img/category/2-768x330.png",
        "/common/img/category/3-768x330.png",
      ].map((v, i) => (
        <ImgNormalCustom
          key={i}
          src={v}
          width={400}
          height={400}
          alt="thumbnail"
        />
      ))}
    </div>
  );
}

export default ThumbnailCategory;
