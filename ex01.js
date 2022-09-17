const printcombinations = (digits) => {

    let perms = [];

    for (let i = 0; i < digits.length; i++) {
      let digit = digits[i];
      perms.push(digit);

      //using recursivity 
      for (let p of printcombinations(digits.slice(0, i).concat(digits.slice(i + 1)))) {
        perms.push(digit + p);
      }
    }
    return perms;
};
