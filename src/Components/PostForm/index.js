import "./PostForm.css";
import Button from "../Button";

function PostForm({
  form,
  onHideForm,
  post,
  setPost,
  onClearInput,
  onAddPost,
  onEditPost,
  onEditComment,
}) {
  return (
    <div className={`post-form ${form.isShow && "is-show"}`}>
      <div className="post-form-content">
        <div className="post-form-heading">{form.heading}</div>
        <div className="post-form-input">
          <textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Bạn đang nghĩ gì?"
          ></textarea>
        </div>
        <div className="post-form-footer">
          <Button
            onClearInput={onClearInput}
            onHideForm={onHideForm}
            onAddPost={onAddPost}
            primary
            text={form.textBtn}
            onEditPost={onEditPost}
            form={form}
            onEditComment={onEditComment}
          ></Button>
          <Button
            onClearInput={onClearInput}
            onHideForm={onHideForm}
            danger
            text="Hủy"
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
