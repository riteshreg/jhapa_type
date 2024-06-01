import { HTMLProps } from "react";

type keyword = {
    nepali?: string;
    english: string;
};

export type Row = {
    default: keyword;
    shifted: keyword;
    className?:HTMLProps<HTMLElement>['className']
};

const numberRow: Row[] = [
    {
        default: { english: "1", nepali: "१" },
        shifted: { english: "!", nepali: "ज्ञ" }
    },
    {
        default: { english: "2", nepali: "२" },
        shifted: { english: "@", nepali: "ई" }
    },
    {
        default: { english: "3", nepali: "३" },
        shifted: { english: "#", nepali: "घ" }
    },
    {
        default: { english: "4", nepali: "४" },
        shifted: { english: "$", nepali: "द्ध" }
    },
    {
        default: { english: "5", nepali: "५" },
        shifted: { english: "%", nepali: "छ" }
    },
    {
        default: { english: "6", nepali: "६" },
        shifted: { english: "^", nepali: "ट" }
    },
    {
        default: { english: "7", nepali: "७" },
        shifted: { english: "&", nepali: "ठ" }
    },
    {
        default: { english: "8", nepali: "८" },
        shifted: { english: "*", nepali: "ड" }
    },
    {
        default: { english: "9", nepali: "९" },
        shifted: { english: "(", nepali: "ढ" }
    },
    {
        default: { english: "0", nepali: "०" },
        shifted: { english: ")", nepali: "ण" }
    }
];

const topRow: Row[] = [
    {
        default: { english: "q", nepali: "त्र" },
        shifted: { english: "Q", nepali: "त्त" }
    },
    {
        default: { english: "w", nepali: "ध" },
        shifted: { english: "W", nepali: "ड्ढ" }
    },
    {
        default: { english: "e", nepali: "भ" },
        shifted: { english: "E", nepali: "ऐ" }
    },
    {
        default: { english: "r", nepali: "च" },
        shifted: { english: "R", nepali: "द्व" }
    },
    {
        default: { english: "t", nepali: "त" },
        shifted: { english: "T", nepali: "टृ" }
    },
    {
        default: { english: "y", nepali: "थ" },
        shifted: { english: "Y", nepali: "ठ्ठ" }
    },
    {
        default: { english: "u", nepali: "ग" },
        shifted: { english: "U", nepali: "ऊ" }
    },
    {
        default: { english: "i", nepali: "ष" },
        shifted: { english: "I", nepali: "क्ष" }
    },
    {
        default: { english: "o", nepali: "य" },
        shifted: { english: "O", nepali: "इ" }
    },
    {
        default: { english: "p", nepali: "उ" },
        shifted: { english: "P", nepali: "ए" }
    },
    {
        default: { english: "[", nepali: "र्" },
        shifted: { english: "{", nepali: "ृ" }
    },
    {
        default: { english: "]", nepali: "े" },
        shifted: { english: "}", nepali: "ै" }
    }
];

const homeRow: Row[] = [
    {
        default: { english: "Caps", },
        shifted: { english: "Caps", }
    },
    {
        default: { english: "a", nepali: "ब" },
        shifted: { english: "A", nepali: "आ" }
    },
    {
        default: { english: "s", nepali: "क" },
        shifted: { english: "S", nepali: "ङ्क" }
    },
    {
        default: { english: "d", nepali: "म" },
        shifted: { english: "D", nepali: "ङ्ग" }
    },
    {
        default: { english: "f", nepali: "ा" },
        shifted: { english: "F", nepali: "ँ" }
    },
    {
        default: { english: "g", nepali: "न" },
        shifted: { english: "G", nepali: "द्द" }
    },
    {
        default: { english: "h", nepali: "ज" },
        shifted: { english: "H", nepali: "झ" }
    },
    {
        default: { english: "j", nepali: "व" },
        shifted: { english: "J", nepali: "ाे" }
    },
    {
        default: { english: "k", nepali: "प" },
        shifted: { english: "K", nepali: "फ" }
    },
    {
        default: { english: "l", nepali: "ि" },
        shifted: { english: "L", nepali: "ी" }
    },
    {
        default: { english: ";", nepali: "स" },
        shifted: { english: ":", nepali: "ट्ठ" }
    },
    {
        default: { english: "'", nepali: "ु" },
        shifted: { english: '"', nepali: "ू" }
    }
];

const bottomRow: Row[] = [
    {
        default: { english: "Shift", },
        shifted: { english: "Shift", }
    },
    {
        default: { english: "z", nepali: "श" },
        shifted: { english: "Z", nepali: "क्क" }
    },
    {
        default: { english: "x", nepali: "ह" },
        shifted: { english: "X", nepali: "ह्म" }
    },
    {
        default: { english: "c", nepali: "अ" },
        shifted: { english: "C", nepali: "ऋ" }
    },
    {
        default: { english: "v", nepali: "ख" },
        shifted: { english: "V", nepali: "ॐ" }
    },
    {
        default: { english: "b", nepali: "द" },
        shifted: { english: "B", nepali: "ौ" }
    },
    {
        default: { english: "n", nepali: "ल" },
        shifted: { english: "N", nepali: "ध" }
    },
    {
        default: { english: "m", nepali: "ः" },
        shifted: { english: "M", nepali: "ड्ड" }
    },
    {
        default: { english: ",", nepali: "ङ" },
        shifted: { english: "<", nepali: "S" }
    },
    {
        default: { english: ".", nepali: "|" },
        shifted: { english: ">", nepali: "श्र" }
    },
    {
        default: { english: "/", nepali: "र" },
        shifted: { english: "?", nepali: "रु" }
    }
];

const spaceRow: Row[] = [
    {
        className:"min-w-80",
        default: {
            english: "Space",
        },
        shifted: {
            english: "Space"
        }
    }
]

export const keywords: Array<Row[]> = [
    numberRow,
    topRow,
    homeRow,
    bottomRow,
    spaceRow
];
