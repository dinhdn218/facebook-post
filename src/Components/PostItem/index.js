import "./PostItem.css";
import Button from "../Button";
import Comment from "../Comment";
import { useState } from "react";

function PostItem({
  post,
  index,
  onShowEditPostForm,
  onDeletePost,
  onAddComment,
  onShowEditCommentForm,
  onDeleteComment,
}) {
  const [comment, setComment] = useState("");

  // Xử lí thêm việc clear ô input comment khi thêm 1 comment
  const handleAddCommentMore = () => {
    onAddComment(index, comment);
    setComment("");
  };

  return (
    <div className="post-item">
      <div className="post-item-heading">
        <div className="post-item-heading-left">
          <div className="post-item-heading-img-wrap">
            <img
              alt="avatar"
              className="post-item-heading-img"
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.30497-1/cp0/p60x60/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=6avYFF4W-uEAX9oN5dX&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_B_q3leFHC7Uu00MPWiB_mBGy5_JyCu_Nr2cVyCwAUhQ&oe=61F701A5"
            ></img>
          </div>
          <div className="post-item-heading-info">
            <p className="post-item-heading-name">Đinh Ngọc Định</p>
            <p className="post-item-heading-time">1 giờ</p>
          </div>
        </div>
        <div
          onClick={(e) => {
            const postItemOption = e.target.querySelector(
              ".post-item-heading-right-list"
            );
            if (postItemOption) postItemOption.classList.toggle("is-show");
          }}
          className="post-item-heading-right"
        >
          <svg viewBox="0 0 20 20" width="16px" height="16px">
            <g fillRule="evenodd" transform="translate(-446 -350)">
              <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
            </g>
          </svg>
          <div className="post-item-heading-right-list">
            <p
              onClick={(e) => {
                e.target.parentNode.classList.remove("is-show");
                onShowEditPostForm(index);
              }}
              className="post-item-heading-right-item"
            >
              Chỉnh sửa
            </p>
            <p
              onClick={(e) => {
                e.target.parentNode.classList.remove("is-show");
                onDeletePost(index);
              }}
              className="post-item-heading-right-item"
            >
              Xóa
            </p>
          </div>
        </div>
      </div>
      <div className="post-item-content">{post.content}</div>
      <div className="post-item-comment">
        <div className="post-item-comment-img-wrap">
          <img
            alt="avatar"
            className="post-item-comment-img"
            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.30497-1/cp0/p60x60/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=6avYFF4W-uEAX9oN5dX&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_B_q3leFHC7Uu00MPWiB_mBGy5_JyCu_Nr2cVyCwAUhQ&oe=61F701A5"
          ></img>
        </div>
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Viết bình luận..."
        />
        <Button
          onAddComment={handleAddCommentMore}
          info
          borderRadiusRight
          text="Bình luận"
          postIndex={index}
          comment={comment}
        ></Button>
      </div>
      <div className="post-comment-list">
        {post.comments.map((comment, commentIndex) => (
          <Comment
            onShowEditCommentForm={onShowEditCommentForm}
            key={commentIndex}
            comment={comment}
            commentIndex={commentIndex}
            postIndex={index}
            onDeleteComment={onDeleteComment}
          ></Comment>
        ))}
      </div>
    </div>
  );
}

export default PostItem;
