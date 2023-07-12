import { FunctionComponent } from "react";

const MacBookAir7: FunctionComponent = () => {
  return (
    <div className="relative bg-snow w-full h-[933px] overflow-hidden flex flex-col py-3 px-[138px] box-border items-center justify-center text-center text-sm text-maroon-100 font-rubik">
      <div className="w-[978px] h-[921px] overflow-hidden shrink-0 flex flex-row flex-wrap py-0 px-[60px] box-border items-center justify-center gap-[16px]">
        <div className="overflow-hidden flex flex-col py-0 px-[0.5648102164268494px] items-center justify-center">
          <img
            className="relative w-[172.27px] h-[68.91px] overflow-hidden shrink-0"
            alt=""
            src="/logo-svg.svg"
          />
        </div>
        <div className="rounded-[25px] bg-lavenderblush box-border h-[633px] overflow-hidden flex flex-col py-7 px-[343px] items-center justify-start text-[14.25px] border-[1px] border-solid border-mistyrose">
          <div className="rounded-[41px] bg-lightpink overflow-hidden flex flex-row py-[7px] px-[15px] items-center justify-center">
            <div className="relative leading-[20px] font-medium">{`HTML & CSS Preview`}</div>
          </div>
        </div>
        <div className="rounded-[10px] bg-maroon overflow-hidden flex flex-row py-[17px] px-[41px] items-center justify-center text-white">
          <div className="relative font-medium">Download as PDF</div>
        </div>
        <div className="rounded-[10px] bg-lavenderblush overflow-hidden flex flex-row py-[17px] px-[41px] items-center justify-center gap-[10px] border-[1px] border-solid border-maroon-100">
          <img
            className="relative w-[21.89px] h-[21.87px]"
            alt=""
            src="/group-6.svg"
          />
          <div className="relative font-medium">Connect HTML with CSV data</div>
        </div>
      </div>
    </div>
  );
};

export default MacBookAir7;
