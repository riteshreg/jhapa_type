import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { setTypingLetter } from "./actions/setTypingLetter";
import { setUser } from "./actions/SetUser";
import { logout } from "../lib/logout";
import { setRawEnglish } from "./actions/setRawEnglish";

export type State = {
  user: User | null;

  rawEnglish: string | null;

  words: Word[];

  mistypeLetter: string[];

  wordIndex: number;

  charIndex: number;

  canvasTextVal: CanvasTextVal;

  letterPosition:number;
};

export type Actions = {
  setUser: (user: User) => void;

  setRawEnglish: (param: State["rawEnglish"]) => void;

  setTypingLetter: (letter: Letter) => void;

  logout: () => void;
};

const initialState: State = {
  user: null,

  rawEnglish: null,

  words: [],

  mistypeLetter: [],

  wordIndex: 0,

  charIndex: 0,

  letterPosition: 0,

  canvasTextVal: {
    x: 0,
    y: 20,
  },
};

export const useStateStore = create<State & Actions>()(
  immer((set) => ({
    ...initialState,
    setTypingLetter: (typedLetter) => setTypingLetter({ set, typedLetter }),
    setUser: (user: User) => setUser({ set, user }),
    setRawEnglish: (rawEnglish: State["rawEnglish"]) =>
      setRawEnglish({ set, rawEnglish }),
    logout: () => logout({ set }),
  })),
);
