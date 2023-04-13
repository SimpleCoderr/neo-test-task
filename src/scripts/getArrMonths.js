export function dateRange(startDate, endDate) {
  var start = startDate.split("-");
  var end = endDate.split("-");
  var startYear = parseInt(start[0]);
  var endYear = parseInt(end[0]);
  var dates = [];

  for (var i = startYear; i <= endYear; i++) {
    var endMonth = i !== endYear ? 11 : parseInt(end[1]) - 1;
    var startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
    for (var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
      dates.push({ month: j + 1, year: i });
    }
  }
  return dates;
}
