import { FunctionComponent } from "react";

const MacBookAir10: FunctionComponent = () => {
  return (
    <div className="relative bg-snow w-full h-[933px] overflow-hidden flex flex-col py-3 px-[138px] box-border items-start justify-start text-center text-[12.84px] text-dimgray font-rubik">
      <div className="relative w-[657px] h-[505px]">
        <div className="absolute top-[89.48px] left-[0.12px] overflow-hidden flex flex-col items-start justify-start gap-[10px]">
          <div className="relative rounded-[37px] bg-white w-[657.25px] h-[423.27px] z-[0]" />
          <button className="cursor-pointer [border:none] py-[17px] px-[41px] bg-maroon my-0 mx-[!important] absolute top-[336.43px] left-[239.13px] rounded-[9px] overflow-hidden flex flex-row items-center justify-center z-[1]">
            <div className="relative text-sm font-medium font-rubik text-white text-center">{`Upload CSV file `}</div>
          </button>
          <div className="my-0 mx-[!important] absolute top-[126.52px] left-[61.48px] flex flex-row items-center justify-center gap-[31px] z-[2]">
            <div className="overflow-hidden flex flex-col items-center justify-center gap-[14px]">
              <div className="relative rounded-[24.83px] bg-gainsboro w-[157.43px] h-[132.91px] opacity-[0.2]" />
              <div className="relative font-medium inline-block w-[100.04px]">{`Upload a CSV File `}</div>
            </div>
            <div className="overflow-hidden flex flex-col items-center justify-center gap-[14px]">
              <div className="relative rounded-[24.83px] bg-gainsboro w-[157.43px] h-[132.91px] opacity-[0.2]" />
              <div className="relative font-medium inline-block w-[100.04px]">{`Connect html text to your csv `}</div>
            </div>
            <div className="overflow-hidden flex flex-col items-center justify-center gap-[14px]">
              <div className="relative rounded-[24.83px] bg-gainsboro w-[157.43px] h-[132.91px] opacity-[0.2]" />
              <div className="relative font-medium inline-block w-[118.3px]">
                Batch generate pdfs for each row
              </div>
            </div>
          </div>
          <div className="my-0 mx-[!important] absolute top-[37.52px] left-[218.13px] flex flex-col items-center justify-center gap-[1px] z-[3] text-sm text-gray">
            <div className="relative font-medium opacity-[0.4]">
              Connect your csv
            </div>
            <div className="relative text-[36px] font-medium">How it works</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookAir10;
