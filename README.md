# Best Seat Finder

## Description
This function, `bestSeat`, takes an array of seats where `0` represents an empty seat and `1` represents an occupied seat. The goal is to find the best seat to take, which is the empty seat in the middle of the longest consecutive sequence of empty seats.

---

## Function Signature
```javascript
function bestSeat(seats) {
  // Implementation
}
```

---

## Parameters
- `seats` (Array): An array of integers where:
  - `0` represents an empty seat.
  - `1` represents an occupied seat.

---

## Returns
- (Number): The index of the best seat to take. If no suitable seat is found, returns `-1`.

---

## Algorithm Explanation
1. Iterate through the `seats` array.
2. Count consecutive empty seats (`0`).
3. When encountering a filled seat (`1`), check if the current streak of empty seats is the longest seen so far.
4. If it is, calculate the index of the best seat by placing the person in the middle of that streak.
5. Continue until the entire array is processed.
6. Return the index of the best seat.

---

## Example
```javascript
const seats = [1, 0, 0, 0, 1, 0, 0];
console.log(bestSeat(seats));
```
### Output:
```
2
```
In this example, the longest streak of empty seats is between indices 1 and 3. The best seat is in the middle of this streak, at index `2`.

---

## Edge Cases
- All seats are occupied (`[1, 1, 1, 1]`) — Returns `-1`.
- All seats are empty (`[0, 0, 0, 0]`) — Returns the middle index.
- Only one empty seat (`[1, 1, 0, 1]`) — Returns the index of the empty seat.

---

## Time Complexity
- **O(n)**: The function iterates through the array once.

## Space Complexity
- **O(1)**: The function uses a constant amount of extra space.

---

## Usage
This function can be used in applications where seat allocation is critical, such as:
- Movie theaters
- Concerts
- Sports arenas

---

## License
This project is licensed under the MIT License.

---

## Contribution
Feel free to contribute to improve the function and README file by submitting a pull request!

