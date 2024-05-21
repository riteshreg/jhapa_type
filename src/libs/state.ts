import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { convertEnglishToNepali } from './conversion';
import { setEnglishWord } from './setEnglishWords';

export type State = {
    englishWords: string
    nepaliWords: string;
}


export type Actions = {
    setEnglishWords: (params: SetEnglishWordsParams) => void
}

const initialState: State = {
    englishWords: "",
    nepaliWords: "",
}

export const useStateStore = create<State & Actions>()(
    immer((set) => ({
        ...initialState,
        
        setEnglishWords: (params) => setEnglishWord({set, args:params})

    })),
)
