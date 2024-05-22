import { specialLetterKeyword } from "@/data/mapping";
import { convertEnglishToNepali } from "./conversion"
import { State } from "./state"

type Params = {
    set: (nextStarterUpdate: (state: State) => void) => void,
    args: SetEnglishWordsParams
}


export function setEnglishWord({ set, args }: Params) {
    set((state) => {

        if (args.type === 'backspace') {
            state.englishWords = state.englishWords.slice(0, -1);
        } else if (args.type === 'typing') {
            state.englishWords += args.letter;
        }

        // Check for special characters
        const { englishWords, nepaliWords } = state

        // getting the last word of englishWord;
        const currentWord = englishWords.split(" ").slice(-1)[0];

        // getting secondLast and lastLetter from the englishWords
        const [secondLastLetter, lastLetter] = englishWords.slice(-2).split("")

        if (specialLetterKeyword.some((spc_char) => currentWord.startsWith(spc_char))) {
            state.englishWords = englishWords.slice(0, -1);
            // Even if a special character is found, we should continue updating the state
            // if that's intended for consistency
            state.nepaliWords = nepaliWords;
        } else if (secondLastLetter === lastLetter && /^\s*$/.test(lastLetter)) {
            // we don't allow two space that's why checking if secondLastLetter and lastLetter are empty space or not
            state.englishWords = englishWords.slice(0, -1);
            state.nepaliWords = nepaliWords;
        } else {
            state.nepaliWords = convertEnglishToNepali(
                state.englishWords,
                state.nepaliWords,
            );
        }
    });
}
