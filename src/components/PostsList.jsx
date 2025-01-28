import { usePostsContext } from "../context/PostsContext"
const PostsList = () => {
  const { posts } = usePostsContext();

  console.log(posts);
  return (
    <div>PostsList</div>
  )
}

export default PostsList