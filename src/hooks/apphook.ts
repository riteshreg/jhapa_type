import { lettersMapping } from "@/data/mapping";
import { useStateStore } from "@/state/state";
import { useCallback, useEffect } from "react";

type ReturnType = {
  words: Word[];
  setRawEnglish: (params: string | null) => void;
  mistypeLetter: string[];
  canvasTextVal: CanvasTextVal;
};

export default function useAppHook(): ReturnType {
  /*
   rawEnglish state is the paragraph user need to type when user initiate the typing 
  the first thing happen in the hook is we store string of required keystroke to form a
  nepali word. this usually look like  this 'd]/J gfd /lt]z v*sf xJ d g]kfn df a;%' . g]kfn d]/' 
  */
  const {
    words,
    setRawEnglish,
    setTypingLetter,
    mistypeLetter,
    canvasTextVal,
  } = useStateStore((state) => state);

  // useCallback to memoize the event handler
  const typeHandler = useCallback((event: KeyboardEvent) => {
    let { key } = event;

    // clicking the backspace should remove the text;
    if (key === "Backspace") {
      return;
    }

    // if there is whitespace we don't have check all the condition
    if (/\s+/g.exec(key)) {
      setTypingLetter({ letter: key, type: "space" });
      return;
    }

    // when some special character is clicked it open some brower features to remove it we are making the event to default
    if (key === "/" || key === "'") {
      event.preventDefault();
    }

    // we have to this replace the \ to any unique symbol using \ we can't do complex operation it not even work in a loop
    // but we can matched \ with double \\
    if (key === "\\") {
      key = "☮";
    }

    // return if  non - printable characters is press;
    if (key.length !== 1) return;

    //if key is not available in letter mapping then returingin
    if (!lettersMapping[key]) return;

    setTypingLetter({ letter: key, type: "normal" });
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", typeHandler);
    return () => document.removeEventListener("keydown", typeHandler);
  }, [typeHandler]);

  return {
    setRawEnglish,
    words,
    mistypeLetter,
    canvasTextVal,
  };
}
