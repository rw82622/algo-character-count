exports.charCount = function (yourString) {
  myString = yourString.replace(/\W/g, "").split("");
  //   console.log(myString);
  let myObj = {};
  let myArr = [];
  for (let item of myString) {
    myObj[item] ? (myObj[item] += 1) : (myObj[item] = 1);
  }
  for (let key in myObj) {
    myArr.push([key, myObj[key]]);
  }
  let alphaSortedArray = myArr.slice().sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    if (a[0] == b[0]) return 0;
  });
  return alphaSortedArray.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    if (a[1] == b[1]) return 0;
  });
};
// console.log(charCount("an apple a day will keep the doctor away"));
