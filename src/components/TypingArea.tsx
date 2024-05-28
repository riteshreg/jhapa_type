import { paragraph } from "@/data/paragraph";
import useAppHook from "@/hooks/apphook";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import Keyboard from "./Keyboard";

type Props = {};

export default function TypingArea({}: Props) {
  const { words, setRawEnglish, canvasTextVal } = useAppHook();
  const { widht } = useScreenWidth();

  useEffect(() => {
    setRawEnglish(paragraph);

    return () => {
      setRawEnglish(null);
    };
  }, [setRawEnglish]);
  

  const currentWord = words.map((word) => ({
    ...word,
    chars: word.chars.filter((char) => char.inViewPort),
  }));

  return (
    <div className="pt-14 ">
      <div className={cn(" text-nowrap flex justify-end")}>
        {currentWord.map((word, index) => {
          return (
            <div key={index} className="pr-1">
              {word.chars.map(({ nepali, type }, index) => (
                <span
                  key={index}
                  className={cn(
                    "font-semibold text-4xl text-gray-800",
                    {
                      "text-extraLetterColor bg-extraLetterBackgroundColor":
                        type === "incorrect",
                    },
                    { "text-correctWordColor": type === "correct" },
                  )}
                >
                  {nepali}
                </span>
              ))}
            </div>
          );
        })}
      </div>

    
      <Keyboard/>
    </div>
  );
}
