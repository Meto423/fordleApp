import wordBank from "./wordle-bank.txt";


export const boardDefault = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
];

export const generateWordSet = async () => {
    let wordSet;
    let todaysWord;
    await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {

        const words = result.split("\r\n");
        todaysWord = words[Math.floor(Math.random() * words.length)];
        wordSet = new Set(words);
    });

    return {wordSet,todaysWord};

    
}

