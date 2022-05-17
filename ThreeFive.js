for (let i = 1; i <= 100; i++) {
  let str = "";

  if (i % 3 === 0) {
    str += "Three";
  }

  if (i % 5 === 0) {
    str += "Five";
  }

  console.log(str ? str : i);
}
