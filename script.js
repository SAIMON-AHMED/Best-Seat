// Time -> O(n) | Space -> O(1)
function bestSeat(seats) {
  let count = 0;
  let desiredSeat = -1;
  let previousLongest = 0;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 0) {
      count++;
    } else {
        if (count > previousLongest) {
          desiredSeat = i - 1 - Math.floor(count / 2);
          previousLongest = count;
        }
        count = 0;
      }
  }

  return desiredSeat;
}

