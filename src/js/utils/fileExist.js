export const fileExist = async (filePath) => {
    return await electron.filesApi.fileExist(filePath);
  }