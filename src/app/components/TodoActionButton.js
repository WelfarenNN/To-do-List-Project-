export const TodoActionButton = (props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={props.className}
    >
      {props.text}
    </button>
  );
};
