import { Provider } from "react-redux";
import { store } from "./actions/store";
import PostCardForm from "./components/Form/PostCardForm";
import Header from "./components/Header/Header";
import PostCards from "./components/PostCards";
function App() {
  return (
    <Provider store={store}>
      <Header />
      {/* <PostCardForm /> */}
      <PostCards />
    </Provider>
  );
}

export default App;
