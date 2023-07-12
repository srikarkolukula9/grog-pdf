import { FunctionComponent, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useNavigate } from "react-router-dom";
import PreviewPage from "./PreviewPage";
import LogoSvg from "../../src/images/logo-svg.svg";
import UploadSymbol from "../../src/images/group-3.svg";
import UploadedCSS from "../../src/images/Frame 10css_uploaded.svg";
import UploadedHTML from "../../src/images/Frame 10.svg";

const fileTypeHtml = ["HTML"];
const fileTypeCss = ["CSS"];

const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();
  const navigateToPreview = () => {
    // 👇️ navigate to /Preview
    navigate("/Preview");
  };
  const [fileHTML, setFileHTML] = useState<any>(null);
  const [fileCSS, setFileCSS] = useState<any>(null);
  // let fileHtml = null;
  // let fileCss = null;
  // const [fileCss, setFileCss] = useState<any>(null);
  // const [extension, setExtension] = useState<string>(""); //added
  const [countHTML, setCountHTML] = useState<number>(0); //added
  const [countCSS, setCountCSS] = useState<number>(0);
  // const handleChange = (file: any) => {
  //   setFile(file);

  //   setCount(count + 1); //added
  // };
  const handleChangeHTML = (fileHTML: any) => {
    setFileHTML(fileHTML);

    setCountHTML(countHTML + 1); //added
  };
  const handleChangeCSS = (fileCSS: any) => {
    setFileCSS(fileCSS);

    setCountCSS(countCSS + 1); //added
  };

  // const clickNavigate = () => {
  //   return (
  //     <Routes>
  //       <Route path="/Preview" element={<PreviewPage />} />
  //     </Routes>
  //   );
  // };
  // function getFileExtension(fileName: any): import("react").ReactNode {
  //   if (fileName) {
  //     const extensionName = fileName.slice(fileName.indexOf(".") + 1);
  //     return extensionName;
  //   }
  //   return "";
  // }

  // const fileExtension = getFileExtension(file[count - 1].name);
  // return (
  //   <Routes>
  //     <Route path="/" element={<HomePage />} />
  //   </Routes>
  // );

  // if (fileHTML && fileCSS) {
  //   return (
  //     <Routes>
  //       <Route path="/" element={<PreviewPage />} />
  //     </Routes>
  //   );
  // }
  return (
    <div className="relative bg-snow w-full overflow-hidden flex flex-col py-[41px] px-[138px] box-border items-center justify-center text-center text-[12.84px] text-dimgray font-rubik">
      <div className="overflow-hidden flex flex-col items-center justify-center gap-[55px]">
        <div className="overflow-hidden flex flex-col py-0 px-px items-center justify-center">
          <img
            className="relative w-[305px] h-[122px] overflow-hidden shrink-0"
            alt=""
            src={LogoSvg}
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-[39px]">
          <div className="overflow-hidden flex flex-col items-center justify-center gap-[14px]">
            <div className="relative rounded-[24.83px] bg-gainsboro w-[157.43px] h-[132.91px] opacity-[0.2]" />
            <div className="relative font-semibold inline-block w-[100.04px]">
              Upload HTML AND CSS
            </div>
          </div>
          <div className="overflow-hidden flex flex-col items-center justify-center gap-[14px]">
            <div className="relative rounded-[24.83px] bg-gainsboro w-[157.43px] h-[132.91px] opacity-[0.2]" />
            <div className="relative font-semibold inline-block w-[100.04px]">
              <p className="m-0">Preview</p>
              <p className="m-0">PDF</p>
            </div>
          </div>
          <div className="overflow-hidden flex flex-col items-center justify-center gap-[14px]">
            <div className="relative rounded-[24.83px] bg-gainsboro w-[157.43px] h-[132.91px] opacity-[0.2]" />
            <div className="relative font-semibold inline-block w-[100.04px]">
              <p className="m-0">Connect</p>
              <p className="m-0">CSV</p>
            </div>
          </div>
          <div className="overflow-hidden flex flex-col items-center justify-center gap-[14px]">
            <div className="relative rounded-[24.83px] bg-gainsboro w-[157.43px] h-[132.91px] opacity-[0.2]" />
            <div className="relative font-semibold inline-block w-[100.04px]">
              <p className="m-0">{`Generate `}</p>
              <p className="m-0">PDFs</p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-center gap-[50px] ">
          <FileUploader
            multiple={false}
            handleChange={handleChangeHTML}
            name="fileHTML"
            types={fileTypeHtml}
            hoverTitle="Drop Here"
            children={
              <div className="rounded-[25px] bg-lavenderblush box-border h-[350px] w-[300px] overflow-hidden shrink-0 flex flex-col py-[25px] px-[250px] items-center justify-center gap-[10px] text-[14.25px] border-[1px] border-solid border-mistyrose">
                {/* changed py and reduced the padding to give more space for button below */}
                <div className="relative w-[199.8px] h-[131.7px]">
                  <div className="absolute top-[91.7px] left-[calc(50%_-_125px)] leading-[20px] font-medium inline-block w-[250px]">
                    Drag and drop only HTML File here
                  </div>
                  <img
                    className="absolute h-[58.37%] w-[38.48%] top-[-2.92%] right-[30.42%] bottom-[44.55%] left-[31.1%] max-w-full overflow-hidden max-h-full opacity-[0.6]"
                    alt=""
                    src={UploadSymbol}
                  />
                </div>
                <div className="rounded-[9px] bg-maroon overflow-hidden flex flex-row py-[10px] px-[10px] items-center justify-center text-sm text-white">
                  <div className="relative font-medium w-[200px]">{`Upload HTML file from computer`}</div>
                </div>

                <div className="relative font-medium text-maroon">
                  <div className="relative font-medium text-maroon overflow-hidden flex flex-col items-center justify-center w-[250px]">
                    {fileHTML
                      ? `File name: ${fileHTML.name}`
                      : "File not uploaded yet"}
                    {fileHTML ? <img src={UploadedHTML} /> : ""}
                  </div>
                </div>
              </div>
            }
          />
          <FileUploader
            multiple={false}
            handleChange={handleChangeCSS}
            name="fileCSS"
            types={fileTypeCss}
            hoverTitle="Drop Here"
            children={
              <div className="rounded-[25px] bg-lavenderblush box-border h-[350px] w-[300px] overflow-hidden shrink-0 flex flex-col py-[25px] px-[250px] items-center justify-center gap-[10px] text-[14.25px] border-[1px] border-solid border-mistyrose">
                {/* changed py and reduced the padding to give more space for button below */}
                <div className="relative w-[199.8px] h-[131.7px]">
                  <div className="absolute top-[91.7px] left-[calc(50%_-_125px)] leading-[20px] font-medium inline-block w-[250px]">
                    Drag and drop only CSS File here
                  </div>
                  <img
                    className="absolute h-[58.37%] w-[38.48%] top-[-2.92%] right-[30.42%] bottom-[44.55%] left-[31.1%] max-w-full overflow-hidden max-h-full opacity-[0.6]"
                    alt=""
                    src={UploadSymbol}
                  />
                </div>
                <div className="rounded-[9px] bg-maroon overflow-hidden flex flex-row py-[10px] px-[10px] items-center justify-center text-sm text-white">
                  <div className="relative font-medium w-[200px]">{`Upload CSS file from computer`}</div>
                </div>

                <div className="relative font-medium text-maroon">
                  <div className="relative font-medium text-maroon overflow-hidden flex flex-col items-center justify-center w-[250px]">
                    {fileCSS
                      ? `File name: ${fileCSS.name}`
                      : "File not uploaded yet"}
                    {fileCSS ? <img src={UploadedCSS} /> : ""}
                  </div>
                </div>
              </div>
            }
          />
        </div>
        {/* here */}
        <div>
          {fileHTML && fileCSS ? (
            <button className="cursor-pointer" onClick={navigateToPreview}>
              <div className="rounded-[10px] bg-maroon overflow-hidden flex flex-row py-[17px] px-[70px] items-center justify-center text-white">
                <div className="relative font-medium font-rubik">
                  Continue to Preview
                </div>
              </div>
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-center text-sm">
          <div className="relative font-medium opacity-[0.5]">
            No PDFs are being read or saved, all data is processed locally on
            device
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
