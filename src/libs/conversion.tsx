import { lettersMapping } from "../data/mapping";

export function convertEnglishToNepali(englishText:string) {
    const wordArray = englishText.split(" ");

    const finalNepaliWord = wordArray.map((word: string) => {
        const splittedLetter: string[] = word.split("");
        const x: string[] = splittedLetter.map((letter) => lettersMapping[letter]);
        return x.join("");
    });

    return (finalNepaliWord.join(" "));
}