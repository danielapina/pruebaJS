const shiftCipher = (string, n) => {

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  //shifting the alphabet by slicing in n and merging
  let newalpha = alphabet.slice(n);
  newalpha += alphabet.slice(0, n);


  //take each letter and find its replacement char
  // in the new alphabet
  let message = string.toLowerCase();
  for (let i = 0; i < message.length; i++) {
    let index = alphabet.indexOf(message[i]);
    result += newalpha[index];
  }
  return result;
};

console.log(shiftCipher("hola", 5));
