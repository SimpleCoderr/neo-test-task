import s from "./MyButton.module.css";

const MyButton = ({ title, name, isSelected, setIsSelected }) => {
  return (
    <button
      className={`${s.btn} ${isSelected === name ? s.btnIsActive : ""}`}
      onClick={(e) => setIsSelected(name)}
    >
      {title}
    </button>
  );
};

export default MyButton;
