import PostsList from "./components/PostsList"
import { PostsProvider } from "./context/PostsContext"
import PostsPage from "./pages/PostsPage"

import posts from "./data/posts"

const App = () => {
  return (
    <PostsProvider data={posts}>
      <PostsPage>
        <PostsList />
      </PostsPage>
    </PostsProvider>
  )
}

export default App