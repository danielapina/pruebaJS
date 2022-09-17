const blackjack = (array) => {

    // created a object with the given values
  const values = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    J: 10,
    Q: 10,
    K: 10,
    A: 1,
  };
  // if array is empty return 0
  if (array.length === 0) return 0;
  //reduce the hand to its value
  const total = array.reduce((acc, card) => acc + values[card], 0);
  //if the value is less than 12 and it includes an A turn it to 11
  // if not return total
  return total < 12 && array.includes("A") ? total + 10 : total;

};