import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Bubles from "./components/bubles";
import { readFile } from "./utils/readfile";

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledCmdBubles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

/*interface FileProp {
  lastModified: number
  lastModifiedDate: Date
  name: string
  path: string
  size: number
  type: string
  webkitRelativePath: string
}*/

export default function App() {
  const [files, setFiles] = useState(null);
  const [cmdFileList, setCmdFileList] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    // READ CMDLINE FILE
    if (files) {
      const readCmd = async () => {
        const fileProp = files.find((file) => file.name === "cmdline.txt");
        if (fileProp) {
          const cmdFileContent = await readFile(fileProp.path);
          setCmdFileList(cmdFileContent.split(" "));
        }
      };
      readCmd().catch(console.log);
    }
  }, [files]);

  const filesSelected = () => {
    const files = Array.from(inputRef?.current?.files);
    setFiles(files);
  };
  const printCmdFile = () => {
    console.log(cmdFileList);
  };

  return (
    <StyledRoot>
      <input
        ref={inputRef}
        onChange={filesSelected}
        type="file"
        webkitdirectory="true"
      />
      {files && (
        <div>
          <StyledCmdBubles>
            {cmdFileList.map((prop) => (
              <Bubles key={prop} removable>{prop}</Bubles>
            ))}
          </StyledCmdBubles>
          <div>
            <input type="checkbox" id="check1"/> cmdline kubernetes
            <label htmlFor="check1"><span className="fa fa-check"/></label> 
          </div>
          <div>
            <input type="checkbox" id="check2"/> cgroup_memory=1
            <label htmlFor="check2"><span className="fa fa-check"/></label> 
          </div>
          <div>
            <input type="checkbox" id="check3"/> cgroup_enable=memory
            <label htmlFor="check3"><span className="fa fa-check"/></label> 
          </div>
          <div>
            <input type="checkbox" id="check4"/> static ip
            <label htmlFor="check4"><span className="fa fa-check"/></label> 
          </div>
          <input placeholder="availabel ip adress" />
          <input placeholder="default gateway" />
          <input placeholder="subnet mask" />
          <input placeholder="hostname" />
          <input placeholder="interface" />

          <button onClick={printCmdFile}>Save</button>
        </div>
      )}
    </StyledRoot>
  );
}
