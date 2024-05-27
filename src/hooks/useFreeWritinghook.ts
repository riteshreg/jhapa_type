import { lettersMapping, specialLetterKeyword } from "@/data/mapping";
import { convertEnglishToNepali } from "@/lib/conversion";
import { useCallback, useEffect, useState } from "react";

type ReturnType = {
    englishWords: string;
    nepaliWords: string;
};

export default function useFreeWritingHook(): ReturnType {
    const [englishWords, setEnglishWords] = useState<string>("");
    const [nepaliWords, setNepaliWords] = useState<string>("");

    // useCallback to memoize the event handler
    const typeHandler = useCallback((event: KeyboardEvent) => {
        let { key } = event;

        // clicking the backspace should remove the text;
        if (key === "Backspace") {
            setEnglishWords((prevState) => prevState.slice(0, -1));
            return;
        }
        // if there is whitespace we don't have check all the condition
        else if (/\s+/g.exec(key)) {
            setEnglishWords((prevState) => prevState + key);
            return;
        }

        // when some special character is clicked it open some brower features to remove it we are making the event to default
        if (key === "/" || key === "'") {
            event.preventDefault();
        }


        // we have to this replace the \ to any unique symbol using \ we can't do complex operation it not even work in a loop 
        // but we can matched \ with double \\
        if(key === '\\'){
            key = '☮'
        }

        // return if  non - printable characters is press;
        if (key.length !== 1) return;

        //if key is not available in letter mapping then returingin
        if (!lettersMapping[key]) return;

        setEnglishWords((prevState) => prevState + key);
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", typeHandler);
        return () => document.removeEventListener("keydown", typeHandler);
    }, [typeHandler]);

    useEffect(() => {
        // getting the last word of englishWord;
        const currentWord = englishWords.split(" ").slice(-1)[0];

        // getting secondLast and lastLetter from the englishWords
        const [secondLastLetter, lastLetter] = englishWords.slice(-2).split("");

        if (
            specialLetterKeyword.some((spc_char) => currentWord.startsWith(spc_char))
        ) {
            setEnglishWords(englishWords.slice(0, -1));
            // Even if a special character is found, we should continue updating the state
            // if that's intended for consistency
            setNepaliWords(nepaliWords);
        } else if (secondLastLetter === lastLetter && /^\s*$/.test(lastLetter)) {
            // we don't allow two space that's why checking if secondLastLetter and lastLetter are empty space or not
            setEnglishWords(englishWords.slice(0, -1));
            setNepaliWords(nepaliWords);
        } else {

            // now converting englishWords to nepaliWords
            const nepaliWord = convertEnglishToNepali(englishWords, nepaliWords);

            setNepaliWords(nepaliWord);
        }
    }, [englishWords]);

    return {
        englishWords,
        nepaliWords,
    };
}
