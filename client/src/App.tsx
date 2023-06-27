import { useState } from "react";
import "./App.css";
import decodeHuffmanCode from "./utils/decodeHuffmanCode";
import Comments from "./Comments";

function App() {
  const [comments, setComments] = useState([] as any);
  // const [huffmanTreeRoot, setHuffmanTreeRoot] = useState({} as any);
  const [isFetched, setIsFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (type: string) => {
    try {
      setIsLoading(true);

      const data = await fetch(`http://localhost:5000/fetch?type=${type}`).then(
        (response) => response.json()
      );
      if (type === "withEncode") {
        const decodedStr = decodeHuffmanCode(
          data.data.encodedData,
          data.data.huffmanTreeRoot
        );
        // console.log(JSON.parse(decodedStr));
        setComments(JSON.parse(decodedStr));
        // setHuffmanTreeRoot(data.data.huffmanTreeRoot);
        setIsFetched(true);
      } else {
        // ! With out encode to be implemented
        setComments(data.data.comments);
        setIsFetched(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Huffman Implementation</h1>
      <div className="buttons">
        <button onClick={() => fetchData("withEncode")}>
          Fetch with encode
        </button>

        <button onClick={() => fetchData("withoutEncode")}>
          Fetch without encode
        </button>
      </div>

      {isFetched && !isLoading && comments.length >= 1 && (
        <Comments comments={comments} />
      )}
    </>
  );
}

export default App;
