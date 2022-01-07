import "./Button.css";

function Button({
  text = "text button",
  primary = false,
  info = false,
  danger = false,
  borderRadiusRight = false,
  form = {},
  onHideForm = () => {},
  onAddPost = () => {},
  onClearInput = () => {},
  onEditPost = () => {},
  onAddComment = () => {},
  onEditComment = () => {},
  postIndex,
  comment,
}) {
  function handleClick() {
    if (form.formMode === "add" && form.belong === "post") {
      onAddPost();
    } else if (form.formMode === "edit" && form.belong === "post") {
      onEditPost();
    } else if (form.formMode === "edit" && form.belong === "comment") {
      onEditComment();
    }
    onAddComment();
    onHideForm();
    onClearInput();
  }
  return (
    <div
      onClick={handleClick}
      className={`button ${primary && "primary"} ${danger && "danger"} ${
        info && "info"
      } ${borderRadiusRight && "borderRadiusRight"}`}
    >
      {text}
    </div>
  );
}

export default Button;
