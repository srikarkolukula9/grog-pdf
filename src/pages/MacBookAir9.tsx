import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import LogoSvg from "../../src/images/logo-svg.svg";
import LinkBlue from "../images/Group 6blue.svg";
import { Link } from "react-router-dom";
import Group6 from "../../src/images/group-6.svg";
import Trash from "../../src/images/Group 6_trash.svg";
import ColumnBox from "./ColumnBox";
// import { fetchColumnNames } from "./fetchColumnName";
import { columnFetcher, fetchColumnNames } from "./fetchColumnName";

const renderer = async () => {
  try {
    const column = await fetchColumnNames();
    const renderedColumns = column.map((value: string, index: number) => (
      <ColumnBox name={value} link={true} key={index} />
    ));
    return renderedColumns;
  } catch (error) {
    console.error(error);
    return null; // Handle the error case or return an empty array if desired
  }
};

const MacBookAir9: FunctionComponent = () => {
  const [columns, setColumns] = useState<ReactNode[]>([]);

  useEffect(() => {
    renderer().then((renderedColumns) => {
      setColumns(renderedColumns);
    });
  }, []);
  return (
    <div className="relative bg-snow w-full overflow-hidden flex flex-col pt-[33px] pb-[60px]  pl-[79px] box-border items-center justify-center gap-[38px] text-center text-[14.25px] text-maroon-100 font-rubik">
      <div className="overflow-hidden flex flex-col py-0 px-[0.5648102164268494px] items-center justify-center">
        <img
          className="relative w-[172.27px] h-[68.91px] overflow-hidden shrink-0"
          alt=""
          src={LogoSvg}
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-[35px]">
        <div className="relative rounded-[25px] bg-lavenderblush-100 box-border w-[704px] h-[633px] overflow-hidden shrink-0 border-[1px] border-solid border-mistyrose-200">
          <div className="absolute top-[31.76px] left-[178.5px] w-[339px] h-[37px]">
            <div className="absolute top-[0px] left-[0px] w-[339px] h-[37px]">
              <div className="absolute top-[0px] left-[53px] rounded-22xl bg-mistyrose-100 h-[37px] overflow-hidden flex flex-row py-[7px] px-[15px] box-border items-center justify-center">
                <div className="relative leading-[20px] font-medium">
                  Preview with data from row 1
                </div>
              </div>
              <div className="absolute top-[0px] left-[302px] rounded-22xl bg-lightpink w-[37px] h-[37px] overflow-hidden flex flex-row py-[7px] pr-[17px] pl-5 box-border items-center justify-center">
                <img
                  className="relative w-[11px] h-[18px]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="absolute top-[0px] left-[37px] rounded-22xl bg-lightpink w-[37px] h-[37px] overflow-hidden flex flex-row py-[7px] pr-[17px] pl-5 box-border items-center justify-center [transform:_rotate(180deg)] [transform-origin:0_0]">
                <img
                  className="relative w-[11px] h-[18px]"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-[27px] text-sm">
          <div className="flex flex-row items-center justify-center gap-[24px]">
            <div className="rounded-[10px] bg-maroon-200 overflow-hidden flex flex-row py-[17px] px-[41px] items-center justify-center gap-[10px] border-[1px] border-solid border-maroon-100">
              <img
                className="relative w-[21.89px] h-[21.87px]"
                alt=""
                src={Group6}
              />
              <div className="relative font-medium">Untitled.CSV</div>
            </div>
            <div className="rounded-[10px] bg-maroon-200 overflow-hidden flex flex-row py-[17px] px-[41px] items-center justify-center border-[1px] border-solid border-maroon-100">
              <img
                className="relative w-[23.58px] h-[23.58px]"
                alt=""
                src={Trash}
              />
            </div>
          </div>
          <img
            className="relative w-[343.63px] h-px"
            alt=""
            src="/vector-8.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[21px]">
            <div className="relative font-medium opacity-[0.4]">
              Columns from uploaded CSV
            </div>

            <div className="flex flex-col items-start justify-center gap-[18px] ">
              {columns}
            </div>

            <div>
              <button className="cursor-pointer">
                <div className="rounded-[10px] bg-maroon overflow-hidden flex flex-row py-[17px] px-[70px] items-center justify-center text-white">
                  <div className="relative font-medium font-rubik">
                    Generate PDF for 21 entries
                  </div>
                </div>
              </button>
            </div>
          </div>
          <img
            className="relative w-[343.63px] h-px"
            alt=""
            src="/vector-8.svg"
          />
          <div className="flex flex-col items-center justify-center gap-[17px] text-white">
            <div className="rounded-4xs bg-maroon-100 w-[304px] overflow-hidden flex flex-row py-[17px] px-[41px] box-border items-center justify-center">
              <div className="relative font-medium">
                Generate PDF for 21 entries
              </div>
            </div>
            <div className="relative font-medium text-maroon-100">
              choose custom range
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookAir9;
