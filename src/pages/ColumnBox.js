import {useState} from 'react'
import LinkBlue from "../images/Group 6blue.svg";
import Trash from "../../src/images/Group 6_trash.svg";

export default function ColumnBox({name,link}) {

  if(link){
    return (
    <div className="w-96 overflow-hidden flex flex-row items-center justify-between">
      <div className="flex-1 rounded-xl bg-lavenderblush-200 box-border h-[57px] overflow-hidden flex flex-row py-0 px-[26px] items-center justify-between border-[1px] border-solid border-maroon-300">
        <div className="relative font-medium">{name}</div>
          <div className="flex flex-row items-start justify-start gap-[8px] opacity-[0.6] text-xs text-royalblue">
              <img
                className="relative w-[16.57px] h-[16.56px]"
                alt=""
                src={LinkBlue}
              />
              <div className="relative font-medium">Linked</div>
            </div>
        
      </div>
      <div className="w-[63px] overflow-hidden shrink-0 flex flex-row items-center justify-between opacity-[0.2]">
        <img
          className="relative w-[23.58px] h-[23.58px] overflow-hidden shrink-0"
          alt=""
          src={Trash}
        />
      </div>
    </div>
  );
  }
  return(
    <div className="w-96 overflow-hidden flex flex-row items-center justify-between">
                <div className="flex-1 rounded-xl bg-lavenderblush-200 box-border h-[57px] overflow-hidden flex flex-row py-0 px-[26px] items-center justify-between border-[1px] border-solid border-maroon-300">
                  <div className="relative font-medium">{name}</div>
                  <div className="flex flex-row items-start justify-start gap-[8px] text-xs text-royalblue">
                    <img
                      className="relative w-[16.57px] h-[16.56px]"
                      alt=""
                      src={LinkBlue}
                    />
                    <div className="relative font-medium">Link with text</div>
                  </div>
                </div>
                <div className="w-[63px] overflow-hidden shrink-0 flex flex-row items-center justify-between opacity-[0]">
                  <img
                    className="relative w-[23.58px] h-[23.58px] overflow-hidden shrink-0"
                    alt=""
                    src={Trash}
                  />
                </div>
              </div>
  )
  
}
{/* <div className="flex flex-row items-start justify-start gap-[8px] text-xs text-royalblue">
          <img
            className="relative w-[16.57px] h-[16.56px]"
            alt=""
            src={LinkBlue}
          />
          <div className="relative font-medium">Link with text</div>
        </div> */}