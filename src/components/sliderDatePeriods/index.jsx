import { useState } from "react";
import "./index.css";
import Switcher from "./switcher/Switcher";
import { dateRange } from "../../scripts/getArrMonths";
import { getMinSelAndMaxSelNum } from "../../scripts/getMinSelAndMaxSelNum";
import MultiRangeSlider from "./multiRangeSlider";

const SliderDatePeriods = ({
  minDate,
  maxDate,
  minSelectedDate,
  maxSelectedDate,
}) => {
  const [isSelected, setIsSelected] = useState("year"); // view status: year / month

  // get array of objects containing all intermediate dates by month between two dates
  // array objects contain two properties: month and year
  const arrayOfObjsMonthAndYear = dateRange(minDate, maxDate);

  // convert max and min dates into numbers to understand where to put the label
  const [minSelected, maxSelected] = getMinSelAndMaxSelNum(
    arrayOfObjsMonthAndYear,
    minSelectedDate,
    maxSelectedDate
  );

  return (
    <div className="slider-periods">
      <Switcher isSelected={isSelected} setIsSelected={setIsSelected} />
      <MultiRangeSlider
        min={0} //count should always start from 0
        max={arrayOfObjsMonthAndYear.length - 1} // determined by the last index of the date array
        minSelected={minSelected}
        maxSelected={maxSelected}
        arrayOfObjsMonthAndYear={arrayOfObjsMonthAndYear}
        isSelected={isSelected}
      />
    </div>
  );
};

export default SliderDatePeriods;
