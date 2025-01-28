import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import PostCard from "./PostCard";

const PostsList = () => {
  const { posts } = useContext(PostsContext);

  return (
    <div className="posts-list">
      {posts.map(post => (
        <PostCard key={post.id} data={post} />
      ))}
    </div>
  )
}

export default PostsList