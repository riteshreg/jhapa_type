// export function ChangeWordsViewPort(
//   words: Word[],
//   canvasTextVal?: CanvasTextVal
// ): Word[] {
//   // it not determine the word but letter;
//   const { x, y } = canvasTextVal || { x: 0, y: 35 };

//   let numberOfLetterIndex = 0;

//   const newWord = words.map((word) => {
//     return {
//       ...word,
//       chars: word.chars.map((char) => {
//         numberOfLetterIndex += 1;

//         if (numberOfLetterIndex >= x && numberOfLetterIndex <= y) {
//           return { ...char, inViewPort: true };
//         }

//         if (x > 20 && numberOfLetterIndex <= x - 20) {
//           return { ...char, inViewPort: false };
//         }

//         return char;
//       }),
//     };
//   });

//   return newWord;
// }

export function ChangeWordsViewPort(
  words: Word[],
  canvasTextVal?: CanvasTextVal,
): Word[] {
  const { x, y } = canvasTextVal || { x: 0, y: 26 };

  let numberOfLetterIndex = 0;
  const viewRangeStart = x;
  const viewRangeEnd = x + y; // Assuming y is the length of the viewport

  const newWord = words.map((word) => {
    return {
      ...word,
      chars: word.chars.map((char) => {
        numberOfLetterIndex += 1;

        const position = numberOfLetterIndex - 1

        if (
          numberOfLetterIndex >= viewRangeStart &&
          numberOfLetterIndex <= viewRangeEnd
        ) {
          return { ...char, inViewPort: true, position  };
        }

        if (x > 10 && numberOfLetterIndex <= x - 10) {
          return { ...char, inViewPort: false, position};
        }

        return {...char, position};
      }),
    };
  });

  return newWord;
}
