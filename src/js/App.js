
import React, { useState } from 'react';


export default function App() {
  const [content, setContent] = useState();

  const readFile = async () => {
    const fileContent = await electron.filesApi.readFile('D://config.txt');
    setContent(fileContent)
  }

  const writeFile = async () => {
    const newContent = content + 'HELLO';
     await electron.filesApi.writeFile('D://config.txt', newContent);
     console.log('new content saved');
  }

  return (
    <>
      <h1>I am App Component!!!</h1>
      <button onClick={readFile}>Read</button>
      <button onClick={writeFile}>Write</button>
    </>
  )
}
