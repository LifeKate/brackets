module.exports = function check(str, bracketsConfig) {
  var result = false;

  str = str.split("");

  var m = 1;

  outer: while (m < 100) {
    for (var j = 0; j < bracketsConfig.length; j++)
      for (var i = 0; i < str.length; i++) {
        if (
          str[i] == bracketsConfig[j][1] &&
          str[i - 1] == bracketsConfig[j][0]
        ) {
          str.splice(i - 1, 2);
        }
      }
    if (str.length == 0) {
      result = true;
      break outer;
    }
    m++;
  }

  return result;
};
