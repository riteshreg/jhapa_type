import { paragraph } from "@/data/paragraph";
import useAppHook from "@/hooks/apphook";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import Keyboard from "./Keyboard";

type Props = {};

export default function TypingArea({ }: Props) {
  const { words, setRawEnglish, letterPosition } = useAppHook();
  // const { width } = useScreenWidth();

  useEffect(() => {
    setRawEnglish(paragraph);

    return () => {
      setRawEnglish(null);
    };
  }, [setRawEnglish]);

  const currentWord = words
    .map((word) => ({
      ...word,
      chars: word.chars.filter((char) => char.inViewPort),
    }))
    .filter((word) => word.chars.length);

  console.log("current", currentWord);

  return (
    <div className="pt-14">
      <div
        className={cn(
          "text-nowrap  justify-center items-center text-center flex",
          { "flex flex-col": false }
        )}
      >
        {currentWord.map(({ chars }, index) => {
          return (
            <div key={index} className="pr-[4px]">
              {chars.map(({ nepali, type, position }, index) => (
                <span
                  key={index}
                  className={cn(
                    "font-semibold text-4xl text-gray-800  relative h-20 ",
                    {
                      "text-extraLetterColor bg-extraLetterBackgroundColor":
                        type === "incorrect",
                    },
                    { "text-correctWordColor": type === "correct" },
                    {
                      "bg-green-300 text-blue-800":
                        position === letterPosition,
                    }
                  )}
                >
                  {nepali}
                </span>
              ))}
            </div>
          );
        })}
      </div>
      <Keyboard />
    </div>
  );
}

