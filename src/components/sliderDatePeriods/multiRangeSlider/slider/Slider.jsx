import { months } from "../../../../scripts/months";
import "./Slider.css";

const Slider = ({
  arrayOfObjsMonthAndYear,
  rangeRef: range,
  minVal,
  maxVal,
  isSelected,
}) => {
  const leftSelectedMonthToString = months.get(
    arrayOfObjsMonthAndYear[minVal].month
  );
  const rightSelectedMonthToString = months.get(
    arrayOfObjsMonthAndYear[maxVal].month
  );

  return (
    <div className="slider">
      <div className="slider__track" />
      <div ref={range} className="slider__range">
        <div className="slider__left-value">
          {leftSelectedMonthToString}
          <br />
          {arrayOfObjsMonthAndYear[minVal].year}
        </div>
        <div className="slider__right-value">
          {rightSelectedMonthToString}
          <br />
          {arrayOfObjsMonthAndYear[maxVal].year}
        </div>
      </div>
      <div className="slider__signature">
        {arrayOfObjsMonthAndYear.map((item, index) => (
          <div
            className={`
            ${
              // set  different color to the inscriptions over the years
              item.month === 1 && "year-color"
            } 
            ${
              // remove months when there is a year in the switch
              isSelected === "year" && item.month !== 1 && "without-months"
            }
            `}
            key={index}
          >
            {
              // replace month of January with year
              item.month !== 1 ? months.get(item.month).slice(0, 3) : item.year
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
