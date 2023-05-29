const detail_list = [12, 23, null, 32, null, 34, null, 45, null];

detail_list.sort(function (x, y) {
  if (x === null) return 1;
  if (y === null) return -1;
  if (x === y) return 0;
  else return x < y ? -1 : 1;
});
console.log(detail_list);
