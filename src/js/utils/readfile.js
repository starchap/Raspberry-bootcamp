export const readFile = async (filePath) => {
    return await electron.filesApi.readFile(filePath);
  }