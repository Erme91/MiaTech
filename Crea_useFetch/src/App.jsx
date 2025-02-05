import useFetch from "./hooks/useFetch";
import TodoList from "./components/TodoList";
import { useContext } from "react";
import { TodoContext } from "./components/TodoContext";
import { TodoProvider } from "./components/TodoContext";

const App = () => {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>user id</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {posts && posts.map(post => (
            <tr key={post.id}>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <TodoProvider>
          <TodoList />
        </TodoProvider>
      </div>
    </>
  );
};

export default App;