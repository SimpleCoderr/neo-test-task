export const getMinSelAndMaxSelNum = function (
  arrayOfObjsMonthAndYear,
  minSelDate,
  maxSelDate
) {
  const minSelectedDateToArray = minSelDate.split("-");
  const maxSelectedDateToArray = maxSelDate.split("-");

  let minSelected = 0;
  let maxSelected = arrayOfObjsMonthAndYear.length - 1;

  arrayOfObjsMonthAndYear.forEach((item, index) => {
    if (
      item.month === +minSelectedDateToArray[1] &&
      item.year === +minSelectedDateToArray[0]
    ) {
      minSelected = index;
    }
    if (
      item.month === +maxSelectedDateToArray[1] &&
      item.year === +maxSelectedDateToArray[0]
    ) {
      maxSelected = index;
    }
  });
  return [minSelected, maxSelected];
};
