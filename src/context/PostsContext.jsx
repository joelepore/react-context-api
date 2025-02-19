import { createContext, useContext, useEffect, useState } from "react";

const PostsContext = createContext();

const PostsProvider = ({ children, data }) => {
  const [posts, setPosts] = useState(data);

  return (
    <PostsContext.Provider value={{ posts }}>
      {children}
    </PostsContext.Provider>
  )
}

export { PostsProvider, PostsContext }