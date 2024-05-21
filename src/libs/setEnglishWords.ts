import { convertEnglishToNepali } from "./conversion"
import { Actions, State } from "./state"

type Params = {
    set: (nextStarterUpdate: (state: State) => void) => void,
    args: SetEnglishWordsParams
}


export function setEnglishWord({
    set,
    args
}: Params) {
    set((state) => {

        if (args.type === 'backspace') {
            state.englishWords = state.englishWords.slice(0, -1)
        } else if (args.type === 'typing') {
            state.englishWords += args.letter
        }

        state.nepaliWords = convertEnglishToNepali(
            state.englishWords,
            state.nepaliWords
        )

    })
}