import { lettersMapping, specialLetterKeyword } from "@/data/mapping";
import { ChangeWordsViewPort } from "./ChangeWordsViewPort";

function z(paragraph: string): Word[] {
  const words = paragraph.split(/\s+/);
  const result: Word[] = [];

  for (let word of words) {
    const letterResult: Char[] = [];

    const letters = word.split("");
    let addingOtherKeyStroke = "";

    while (letters.length > 0) {
      const currentLetter = letters.shift();

      // returning if the currentLetter is not exist
      if (!currentLetter) return result;

      if (specialLetterKeyword.includes(currentLetter)) {
        // Start a sequence of special letters
        let sequence = {
          np:
            lettersMapping[addingOtherKeyStroke] +
            lettersMapping[currentLetter],
          en: addingOtherKeyStroke + currentLetter,
        };

        while (
          letters.length > 0 &&
          specialLetterKeyword.includes(letters[0])
        ) {
          const shifted_letter = letters.shift();
          if (!shifted_letter) return [];
          sequence.en += shifted_letter;
          sequence.np += lettersMapping[shifted_letter];
        }

        // Determine if the next letter after the sequence is special or not
        // const nextLetter = letters[0];
        const charResult: Char = {
          typedKeywords: [],
          english: sequence.en,
          nepali: sequence.np,
          numberOfKeyStroke: sequence.en.length,
          type: "none",
          inViewPort: false,
        };

        letterResult.push(charResult);
      } else {
        // Determine if the next letter is special or not
        const nextLetter = letters[0];
        if (nextLetter && specialLetterKeyword.includes(nextLetter)) {
          addingOtherKeyStroke = currentLetter;
        } else {
          const charResult: Char = {
            typedKeywords: [],
            english: currentLetter,
            nepali: lettersMapping[currentLetter],
            numberOfKeyStroke: 1,
            type: "none",
            inViewPort: false,
          };
          letterResult.push(charResult);
        }
      }
    }

    result.push({
      isIncorrect: false,
      chars: letterResult,
    });

    result.push({
      isIncorrect: false,
      chars: [
        {
          english: " ",
          nepali: " ",
          numberOfKeyStroke: 1,
          type: "space",
          inViewPort: false,
          typedKeywords: [],
        },
      ],
    });
  }

  return ChangeWordsViewPort(result);
}

export default z;
