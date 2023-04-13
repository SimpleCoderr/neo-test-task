import MyButton from "./button/MyButton"


const Switcher = (props) => {
  return (
    <div className="switcher">
      <MyButton name="year" title="Все года" {...props}/>
      <MyButton name="month" title="Месяца" {...props}/>
    </div>
  )
}

export default Switcher
