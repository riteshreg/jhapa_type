import { paragraph } from "@/data/paragraph";
import useAppHook from "@/hooks/apphook";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

type Props = {};

export default function TypingArea({ }: Props) {

  const { words, setRawEnglish } = useAppHook();
  // const {widht} = useScreenWidth();

  useEffect(() => {
    setRawEnglish(paragraph);

    return () => {
      setRawEnglish(null);
    };
  }, [setRawEnglish]);


  return (
    <div className="pt-14 ">
      <div className={cn(" text-nowrap flex justify-end")}>
        {words.map((word, index) => {
          return (
            <div key={index} className="pr-1">
              {word.chars.map(({
                nepali,
                type
              }, index) => <span key={index} className={cn(
                "font-semibold text-4xl text-gray-800",
                { "text-extraLetterColor bg-extraLetterBackgroundColor": type === 'incorrect' },
                { "text-correctWordColor": type === 'correct' }
              )}>{nepali}</span>)}
            </div>
          )
        })}
      </div>

      <div className="font-medium text-3xl">
        {/* {mistypeLetter.slice()} */}
      </div>

      <div className="flex justify-center">
        
      </div>
    </div>
  );
}
