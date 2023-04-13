import { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";
import MyInputRange from "./myInputRange/MyInputRange";
import Slider from "./slider/Slider";

const MultiRangeSlider = ({
  min,
  max,
  minSelected,
  maxSelected,
  arrayOfObjsMonthAndYear,
  isSelected,
}) => {
  const [minVal, setMinVal] = useState(minSelected);
  const [maxVal, setMaxVal] = useState(maxSelected);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  // convert to percents
  const getPercent = useCallback(
    (value) => ((value - min) / (max - min)) * 100,
    [min, max]
  );

  // triggered when the position of the left slider changes
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); //  '+' converts the value from type string to type number
      if (range.current) {
        range.current.style.left = `${minPercent}%`; // moving the range component to the left
        range.current.style.width = `${maxPercent - minPercent}%`; // and reduce/increase range length
      }
    }
  }, [minVal, getPercent]);

  // triggered when the position of the right slider changes
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`; // reduce/increase range length
      }
    }
  }, [maxVal, getPercent]);

  return (
    <div className="multiRangeSlider">
      <MyInputRange
        min={min} // defining a range of values
        max={max}
        value={minVal} // set a place in the range
        inputref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1); // that the left slider does not go behind the right
          setMinVal(value);
          event.target.value = value.toString();
        }}
      />

      <MyInputRange
        min={min}
        max={max}
        value={maxVal}
        inputref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1); // that the right slider does not go behind the left
          setMaxVal(value);
          event.target.value = value.toString();
        }}
      />

      <Slider
        arrayOfObjsMonthAndYear={arrayOfObjsMonthAndYear}
        rangeRef={range}
        minVal={minVal}
        maxVal={maxVal}
        isSelected={isSelected}
      />
    </div>
  );
};

export default MultiRangeSlider;
