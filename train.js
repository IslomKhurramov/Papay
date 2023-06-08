//  F-Task: Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi faqat digitlarni yangi stringda return qilsin!

function findDigits(a) {
  let digits = "";
  for (let i = 0; i < a.length; i++) {
    const char = a.charAt(i);
    if (!isNaN(char)) {
      console.log(char);
      digits += char;
    }
  }
  return digits;
}

console.log(findDigits("audh25kuh5436uh345"));

// const detail_list = [12, 23, null, 32, null, 34, null, 45, null];

// detail_list.sort(function (x, y) {
//   if (x === null) return 1;
//   if (y === null) return -1;
//   if (x === y) return 0;
//   else return x < y ? -1 : 1;
// });
// console.log(detail_list);
