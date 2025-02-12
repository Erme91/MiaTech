import useFetch from "./hooks/useFetch";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import store from "./store/store";


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
        <Provider store={store}>
          <TodoList />
        </Provider>
      </div>
    </>
  );
};

export default App;