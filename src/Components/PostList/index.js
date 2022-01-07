import PostItem from "../PostItem";
import "./PostList.css";

function PostList({
  posts,
  onShowEditPostForm,
  onDeletePost,
  onAddComment,
  onShowEditCommentForm,
  onDeleteComment,
}) {
  return (
    <div className="post-list">
      <p className="post-list-heading">Danh sách bài viết</p>
      {posts.map((post, index) => {
        return (
          <PostItem
            onShowEditCommentForm={onShowEditCommentForm}
            onDeletePost={onDeletePost}
            onShowEditPostForm={onShowEditPostForm}
            key={index}
            post={post}
            index={index}
            onAddComment={onAddComment}
            onDeleteComment={onDeleteComment}
          ></PostItem>
        );
      })}
    </div>
  );
}

export default PostList;
