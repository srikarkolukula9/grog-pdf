import { FunctionComponent, useEffect, useState } from "react";
import pdfViewer from "./pdfViewer";
import { Modal } from "@restart/ui";
import { FileUploader } from "react-drag-drop-files";
import LogoSvg from "../../src/images/logo-svg.svg";
import Group6 from "../../src//images/group-6.svg";
import { useNavigate } from "react-router-dom";
import MacBookAir9 from "./MacBookAir9";

const PreviewPage: FunctionComponent = () => {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState<any>(null);

  const navigate = useNavigate();

  // const navigateToPreview = () => {
  //   // 👇️ navigate to /CSV
  //   navigate("/CSV");
  // };

  const handleClick = () => {
    // if (file) {
    //   navigate("/CSV");
    // }
    setShow(true);
  };

  const fileType = ["CSV"];

  const handleChange = (file: any) => {
    setShow(false);
    setFile(file);
    navigate("/CSV");
  };

  return (
    <div className="relative bg-snow w-full h-[1200px] overflow-hidden flex flex-col py-3 px-[138px] box-border items-center justify-center text-center text-[14.25px] text-maroon font-rubik">
      <div className="w-[978px] h-[1150px] overflow-hidden shrink-0 flex flex-row flex-wrap py-0 px-[60px] box-border items-center justify-center gap-[16px]">
        <div className="overflow-hidden flex flex-col py-0 px-[0.5648102164268494px] items-center justify-center">
          <img
            className="relative w-[172.27px] h-[68.91px] overflow-hidden shrink-0"
            alt=""
            src={LogoSvg}
          />
        </div>
        <div className="rounded-[25px] bg-lavenderblush box-border h-[900px] overflow-hidden flex flex-col py-7 px-[343px] items-center justify-start border-[1px] border-solid border-mistyrose-200">
          <div className="rounded-[41px] bg-lightpink overflow-hidden flex flex-col py-[7px] px-[15px] items-center justify-center">
            <div className="relative leading-[20px] font-medium">{`HTML & CSS Preview`}</div>
            {/* <div className="overflow-hidden flex">{pdfViewer()}</div> */}
            <iframe
              src="http://127.0.0.1:8000/api/preview/index.html/"
              width={"800px"}
              height={"1400px"}
            ></iframe>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-center justify-center gap-[16px] text-sm ">
          <div className="relative w-[498px] h-[70px] overflow-hidden shrink-0">
            <div className=" overflow-hidden flex flex-row items-center justify-center">
              <button className="cursor-pointer">
                <div className="rounded-[10px] bg-maroon overflow-hidden flex flex-row py-[17px] px-[20px] items-center justify-center text-white">
                  <div className="relative font-medium font-rubik">
                    Download as PDF
                  </div>
                </div>
              </button>
              <button className="cursor-pointer" onClick={handleClick}>
                <div className="rounded-[10px] bg-lavenderblush overflow-hidden flex flex-row py-[10px] px-[20px] font-rubik items-center justify-center  border-[1px] border-solid border-maroon-100">
                  {file ? (
                    <div className="relative font-medium">
                      Proceed to Next Page
                    </div>
                  ) : (
                    <>
                      <img
                        className="relative w-[20px] h-[20px]"
                        alt=""
                        src={Group6}
                      />
                      <div className="relative font-medium">
                        Connect HTML with CSV data
                      </div>
                    </>
                  )}
                </div>
              </button>
              <Modal
                show={show}
                aria-labelledby="modal-1-label"
                onHide={() => setShow(false)}
                renderBackdrop={(props) => (
                  <div
                    {...props}
                    className="fixed inset-0 bg-black/50 z-[300]"
                  />
                )}
                className="fixed rounded-[37px] z-[301] top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white shadow-lg p-5"
              >
                <>
                  <div className="relative rounded-[37px] bg-white w-[657.25px] h-[423.27px] z-[0]">
                    <FileUploader
                      multiple={false}
                      handleChange={handleChange}
                      name="file"
                      types={fileType}
                      hoverTitle="Drop Here"
                      children={
                        <button className="cursor-pointer [border:none] py-[17px] px-[41px] bg-maroon my-0 mx-[!important] absolute top-[336.43px] left-[239.13px] rounded-[9px] overflow-hidden flex flex-row items-center justify-center z-[1]">
                          <div className="relative font-medium font-rubik text-white text-center w-[100px]">{`Upload CSV file `}</div>
                        </button>
                      }
                    />

                    <div className="my-0 mx-[!important] absolute top-[126.52px] left-[61.48px] flex flex-row items-center justify-center gap-[31px] z-[2]">
                      <div className="overflow-hidden flex flex-col items-center justify-center gap-[14px]">
                        <div className="relative rounded-[24.83px] bg-gainsboro w-[157.43px] h-[132.91px] opacity-[0.2]" />
                        <div className="relative font-medium text-smi-8 text-center font-rubik opacity-[0.6] inline-block w-[110px]">{`Upload a CSV File `}</div>
                      </div>
                      <div className="overflow-hidden flex flex-col items-center justify-center gap-[14px]">
                        <div className="relative rounded-[24.83px] bg-gainsboro w-[157.43px] h-[132.91px] opacity-[0.2]" />
                        <div className="relative font-medium text-smi-8 text-center font-rubik opacity-[0.6] inline-block w-[110px]">{`Connect html text to your csv `}</div>
                      </div>
                      <div className="overflow-hidden flex flex-col items-center justify-center gap-[14px]">
                        <div className="relative rounded-[24.83px] bg-gainsboro w-[157.43px] h-[132.91px] opacity-[0.2]" />
                        <div className="relative text-smi-8 text-center font-medium opacity-[0.6] font-rubik inline-block w-[110px]">
                          Batch generate pdfs for each row
                        </div>
                      </div>
                    </div>
                    <div className="my-0 mx-[!important] absolute top-[37.52px] left-[218.13px] flex flex-col items-center justify-center gap-[1px] z-[3] text-sm text-gray">
                      <div className="relative font-medium font-rubik opacity-[0.4]">
                        Connect your csv
                      </div>
                      <div className="relative text-[36px] font-rubik font-medium">
                        How it works
                      </div>
                    </div>
                  </div>
                </>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
