const sentence = 'Hello there, Declan Lyons...'


const printWord = (sentences, index) => {
  let timer = 0;
  for (let i = 0; i < sentences.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[index]);
      index++
    }, timer)
    timer += 50
  }

}
console.log(printWord(sentence, 0));
