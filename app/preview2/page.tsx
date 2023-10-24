import type { NextPage } from "next";

const CurriculaPreview: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[2276px] overflow-hidden text-left text-21xl text-steelblue-100 font-inter">
      <div className="absolute top-[106px] left-[890px] w-[502px] h-[467px]">
        <img
          className="absolute top-[0px] left-[0px] w-[502px] h-[467px] object-cover"
          alt=""
          src="/Logo_Stack 1.png"
        />
      </div>
      <div className="absolute top-[937px] left-[626px] w-[884px] h-[357px]">
        <div className="absolute top-[36px] left-[220px] font-semibold">
          ICTMMP4001-CERTIFICATE VI
        </div>
        <b className="absolute top-[148px] left-[15px] text-[60px] text-steelblue-200">
          MULTIMEDIA PRODUCTION
        </b>
        <div className="absolute top-[273px] left-[302px] font-semibold">
          RQF Level 4 CURRICULUM
        </div>
        <img
          className="absolute top-[-1.5px] left-[0px] w-[884px] h-[3px]"
          alt=""
          src="/Vector 16.svg"
        />
        <img
          className="absolute top-[355.5px] left-[0px] w-[884px] h-[3px]"
          alt=""
          src="/Vector 16.svg"
        />
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[466px] h-[2276px] object-cover"
        alt=""
        src="/design-element-wavy-lines-tape-motion11_299644-15641 1.svg"
      />
    </div>
  );
};

export default CurriculaPreview;
