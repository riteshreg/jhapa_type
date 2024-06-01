import { keywords } from "@/data/keyword";
import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Keyboard = () => {
  const [rowState, setRowState] = useState<"default" | "shifted">("default");
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  // useCallback to memoize the event handler
  const typeHandler = useCallback((event: KeyboardEvent) => {
    let { key } = event;

    // clicking the backspace should remove the text;
    if (key === "Shift") {
      setRowState("shifted");
    }

    if (key === "CapsLock") {
      setIsCapsLockOn((prevState) => !prevState);
    }
  }, []);

  const keyUpHandler = useCallback((event: KeyboardEvent) => {
    const { key } = event;

    if (key === "Shift") {
      setRowState("default");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", typeHandler);
    document.addEventListener("keyup", keyUpHandler);
    return () => {
      document.removeEventListener("keydown", typeHandler);
      document.removeEventListener("keyup", keyUpHandler);
    };
  }, [typeHandler]);

  useEffect(() => {
    if (isCapsLockOn) {
      setRowState("shifted");
    } else {
      setRowState("default");
    }
  }, [isCapsLockOn]);

  return (
    <div className="flex mt-10 flex-col min-h-64 items-center space-y-3  py-10 bg-gray-400 rounded-lg shadow-lg max-w-5xl mx-auto">
      {keywords.map((row, rowIndex) => (
        <div key={rowIndex} className="flex space-x-1 md:space-x-2">
          {row.map((key) => (
            <Button
              key={key[rowState].english}
              className={cn(
                `bg-white hover:bg-blue-100 active:bg-blue-200 text-gray-800 font-semibold min-h-14 min-w-16  md:py-3 md:px-4 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75  ${key.className}`,
                { "bg-green-500": key[rowState].english === "d" },
                
              )}
            >

              {/* showing english if the nepali key is not available this can be usefull in shift and caps */}
              <span className="font-bold text-2xl">
                {key[rowState].nepali || key[rowState].english}
              </span>

              {/* showing the english key when there is nepali Char this can be usefull in shift and caps */}
              {key[rowState].nepali && (
                <span className="font-semibold text-base absolute bottom-0 right-1">
                  {key[rowState].english}
                </span>
              )}

            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
