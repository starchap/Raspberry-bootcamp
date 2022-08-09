const writeFile = async (filePath, content) => {
     await electron.filesApi.writeFile(filePath, content);
     toast(`Written file successfully ${filePath}`);
  }