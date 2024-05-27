import { lettersMapping } from "../data/mapping";

export function convertEnglishToNepali(
  englishText: string,
  nepaliText: string,
) {
  // splitting englishText into a array of string;
  const EnglishWordArray = englishText.split(" ");

  // splitting all the nepaliText
  const NepaliWordArray = nepaliText.split(" ");

  const currentWord = EnglishWordArray[EnglishWordArray.length - 1];

  // this is the last english word which we have to convert to nepali;
  const nepaliword = currentWord
    .split("")
    .map((letter) => {
      return lettersMapping[letter];
    })
    .join("");

  if (EnglishWordArray.length === NepaliWordArray.length) {
    /*
        if the length of englishWordArray and NepaliWordArray matches that's mean we are writing in
        same word so as we only converting the last english to to nepali so 
        We have to remove the last element of NepaliWordArray and Append a latest converted 
        Nepali One
        */
    NepaliWordArray.splice(-1);
    NepaliWordArray.push(nepaliword);
  } else if (EnglishWordArray.length > NepaliWordArray.length) {
    /*
  if length englishWordArray is geater then lenght of nepaliWordArray then 
   we have a new word so appending the new item to NepaliWord Array
*/
    NepaliWordArray.push(nepaliword);
  } else if (EnglishWordArray.length < NepaliWordArray.length) {
    /**
     * if length of EnglishWordArray is smaller than Lenght of NepaliWordArray that's
     * mean we are clicking the backspace but this condition will not meet for first
     * backspace click as both lenght will be same. this condition is required because,
     * there will be last empty string  in NepaliWordArray after removing all the letter
     *  so we are just removing the last empty string of NepaliWordArray.
     */
    NepaliWordArray.splice(-1);
  }

  return NepaliWordArray.join(" ");
}
