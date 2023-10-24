import type { NextPage } from "next";

const CurriculaPreview: NextPage = () => {
    return (
        <div className="w-full bg-gray-600  flex flex-col items-center justify-center">
            {/* page 1 */}
            <div className="mt-2 relative bg-white w-[1200px] h-[1700px] overflow-hidden text-left text-6xl text-white font-inter">
                <div className="flex justify-between py-20  text-steelblue-300">
                    <div className="flex flex-col justify-center items-center w-1/2">
                        <img
                            className=" w-40"
                            alt=""
                            src="/Coat_of_arms_of_Rwanda 1.png"
                        />
                        <div className="mt-6 font-medium text-[23px]">
                            Republic of Rwanda
                        </div>
                        <img
                            className=""
                            alt=""
                            src="/Line 567.png"
                        />
                        <span className="text-[20px] font-bold flex items-center ">
                            Ministry of Education
                        </span>
                    </div>
                    <div className="w-1/2 flex justify-center">
                        <img
                            className="w-80 object-contain"
                            alt=""
                            src="/Logo_Stack 1.png"
                        />
                    </div>
                </div>
                <div className="flex justfy-between">
                    <div className="z-40 relative right w-[1050px] h-[682px]">
                        <img
                            className="w-full z-40 "
                            alt=""
                            src="/Vector 11.png"
                        />
                    </div>
                    <img src="/image.png" 
                            alt=""
                            className="absolute left-0 z-20 w-[950px] object-cover"
                         />
                    <div className="left absolute right-0 z-40">
                        <div className="text-blue-400 text-[50px] flex justify-center items-center font-black h-[250px]">
                            CURRICULUM
                        </div>
                        <div className="">
                            <img
                                className="relative w-[450px] h-[433px]"
                                alt=""
                                src="/Vector 12.png"
                            />
                            <div className="absolute flex flex-col top-80 right-10 flex justify-center items-center">
                                <span className="text-white text-[51px] pb-5">RQF LEVEL</span>
                                <span className="text-white text-[61px] font-extrabold">4</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="z-40 bg-blue-600 text-center font-bold text-[40px] py-10 mt-0">
                    <span className=" text-white p-0 m-0 ">
                        <p className=" text-white p-0 m-0 ">TVET CERTIFICATE IV </p>
                        <p className=" text-white p-0 m-0">in</p>
                        <p className=" text-white p-0 m-0">MULTIMEDIA PRODUCTION</p>
                    </span>
                </div>
                
                {/*footer  */}
                <div className="flex justify-between ">
                    <div className="absolute z-40 bg-cornflowerblue w-[1512px] h-[17px] opacity-80"></div>
                    <div className="relative">
                        <img
                            className=" w-[650px]"
                            alt=""
                            src="/Vector 13.png"
                        />
                        <div className="absolute top-20 left-20 rounded-[50%] bg-white box-border w-[200px] h-[200px] border-[10px] border-solid border-steelblue-100 flex justify-center items-center">
                            <span className="text-gray-800 font-bold">ICTMMP402</span>
                        </div>
                    </div>
                    <div className="text-gray-800 font-semibold flex justify-start items-center px-20">
                        Kigali, May, 2023
                    </div>
                </div>
            </div>

            {/* page 2 */}
            <div className="mt-2 relative bg-white w-[1200px] h-[1700px] overflow-hidden text-left text-21xl text-steelblue-100 font-inter">
                <div className="w-full flex justify-end ">
                    <img
                        className="object-contain px-20 py-40"
                        alt=""
                        src="/Logo_Stack 1.png"
                    />
                </div>
                <div className="absolute top-[850px] right-0 w-[884px] h-[357px]">
                    <div className="right-0 flex justify-end">
                        <img
                            className="h-[3px]"
                            alt=""
                            src="/Vector 16.svg"
                        />
                    </div>

                    <div className="py-2 px-10 pt-5 text-right text-[20px] font-bold">
                        ICTMMP4001-CERTIFICATE VI
                    </div>
                    <div className="py-3 px-10 text-right text-[40px] font-black text-steelblue-200">
                        MULTIMEDIA PRODUCTION
                    </div>
                    <div className="py-2 px-10 pb-5 text-right text-[20px] font-bold">
                        RQF Level 4 CURRICULUM
                    </div>

                    <div className="right-0 flex justify-end">
                        <img
                            className="h-[3px]"
                            alt=""
                            src="/Vector 16.svg"
                        />
                    </div>
                </div>
                <img
                    className="absolute top-[0px] left-[0px] w-[300px] h-[1700] object-cover"
                    alt=""
                    src="/design-element-wavy-lines-tape-motion11_299644-15641 1.svg"
                />
            </div>
            
        </div>
    );
};

export default CurriculaPreview;
