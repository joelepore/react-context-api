import { createContext, useContext, useEffect, useState } from "react";

const PostsContext = createContext();

const PostsProvider = ({ children, data }) => {
  const [posts, setPosts] = useState(null);

  useEffect(setPosts(data), []);

  return (
    <PostsContext.Provider value={{ posts }}>
      {children}
    </PostsContext.Provider>
  )
}

const usePostsContext = useContext(PostsContext);

export { PostsProvider, usePostsContext }