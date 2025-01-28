import { usePostsContext } from "../context/PostsContext"
import PostCard from "./PostCard";
const PostsList = () => {
  const { posts } = usePostsContext();

  return (
    <div className="posts-list">
      {posts.map(post => (
        <PostCard data={post} />
      ))}
    </div>
  )
}

export default PostsList