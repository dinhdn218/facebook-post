import PostCreate from "./Components/PostCreate";
import PostForm from "./Components/PostForm";
import PostList from "./Components/PostList";
import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({});

  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [indexForm, setIndexForm] = useState();

  // Hàm hiển thị form
  function handleShowForm() {
    setForm({
      isShow: true,
      heading: "Thêm mới bài viết",
      textBtn: "Đăng",
      formMode: "add",
      belong: "post",
    });
  }

  // Hàm ẩn form
  function handleHideForm() {
    setForm((prev) => {
      return { ...prev, isShow: false };
    });
  }

  // Hàm làm sạch ô input trong form
  function handleClearInput() {
    setPost("");
  }

  // Hàm thêm mới bài viết
  function handleAddPost() {
    setPosts((prev) => {
      return [
        ...prev,
        {
          content: post,
          comments: [],
        },
      ];
    });
  }

  // Hàm hiển thị thông tin bài viết cần sửa lên form
  function showEditPostForm(postIndex) {
    setForm({
      isShow: true,
      heading: "Chỉnh sửa bài viết",
      textBtn: "Lưu bài viết",
      formMode: "edit",
      belong: "post",
    });
    setPost(posts[postIndex].content);
    setIndexForm(postIndex);
  }

  // Hàm chỉnh sửa bài viết
  function handleEditPost() {
    posts[indexForm].content = post;
    setPosts((prev) => prev);
  }

  // Hàm xóa bài viết
  function handleDeletePost(postIndex) {
    posts.splice(postIndex, 1);
    setPosts((prev) => [...prev]);
  }

  // Hàm thêm mới bình luận
  function handleAddComment(postIndex, comment) {
    setPosts((prev) => {
      posts[postIndex].comments.push(comment);
      return [...prev];
    });
  }

  // Hàm hiển thị thông tin bình luận cần sửa lên form
  function showEditCommentForm(postIndex, commentIndex) {
    setForm({
      isShow: true,
      heading: "Chỉnh sửa bình luận",
      textBtn: "Lưu bình luận",
      formMode: "edit",
      belong: "comment",
    });
    setPost(posts[postIndex].comments[commentIndex]);
    setIndexForm({ postIndex, commentIndex });
  }

  // Hàm chỉnh sửa bình luận
  function handleEditComment() {
    posts[indexForm.postIndex].comments[indexForm.commentIndex] = post;
    setPosts((prev) => prev);
  }

  // Hàm xóa bình luận
  function handleDeleteComment(postIndex, commentIndex) {
    posts[postIndex].comments.splice(commentIndex, 1);
    setPosts((prev) => [...prev]);
  }

  return (
    <div className="App">
      <PostCreate onShowForm={handleShowForm}></PostCreate>
      <PostForm
        onAddPost={handleAddPost}
        onClearInput={handleClearInput}
        post={post}
        setPost={setPost}
        onHideForm={handleHideForm}
        form={form}
        posts={posts}
        setPosts={setPosts}
        onEditPost={handleEditPost}
        onEditComment={handleEditComment}
      ></PostForm>
      <PostList
        onDeletePost={handleDeletePost}
        onShowEditPostForm={showEditPostForm}
        posts={posts}
        onAddComment={handleAddComment}
        onShowEditCommentForm={showEditCommentForm}
        onDeleteComment={handleDeleteComment}
      ></PostList>
    </div>
  );
}

export default App;
