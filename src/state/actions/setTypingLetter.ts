import { lettersMapping } from "@/data/mapping";
import { State } from "../state";


type Params = {
  set: (nextStarterUpdate: (state: State) => void) => void;
  typedLetter: Letter;
};

export function setTypingLetter({ set, typedLetter }: Params) {
  set((state) => {

    const { letter, type} = typedLetter

    // getting the required varialble from state
    let { wordIndex, charIndex, words } = state;

    let currentWord = words[wordIndex];
    let currentLetter = currentWord.chars[charIndex];

    // adding typed letter in to the typedKeywords array
    currentLetter.typedKeywords.push(letter);

    // we are gonna check if the currentLetter is equal to letter or not
    // as we know there can be multiple letter in currentLetter
    if (
      currentLetter.english.split("")[
      currentLetter.typedKeywords.length - 1
      ] !== letter
    ) {
      // we are removing last item of typeKeywords so that we can again 
      state.words[wordIndex].chars[charIndex].typedKeywords.pop()
      state.mistypeLetter.push(lettersMapping[letter]);

      // mis_type_letter is the english we inserted incase we get any mis_type letter;
      let mis_type_letter = letter;

      // in case of mis_type of space keyword we need to add _ 
      if(type === 'space'){
        mis_type_letter = "_"
      }

      currentWord.chars.splice(charIndex, 0, {
        english: mis_type_letter,
        nepali: mis_type_letter,
        numberOfKeyStroke: 1,
        type: "incorrect",
        typedKeywords: [letter]
      })

      state.charIndex += 1
      // returning in this case;
      return;
    }

    // from here the letter user enter will be correct   

    if (
      currentLetter.numberOfKeyStroke === currentLetter.typedKeywords.length
    ) {

      // now the we have entered the correct letter so checking its type to correct
      currentLetter.type = 'correct'
      state.charIndex += 1

      if (currentWord.chars.length === state.charIndex) {
        state.wordIndex += 1
        state.charIndex = 0;
      }

    }
  });
}
