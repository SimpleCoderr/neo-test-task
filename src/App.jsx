import "./App.css";
import SliderDatePeriods from "./components/sliderDatePeriods";

function App() {
  return (
    <div className="app">
        <div className="container">
          <SliderDatePeriods
            minDate="2014-01-01" //date should be specified in this form: [0000-00-00] - year-month-day
            maxDate="2016-01-01"
            minSelectedDate="2014-03-02"
            maxSelectedDate='2015-05-03'
          />
        </div>
    </div>
  );
}

export default App;
