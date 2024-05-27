type SetEnglishWordsParams =
  | {
    type: "typing";
    letter: string;
  }
  | {
    type: "backspace";
  };

type User = {
  email: string;
  username: string;
};

type CharType = "correct" | "incorrect" | "extra"  | "none" | "space"

type Char = {
  english:string
  nepali:string;
  numberOfKeyStroke:number;
  type: CharType;
  typedKeywords:string[]
}


type Word = {
  isIncorrect:boolean;
  chars:Array<Char>
}


type Letter = {
  letter:string,
  type:"normal" | "space"
}
