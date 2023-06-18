import "./styles.css";
// import { Counter } from "./features/counter/Counter";
// import Aaryan from "./components/Aaryan";
import AddPostForm from "./posts/AddPost";
import PostList from "./posts/PostList";
export default function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Aaryan /> //works */}
      hello
      <AddPostForm />
      <PostList />
    </div>
  );
}
