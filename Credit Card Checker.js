const tools = {
  reverse (word) {
    let new_word = "";
    for (let index = word.length - 1; index >= 0; index--) {
      new_word += word[index];
    }
    return new_word;
  },

  countWordsInASentence(sentence) {
    let wordsCount = 0
    for (let count = sentence.length-1; count >= 0; count--) {
      if (sentence[count] === " ") {
        wordsCount += 1;
      }
    }
    return wordsCount + 1;
  },

  countSentencesInAParagraph(paragraph) {
    let sentenceCount = 0;
    for (let index = paragraph.length - 1; index >= 0; index --) {
      if (paragraph[index] === "!" || paragraph[index] === ".") {
        sentenceCount += 1;
      }
    }
    return sentenceCount;
  },

  findAndReplace(paragraph,find,replace) {
    let replacedParagraph = "";
    let paragraphWords = paragraph.split(" ");
    for (let index = 0; index < paragraphWords.length; index++) {
      if (paragraphWords[index] === find) {
        paragraphWords[index] = replace;
      }
    }
    replacedParagraph = paragraphWords.join(" ");
    return replacedParagraph;
  }
}
