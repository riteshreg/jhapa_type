import z from "@/lib/getKeyStroke";
import { State } from "../state";

type Params = {
  set: (nextStarterUpdate: (state: State) => void) => void;
  rawEnglish: State["rawEnglish"];
};

export const setRawEnglish = ({ set, rawEnglish }: Params) => {
  set((state) => {
    //   we can even get null in rawEnglishParam we are not checking the condition here
    state.rawEnglish = rawEnglish;
    //   instead here
    if (!rawEnglish) return;
    state.words = z(rawEnglish);
  });
};
