import "./Comment.css";

function Comment({
  comment,
  onShowEditCommentForm,
  postIndex,
  commentIndex,
  onDeleteComment,
}) {
  return (
    <div className="post-comment-item">
      <div className="post-item-comment-img-wrap">
        <img
          alt="avatar"
          className="post-item-comment-img"
          src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.30497-1/cp0/p60x60/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=6avYFF4W-uEAX9oN5dX&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_B_q3leFHC7Uu00MPWiB_mBGy5_JyCu_Nr2cVyCwAUhQ&oe=61F701A5"
        ></img>
      </div>
      <div className="post-comment-item-content">
        <p className="post-comment-item-name">Đinh Ngọc Định</p>
        <p className="post-comment-item-text">{comment}</p>
      </div>
      <div
        onClick={(e) => {
          const listOption = e.target.querySelector(
            ".post-comment-item-option-list"
          );
          if (listOption) listOption.classList.toggle("is-show");
        }}
        className="post-comment-item-option"
      >
        <svg viewBox="0 0 20 20" width="16px" height="16px">
          <g fillRule="evenodd" transform="translate(-446 -350)">
            <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
          </g>
        </svg>
        <div className="post-comment-item-option-list">
          <p
            onClick={(e) => {
              e.target.parentNode.classList.remove("is-show");
              onShowEditCommentForm(postIndex, commentIndex);
            }}
            className="post-comment-item-option-item"
          >
            Chỉnh sửa
          </p>
          <p
            onClick={(e) => {
              e.target.parentNode.classList.remove("is-show");
              onDeleteComment(postIndex, commentIndex);
            }}
            className="post-comment-item-option-item"
          >
            Xóa
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
