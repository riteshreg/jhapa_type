import { useCallback, useEffect, useState } from "react";
import { convertEnglishToNepali } from "./libs/conversion";
import { lettersMapping } from "./data/mapping";

function App() {
  const [text, setText] = useState<string>("");
  const [nepaliWord, setNepaliWord] = useState<string>("");



  // useCallback to memoize the event handler
  const typeHandler = useCallback((event: KeyboardEvent) => {
    const { key } = event;


    // clicking the backspace should remove the text; 
    if (key === "Backspace") {
      setText((prevState) => prevState.slice(0, -1));
      return;
    }
    // if there is whitespace we don't have check all the condition
    else if (/\s+/g.exec(key)) {
      setText((prevState) => prevState + key);
      return;
    }


    // when some special character is clicked it open some brower features to remove it we are making the event to default
    if (key === "/" || key === "'") {
      event.preventDefault()
    }


    // return if  non - printable characters is press;
    if (key.length !== 1) return;

    //if key is not available in letter mapping then returingin
    if (!lettersMapping[key]) return;


    setText((prevState) => prevState + key);

  }, []);

  useEffect(() => {
    document.addEventListener("keydown", typeHandler);
    return () => document.removeEventListener("keydown", typeHandler);
  }, [typeHandler]);

  useEffect(() => {

    setNepaliWord(
      convertEnglishToNepali(text)
    )
  }, [text]);



  return (
    <div className="bg-primaryColor min-h-full flex flex-col">
      <h1>Welcome to Jhapa Type</h1>
      {text}
      <div className="mx-10">in Np: {nepaliWord}</div>
    </div>
  );
}

export default App;
