import { lettersMapping } from "@/data/mapping";
import { useStateStore } from "@/libs/state";
import { useCallback, useEffect } from "react";

type ReturnType = {
    englishWords:string;
    nepaliWords:string
}

export default function useAppHook():ReturnType {

    const {
        setEnglishWords,
        englishWords,
        nepaliWords
    } = useStateStore((state)=>state)

    // useCallback to memoize the event handler
    const typeHandler = useCallback((event: KeyboardEvent) => {
        const { key } = event;

        // clicking the backspace should remove the text;
        if (key === "Backspace") {
            setEnglishWords({type:"backspace"});
            return;
        }
        // if there is whitespace we don't have check all the condition
        else if (/\s+/g.exec(key)) {
            setEnglishWords({type:"typing", letter:key});
            return;
        }

        // when some special character is clicked it open some brower features to remove it we are making the event to default
        if (key === "/" || key === "'") {
            event.preventDefault();
        }

        // return if  non - printable characters is press;
        if (key.length !== 1) return;

        //if key is not available in letter mapping then returingin
        if (!lettersMapping[key]) return;

        setEnglishWords({type:"typing", letter:key});
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", typeHandler);
        return () => document.removeEventListener("keydown", typeHandler);
    }, [typeHandler]);





    return {
        englishWords,
        nepaliWords,
    }


}