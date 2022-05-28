exports.charCount = function (yourString) {
  //initialize your variables
  let myString = yourString.replace(/\W/g, "").split("");
  let myObj = {};
  let myArr = [];
  //find the count of each unique letter in the string
  for (let item of myString) {
    myObj[item] ? (myObj[item] += 1) : (myObj[item] = 1);
  }
  //add each unique letter and it's count as an array to myArr
  for (let key in myObj) {
    myArr.push([key, myObj[key]]);
  }
  //sort myArr alphabetically
  myArr.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    if (a[0] == b[0]) return 0;
  });
  //return myArr sorted by the number of occurances (descending)
  return myArr.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    if (a[1] == b[1]) return 0;
  });
};
