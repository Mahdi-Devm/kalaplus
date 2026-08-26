import { ImgNormalCustom } from "../image/ImgNormalCustom";

function Logo({ classname, width }: { classname?: string; width?: number }) {
  return (
    <ImgNormalCustom
      src={"/img/logo/logo-mobile.png"}
      alt=""
      height={100}
      width={width ? width : 100}
      className={classname}
    />
  );
}

export default Logo;
