const chessboard = [
  ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"], // row 0 (8th rank)
  ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
  ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"], // row 7 (1st rank)
];

const tableData = [
  ["ID", "Name", "Age", "Occupation"],
  [1, "Alice", 30, "Engineer"],
  [2, "Bob", 25, "Designer"],
  [3, "Carol", 28, "Teacher"],
];

let create = (rows, col, initialValue = 0) => {
  const arr = [];
  for (let i = 0; i < rows; i++) {
    arr[i] = new Array(col).fill(initialValue);
  }
  return arr;
};

console.log(create(5, 5, 3));
